import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Banner from '../../components/SharedComponents/Banner/Banner';
import FeaturedVideos from '../../components/FeaturedVideos/FeaturedVideos';
import VideosSlider from '../../components/VIdeosSlider/VideosSlider';
import VideosList from '../../components/VideosList/VideosList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

import styles from './Home.module.css';

@inject('store')
@observer
class Home extends Component {
  async componentDidMount() {
    await this.handleClear();
    this.handleGetAllData();
  }
  handleClear = () => this.props.store.stores.data.clear();

  handleGetAllData = () => {
    this.props.store.stores.data.handlGetMainPage();
  };

  render() {
    const {
      topCategories,
      categories,
      promotedVideo,
      topVideos,
      latestVideos,
      featuredVideos,
      whatsNewVideos,
      freeVideos,
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
      featuredVideos &&
      whatsNewVideos &&
      freeVideos &&
      popularVideos;

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
            <Banner />
            <FeaturedVideos videos={featuredVideos} />
            <VideosSlider videos={whatsNewVideos} title={"What's new"} />
            <VideosList
              videos={freeVideos}
              title={'Free videos'}
              buttonLabel={'View all'}
              buttonLink={'/videos/free'}
            />
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
        {/* <SidebarMobileMenu store={ViewStore} /> */}
      </>
    ) : (
      <Loader load={!isRender} />
    );
  }
}
export default Home;
