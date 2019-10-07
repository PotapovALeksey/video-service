import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Paypal from '../../components/PayPall/Paypall';
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
      loadedCategory,
      handleGetCategoryPage,
    } = this.props.store.stores.data;

    if (prevProps.match.params.id !== id) {
      this.setState({ page: INITIAL_PAGE, entriesPage: INITIAL_ENTRIES_PAGE });

      await loadedCategory();
      await handleGetCategoryPage(id, page, INITIAL_ENTRIES_PAGE);

      this.scrollTop();
    } else if (
      prevState.entriesPage !== this.state.entriesPage ||
      prevState.page !== this.state.page
    ) {
      await loadedCategory();
      await handleGetCategoryPage(id, page, entriesPage);
    }
  }

  onChangeEntriesPage = ({ target }) => {
    this.setState({ [target.name]: Number(target.value), page: INITIAL_PAGE });
  };

  scrollTop = () => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

  handleClear = () => this.props.store.stores.data.clear();

  createPaginationItems = pagination => {
    let paginationItems = [];
    for (let index = 1; index <= pagination.last_page; index++) {
      paginationItems = [
        ...paginationItems,

        <span
          key={index}
          className={styles.pagItem}
          style={
            pagination.current_page === index
              ? { backgroundColor: '#134b83', color: '#fff' }
              : null
          }
          onClick={() => {
            console.log('index', index);
            this.setState({
              page: index,
            });
          }}
        >
          {index}
        </span>,
      ];
    }

    return paginationItems;
  };

  render() {
    const {
      categoryID,
      categories,
      categoryIsLoaded,
      categoryIDPagination,

    } = this.props.store.stores.data;
 
    const { entriesPage } = this.state;

    const isRender = categories && categoryID && categoryIDPagination;

    return isRender ? (
      <>
        <Header categories={categories}/>
        <div className="wrap">
          <LeftSidebar/>
          <div className="content">
            <div>
              <Paypal />
              <h1 className={styles.title}>Fencing and Stickfights</h1>
              <div className={styles.controls}>
                <div className={styles.left}>
                  <div className={styles.selectWrap}>
                    <p className={styles.text}>Display per page</p>
                    <select
                      className={styles.select}
                      onChange={this.onChangeEntriesPage}
                      value={entriesPage}
                      name="entriesPage"
                    >
                      <option>15</option>
                      <option>30</option>
                      <option>45</option>
                      <option>60</option>
                    </select>
                  </div>
                  <p>
                    {categoryIDPagination.from}-{categoryIDPagination.to + ' '}
                    of {categoryIDPagination.total} results
                  </p>
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
                    {this.createPaginationItems(categoryIDPagination)}
                  </div>
                </div>
              </div>
              <Cards items={categoryID} />
              <div className={styles.controls}>
                <div className={styles.left}>
                  <p>
                    {categoryIDPagination.from}-{categoryIDPagination.to + ' '}
                    of {categoryIDPagination.total} results
                  </p>
                </div>
                <div className={styles.right}>
                  <div className={styles.pagination}>
                    {this.createPaginationItems(categoryIDPagination)}
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <RightSidebar />
        </div>

        {categoryIsLoaded && <CategoryLoaded />}
      </>
    ) : (
      <Loader load={!isRender} />
    );
  }
}
export default Category;
