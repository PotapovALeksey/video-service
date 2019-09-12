import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

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
    const {
      getTopCategories,
      getCategories,
      getPromoted,
      getTopVideos,
      getLatests,
      getFeatureds,
      getWhatsNew,
      getFreeVideos,
      getPopularVideos,
    } = this.props.store.stores.data;
    // left SD
    getTopCategories();
    getCategories();
    // right SD
    getPromoted();
    getTopVideos();
    getLatests();
    // body home page
    getFeatureds();
    getWhatsNew();
    getFreeVideos();
    // footer
    getPopularVideos();
  };
  render() {
    const {
      topCategories,
      categories,
      promoted,
      topVideos,
      latests,
      featureds,
      whatsNew,
      freeVideos,
      populars,
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
      promoted &&
      topVideos &&
      latests &&
      featureds &&
      whatsNew &&
      freeVideos &&
      populars;

    return isRender ? (
      <>
        <Header toggleSidebar={toggleSidebar} openModal={openModal} />
        {isOpenedModal && <Modal onClose={closeModal}/>}
        <div className="wrap">
          <LeftSidebar
            topCategories={topCategories}
            categories={categories}
            isOpenedSidebar={isOpenedSidebar}
          />
          <div className={styles.content}>
            <FeaturedVideos videos={featureds} />
            <VideosSlider videos={whatsNew} title={"What's new"} />
            <VideosList
              videos={freeVideos}
              title={'Free videos'}
              buttonLabel={'View all'}
              buttonLink={'/'}
            />
          </div>
          <RightSidebar
            promoted={promoted}
            latestVideos={latests}
            topVideos={topVideos}
          />
        </div>
        <Footer
          populars={populars}
          latests={latests}
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
