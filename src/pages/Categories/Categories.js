import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { PICTURES, VIDEOS } from '../../middlewars/api';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Loader from '../../components/Loader/Loader';

import styles from './Categories.module.css';

@inject('store')
@observer
class Categories extends Component {
  async componentDidMount() {
    await this.handleClear();
    this.props.store.stores.data.getNewsVideos();
  }
  handleClear = () => this.props.store.stores.data.clear();

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
      categoryVideosAll,
      newsVideos,
    } = this.props.store.stores.data;

    const isRender =
      topCategories &&
      categories &&
      promotedVideo &&
      topVideos &&
      latestVideos &&
      popularVideos &&
      categoryVideosAll;

    console.log('category', newsVideos);

    return true ? (
      <>
        <Header toggleSidebar={toggleSidebar} openModal={openModal} />
        <div className="wrap">
          <LeftSidebar />
          <div className={styles.content}></div>
          <RightSidebar />
        </div>
        <Footer />
      </>
    ) : (
      <Loader load={!isRender} />
    );
  }
}
export default Categories;
