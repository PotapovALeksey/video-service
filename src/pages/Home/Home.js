import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Loader from '../../components/Loader/Loader';
import Cards from '../../components/Cards/Cards';

import styles from './Home.module.css';

@inject('store')
@observer
class Home extends Component {
  async componentDidMount() {
    const { handleGetHomePage, getSearchedData } = this.props.store.stores.data;

    await this.handleClear();
    getSearchedData('a');
    handleGetHomePage();
  }
  handleClear = () => this.props.store.stores.data.clear();

  handleGetAllData = () => {
    this.props.store.stores.data.handlGetMainPage();
  };

  render() {
    const { categories, popularVideos } = this.props.store.stores.data;

    const isRender = categories && popularVideos;

    return isRender ? (
      <>
        <Header mainPage={true} categories={categories} />
        <div className="wrap">
          <LeftSidebar categories={categories} />
          <div className="content">
            <div>
              <img
                className={styles.mainImg}
                src="http://www.female-fighting.net/WebRoot/Store21/Shops/63207256/MediaGallery/newclip.png"
                alt="mainImage"
              />
              <Cards items={popularVideos} />
              <p className={styles.bText}>
                <strong>Sign up for free</strong> and purchase our{' '}
                <strong>Great Fighting Content.</strong>
              </p>
              <p className={styles.bText}>
                Immediately download from our collection of{' '}
                <strong>huge fighting videoclips and photosets.</strong>
              </p>
            </div>
            <Footer />
          </div>
          <RightSidebar />
        </div>
      </>
    ) : (
      <Loader load={!isRender} />
    );
  }
}
export default Home;
