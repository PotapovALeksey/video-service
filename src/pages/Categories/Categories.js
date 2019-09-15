import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import VideosSlider from '../../components/VIdeosSlider/VideosSlider';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

import styles from './Categories.module.css';

@inject('store')
@observer
class Categories extends Component {
  async componentDidMount() {
    await this.handleClear();
    this.handleGetAllData();
  }
  handleClear = () => this.props.store.stores.data.clear();

  handleGetAllData = () => {
    const { handleGetCategoriesPage } = this.props.store.stores.data;
    handleGetCategoriesPage();
  };

  render() {
    const {
      isOpenedSidebar,
      toggleSidebar,
      openModal,
      closeModal,
      isOpenedModal,
    } = this.props.store.stores.view;

    const {
      topCategories,
      categories,
      promotedVideo,
      topVideos,
      latestVideos,
      popularVideos,
      // whatsNewVideos,
      // gameVideos,
      // kombatVideos,
      // movieVideos,
      // musicVideos,
      // newsVideos,
      // freeVideos,
      categoryVideosAll,
    } = this.props.store.stores.data;

    const isRender =
      topCategories &&
      categories &&
      promotedVideo &&
      topVideos &&
      latestVideos &&
      popularVideos &&
      categoryVideosAll;
    // whatsNewVideos &&
    // gameVideos &&
    // kombatVideos &&
    // movieVideos &&
    // musicVideos &&
    // newsVideos &&
    // freeVideos;

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
            {categoryVideosAll.map(({ videos, name, link }) => (
              <VideosSlider
                key={link}
                videos={videos}
                title={name}
                link={`categories/${link}`}
              />
            ))}
            {/* <VideosSlider
              videos={whatsNewVideos}
              title={"What's new"}
              link={'categories/whats-new'}
            />
            <VideosSlider
              videos={gameVideos}
              title={'Game'}
              link={'categories/game'}
            />
            <VideosSlider
              videos={kombatVideos}
              title={'Kombat'}
              link={'categories/kombat'}
            />
            <VideosSlider
              videos={movieVideos}
              title={'Movie'}
              link={'categories/movie'}
            />
            <VideosSlider
              videos={musicVideos}
              title={'Music'}
              link={'categories/music'}
            />
            <VideosSlider
              videos={newsVideos}
              title={'News'}
              link={'categories/news'}
            />
            <VideosSlider
              videos={freeVideos}
              title={'Free'}
              link={'categories/free'}
            /> */}
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
export default Categories;
