import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import CategoryLoaded from '../../components/CategoryLoaded/CategoryLoaded';
import VideoCard from './component/VideoCard';

import styles from './Video.module.css';

@inject('store')
@observer
class Video extends Component {
  async componentDidMount() {
    const { id } = this.props.match.params;

    await this.handleClear();
    this.handleGetAllData(id);
  }

  // async componentDidUpdate(prevProps) {
  //   const { id } = this.props.match.params;
  //   if (prevProps.match.params.id !== id) {

  //     const { page } = this.state;
  //     this.props.store.stores.data.toggleLoadedCategory();
  //     await this.props.store.stores.data.getCategoryID(id, page);
  //     this.incrementPage();
  //   }
  // }

  handleClear = () => this.props.store.stores.data.clear();

  handleGetAllData = id => this.props.store.stores.data.handleGetVideoPage(id);

  render() {
    const {
      topCategories,
      categories,
      promotedVideo,
      topVideos,
      latestVideos,
      popularVideos,
      videoByID,
    } = this.props.store.stores.data;
    console.log(videoByID);
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
      videoByID &&
      popularVideos;

    console.log('render', videoByID);

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
            <VideoCard {...videoByID} />
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
export default Video;
