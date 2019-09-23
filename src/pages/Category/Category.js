import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { throttle } from '../../utils/debounce';
import VideosList from '../../components/VideosList/VideosList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import CategoryLoaded from '../../components/CategoryLoaded/CategoryLoaded';

import styles from './Category.module.css';

const INITIAL_PAGE = 1;

@inject('store')
@observer
class Category extends Component {
  state = {
    page: INITIAL_PAGE,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    await this.handleClear();
    this.handleGetAllData(id);
    this.scrollTop();
  }

  async componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if (prevProps.match.params.id !== id) {
      this.setState({ page: INITIAL_PAGE });
      const { page } = this.state;
      this.props.store.stores.data.toggleLoadedCategory();
      await this.props.store.stores.data.getCategoryID(id, page);
      this.incrementPage();
      this.scrollTop();
    }
  }

  scrollTop = () => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

  incrementPage = () => this.setState({ page: this.state.page + 1 });

  handleClear = () => this.props.store.stores.data.clear();

  handleGetAllData = category =>
    this.props.store.stores.data.handleGetCategoryPage(category);

  handleAddLoading = async () => {
    const { id } = this.props.match.params;
    const { page } = this.state;
    await this.props.store.stores.data.getCategoryAddLoading(id, page);
    this.incrementPage();
  };

  // onScroll = element => {
  //   const { top, bottom, height } = element.getBoundingClientRect();
  //   const positiveTop = Math.abs(top);
  //   const load = window.innerHeight + positiveTop + 100 > height;

  //   // if (load) {
  //   //   this.handleAddLoading();
  //   // }
  // };

  throthleLoadMore = throttle(this.handleAddLoading, 1000);

  render() {
    const {
      topCategories,
      categories,
      promotedVideo,
      topVideos,
      latestVideos,
      categoryVideos,
      popularVideos,
      categoryIsLoaded,
    } = this.props.store.stores.data;

    const {
      isOpenedSidebar,
      toggleSidebar,
      openModal,
      closeModal,
      isOpenedModal,
    } = this.props.store.stores.view;

    const isRender =
      topCategories &&
      categories &&
      promotedVideo &&
      topVideos &&
      latestVideos &&
      (categoryVideos && categoryVideos.length !== 0) &&
      popularVideos;

    const title = this.props.match.params.id;

    return isRender ? (
      <>
        <Header toggleSidebar={toggleSidebar} openModal={openModal} />
        {isOpenedModal && <Modal onClose={closeModal} />}
        <div className="wrap">
          <LeftSidebar
            topCategories={topCategories}
            categories={categories}
            isOpenedSidebar={isOpenedSidebar}
          />
          <div className={styles.content}>
            <VideosList
              videos={categoryVideos}
              title={title}
              // onScroll={this.debounceOnScroll}
            />
            {categoryIsLoaded && <CategoryLoaded />}

            <button className={styles.loadMore} onClick={this.throthleLoadMore}>
              Load more
            </button>
          </div>
          <RightSidebar
            promoted={promotedVideo}
            latestVideos={latestVideos}
            topVideos={topVideos}
          />
        </div>
        <Footer
          populars={popularVideos}
          latests={latestVideos}
          categories={categories}
          popularCategories={topCategories}
        />
      </>
    ) : (
      <Loader load={!isRender} />
    );
  }
}
export default Category;
