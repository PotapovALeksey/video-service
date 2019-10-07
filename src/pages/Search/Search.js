import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Loader from '../../components/Loader/Loader';
import CategoryLoaded from '../../components/CategoryLoaded/CategoryLoaded';
import Cards from '../../components/Cards/Cards';

import styles from './Search.module.css';

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
    const { getSearchedData, getCategories } = this.props.store.stores.data;

    getSearchedData(id, page, entriesPage);
    getCategories();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    const { page, entriesPage } = this.state;

    const { loadedSearch, getSearchedData } = this.props.store.stores.data;

    if (
      prevState.entriesPage !== this.state.entriesPage ||
      prevState.page !== this.state.page
    ) {
      await loadedSearch();
      getSearchedData(id, page, entriesPage);
    }
  }

  onChangeEntriesPage = ({ target }) => {
    this.setState({ [target.name]: Number(target.value), page: INITIAL_PAGE });
  };

  scrollTop = () => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

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
      categories,
      searchLoaded,
      searchPagination,
      searchData,
    } = this.props.store.stores.data;

    console.log('searchData', searchData);

    const { entriesPage } = this.state;

    const isRender = categories && searchData && searchPagination;

    return isRender ? (
      <>
        <Header categories={categories} />
        <div className="wrap">
          <LeftSidebar categories={categories} />
          <div className="content">
            <div>
              <h1 className={styles.title}>Searched result</h1>
              {searchData.length > 0 ? (
                <>
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
                        {searchPagination.from}-{searchPagination.to + ' '}
                        of {searchPagination.total} results
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
                        {this.createPaginationItems(searchPagination)}
                      </div>
                    </div>
                  </div>
                  <Cards items={searchData} />
                  <div className={styles.controls}>
                    <div className={styles.left}>
                      <p>
                        {searchPagination.from}-{searchPagination.to + ' '}
                        of {searchPagination.total} results
                      </p>
                    </div>
                    <div className={styles.right}>
                      <div className={styles.pagination}>
                        {this.createPaginationItems(searchPagination)}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p>Not results</p>
              )}
            </div>

            <Footer />
          </div>
          <RightSidebar />
        </div>

        {searchLoaded && <CategoryLoaded />}
      </>
    ) : (
      <Loader load={!isRender} />
    );
  }
}
export default Category;
