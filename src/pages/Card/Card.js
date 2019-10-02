import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { throttle } from '../../utils/debounce';
import { PREVIEW_IMG } from '../../middlewars/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Cards from '../../components/Cards/Cards';
import Loader from '../../components/Loader/Loader';
import PopularVideosSl from '../../components/PopularVideosSl/PopularVideosSl';
import CategoryLoaded from '../../components/CategoryLoaded/CategoryLoaded';

import styles from './Card.module.css';

const setImage = video =>
  video.preview_images && video.preview_images[0].includes('http')
    ? video.preview_images[0]
    : PREVIEW_IMG + video.preview_images[0];

@inject('store')
@observer
class Card extends Component {
  state = {
    bigImg: '',
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const {
      handleGetVideoPage,
      clear,
      categoryID,
    } = this.props.store.stores.data;
    await clear();

    await handleGetVideoPage(id);
  }

  async componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    const {
      toggleLoadedVideo,
      handleGetVideoPage,
      videoByID,
      categoryID,
      getCategoryID,
    } = this.props.store.stores.data;

    const page = 1;
    const limit = 6;

    if (!categoryID && videoByID) {
      console.log('videoByID update', videoByID);
      getCategoryID(videoByID.category_link, page, limit);
    }

    if (prevProps.match.params.id !== id) {
      toggleLoadedVideo();
      await handleGetVideoPage(id);

      if (videoByID) {
        this.setState({ bigImg: setImage(videoByID) });
      }

      this.scrollTop();
    }
  }

  onClickImage = src => {
    this.setState({ bigImg: src });
  };

  scrollTop = () => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

  render() {
    const {
      videoByID,
      categories,
      categoryID,
      videoIsLoaded,
    } = this.props.store.stores.data;
    const { bigImg } = this.state;
    const isRender = videoByID && categories;

    console.log('categoryID', categoryID);
    let image;
    if (isRender) image = setImage(videoByID);

    return isRender ? (
      <>
        <Header />
        <div className="wrap">
          <LeftSidebar categories={categories} />
          <div className="content">
            <div className={styles.cardWrap}>
              <div className={styles.left}>
                <img
                  className={styles.bigImg}
                  src={bigImg || image}
                  alt={videoByID.title}
                />
                <div className={styles.imgList}>
                  {videoByID.preview_images.map(img => {
                    const image = img.includes('http')
                      ? img
                      : PREVIEW_IMG + img;
                    return (
                      <div
                        key={image}
                        className={styles.imgWrap}
                        onClick={() => this.onClickImage(image)}
                      >
                        <img className={styles.img} src={image} key={image} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.right}>
                <h1 className={styles.title}>{videoByID.title}</h1>
                <p className={styles.desc}>{videoByID.descr}</p>
                <div className={styles.other}>
                  <p className={styles.length}>
                    TOTAL PICS IN SET - {videoByID.preview_images.length} images
                  </p>
                  <p className={styles.price}>{videoByID.price_pics}</p>
                  <div className={styles.controls}>
                    <button className={styles.button}>
                      Add to bascket
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faShoppingCart}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.otherCardWrap}>
              <p className={styles.bottomT}>
                Customers who bought this product also bought
              </p>
              <PopularVideosSl videos={categoryID} />
              {/* <Cards items={categoryID} /> */}
            </div>
          </div>
          <RightSidebar />
        </div>
        <Footer />
        {videoIsLoaded && <CategoryLoaded />}
      </>
    ) : (
      <Loader load={!isRender} />
    );
  }
}

export default Card;
