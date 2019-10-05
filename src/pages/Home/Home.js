import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Loader from '../../components/Loader/Loader';

import styles from './Home.module.css';

@inject('store')
@observer
class Home extends Component {
  async componentDidMount() {
    const { handleGetHomePage } = this.props.store.stores.data;

    await this.handleClear();
    handleGetHomePage();
  }
  handleClear = () => this.props.store.stores.data.clear();

  handleGetAllData = () => {
    this.props.store.stores.data.handlGetMainPage();
  };

  render() {
    const { categories } = this.props.store.stores.data;

    const isRender = categories;

    return isRender ? (
      <>
        <Header />

        <div className="wrap">
          <LeftSidebar categories={categories} />
          <div className={styles.content}>
            <img
              className={styles.mainImg}
              src="http://www.female-fighting.net/WebRoot/Store21/Shops/63207256/MediaGallery/newclip.png"
              alt="mainImage"
            />
            <div className={styles.items}>
              <div className={styles.item}>
                <NavLink to="#" className={styles.itemLink}>
                  <img
                    src="https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg"
                    alt="cat"
                  />
                </NavLink>
              </div>
              <div className={styles.item}>
                <NavLink to="#" className={styles.itemLink}>
                  <img
                    src="https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg"
                    alt="cat"
                  />
                </NavLink>
              </div>
              <div className={styles.item}>
                <NavLink to="#" className={styles.itemLink}>
                  <img
                    src="https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg"
                    alt="cat"
                  />
                </NavLink>
              </div>
            </div>
            <p className={styles.bText}>
              <strong>Sign up for free</strong> and purchase our{' '}
              <strong>Great Fighting Content.</strong>
            </p>
            <p className={styles.bText}>
              Immediately download from our collection of{' '}
              <strong>huge fighting videoclips and photosets.</strong>
            </p>
          </div>
          <RightSidebar />
        </div>
        <Footer categories={categories} />
      </>
    ) : (
      <Loader load={!isRender} />
    );
  }
}
export default Home;
