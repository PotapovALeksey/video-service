import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { throttle } from '../../utils/debounce';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Loader from '../../components/Loader/Loader';
import CategoryLoaded from '../../components/CategoryLoaded/CategoryLoaded';
import Cards from '../../components/Cards/Cards';

import styles from './Category.module.css';

const INITIAL_PAGE = 1;
const INITIAL_ENTRIES_PAGE = 15;

@inject('store')
@observer
class Category extends Component {
  state = {
    page: INITIAL_PAGE,
    entriesPage: INITIAL_ENTRIES_PAGE,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { page, entriesPage } = this.state;

    await this.handleClear();
    this.props.store.stores.data.handleGetCategoryPage(id, page, entriesPage);
    this.scrollTop();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    const { page, entriesPage } = this.state;
    const {
      toggleLoadedCategory,
      handleGetCategoryPage,
    } = this.props.store.stores.data;

    if (prevProps.match.params.id !== id) {
      this.setState({ page: INITIAL_PAGE, entriesPage: INITIAL_ENTRIES_PAGE });

      toggleLoadedCategory();
      await handleGetCategoryPage(id, page);

      this.scrollTop();
    }

    if (prevState.entriesPage !== this.state.entriesPage) {
      toggleLoadedCategory();
      await handleGetCategoryPage(id, page, entriesPage);
    }
  }

  onChange = ({ target }) => this.setState({ [target.name]: Number(target.value) });

  scrollTop = () => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

  handleClear = () => this.props.store.stores.data.clear();

  render() {
    const {
      categoryID,
      categories,
      categoryIsLoaded,
    } = this.props.store.stores.data;

    const { entriesPage } = this.state;

    const isRender = categories && categoryID;

    return isRender ? (
      <>
        <Header />
        <div className="wrap">
          <LeftSidebar categories={categories} />
          <div className="content">
            <h1 className={styles.title}>Fencing and Stickfights</h1>
            <div className={styles.controls}>
              <div className={styles.left}>
                <div className={styles.selectWrap}>
                  <p className={styles.text}>Display per page</p>
                  <select
                    className={styles.select}
                    onChange={this.onChange}
                    value={entriesPage}
                    name="entriesPage"
                  >
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                    <option>60</option>
                  </select>
                </div>
                <p>1 - 60 of 101 results</p>
              </div>
              <div className={styles.right}>
                <div className={styles.selectWrap}>
                  <p className={styles.text}>Display per page</p>
                  <select className={styles.select} name="entriesPage">
                    <option>Relevance</option>
                    <option>Name</option>
                    <option>Price: ascending</option>
                    <option>Price: descending</option>
                  </select>
                </div>
                <div className={styles.pagination}>
                  <span className={styles.pagItem}>1</span>
                  <span className={styles.pagItem}>2</span>
                </div>
              </div>
            </div>
            <Cards items={categoryID} />
            <div className={styles.controls}>
              <div className={styles.left}>
                <p>1 - 60 of 101 results</p>
              </div>
              <div className={styles.right}>
                <div className={styles.pagination}>
                  <span className={styles.pagItem}>1</span>
                  <span className={styles.pagItem}>2</span>
                </div>
              </div>
            </div>
          </div>
          <RightSidebar />
        </div>
        <Footer />
        {categoryIsLoaded && <CategoryLoaded />}
      </>
    ) : (
      <Loader load={!isRender} />
    );
  }
}
export default Category;
