import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { VIDEOS, PICTURES, concatURL, WATCH } from '../../middlewars/api';

import ButtonLink from '../../components/SharedComponents/ButtonLink/ButtonLink';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import CategoryLoaded from '../../components/CategoryLoaded/CategoryLoaded';
import PictureCard from './component/PictureCard';
import VideosSlider from '../../components/VIdeosSlider/VideosSlider';

import styles from './Picture.module.css';

@inject('store')
@observer
class Video extends Component {
  async componentDidMount() {
    const { id } = this.props.match.params;

    await this.handleClear();
    this.handleGetAllData(id);
    this.scrollTop();
  }

  async componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if (prevProps.match.params.id !== id) {
      this.props.store.stores.data.toggleLoadedVideo();
      await this.props.store.stores.data.getVideoByID(id);

      // this.redirectToVideo();

      this.scrollTop();
    }
  }

  // havePicture = () => {
  //   const { videoByID } = this.props.store.stores.data;

  //   return (
  //     videoByID &&
  //     videoByID.preview_images &&
  //     videoByID.preview_images.length !== 0
  //   );
  // };

  // haveVideo = () => {
  //   const { videoByID } = this.props.store.stores.data;

  //   return videoByID && videoByID.preview_video;
  // };

  // redirectToVideo = () => {
  //   const { id } = this.props.match.params;

  //   if (!this.havePicture()) {
  //     this.props.history.push(`/watch/${id}`);
  //   }
  // };

  scrollTop = () => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

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
      videoIsLoaded,
      categoryVideosAll,
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
      videoByID &&
      categoryVideosAll &&
      popularVideos;

    // const havePageVideo = this.haveVideo();

    // const { id } = this.props.match.params;

    console.log(videoByID);

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
            {/* {havePageVideo && (
              <ButtonLink label={'Go video'} link={concatURL(WATCH, id)} />
            )} */}
            <PictureCard {...videoByID} />
            {categoryVideosAll.map(({ videos, name, link }) => (
              <VideosSlider
                key={link}
                videos={videos}
                title={name}
                link={`/${PICTURES}${link}`}
                isPicture
              />
            ))}
            {videoIsLoaded && <CategoryLoaded />}
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
