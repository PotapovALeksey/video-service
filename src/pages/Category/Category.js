import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import VideosList from '../../components/VideosList/VideosList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

import styles from './Category.module.css';

@inject('store')
@observer
class Category extends Component {
  async componentDidMount() {
    const { id } = this.props.match.params;

    await this.handleClear();
    this.handleGetAllData(id);
  }

  async componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if (prevProps.match.params.id !== id) {
      console.log(id, 'id');
      this.props.store.stores.data.clearCategoryVideos();
      this.handleGetAllData(id);
    }
  }

  handleClear = () => this.props.store.stores.data.clear();

  handleGetAllData = category =>
    this.props.store.stores.data.handleGetCategoryPage(category);

  render() {
    const {
      topCategories,
      categories,
      promotedVideo,
      topVideos,
      latestVideos,
      categoryVideos,
      popularVideos,
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

    console.log('render', categoryVideos);

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
            <VideosList videos={categoryVideos} title={title} />
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
