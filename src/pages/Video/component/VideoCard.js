import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { PREVIEW_IMG } from '../../../middlewars/api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import styles from './VideoCard.module.css';

const checkNewImage = preview_images =>
  preview_images && preview_images[0] && preview_images[0].includes('http')
    ? preview_images[0]
    : PREVIEW_IMG + preview_images[0];

export default class VideoCard extends Component {
  state = {
    slidesToShow: 3,
    bigImg: '',
  };

  settings = {
    dots: false,
    speed: 500,
    slidesToShow: this.state.slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  componentDidMount() {
    const { preview_images } = this.props;
    const newImg = checkNewImage(preview_images);

    this.handleBigImg(newImg);
  }

  handleSlidesShow = images => {
    if (images.length !== this.state.slidesToShow) {
      this.setState({
        slidesToShow: images.length,
      });
    }
  };

  onClickImage = ({ target }) => {
    this.handleBigImg(target.src);
  };

  handleBigImg = img => {
    if (typeof img !== 'undefined' && img !== this.state.bigImg) {
      this.setState({
        bigImg: img,
      });
    }
  };

  slider = React.createRef();

  next = () => {
    this.slider.current.slickNext();
  };
  previous = () => {
    this.slider.current.slickPrev();
  };

  render() {
    const {
      comments_count,
      created_at,
      descr,
      duration,
      likes_count,
      link,
      preview_images,
      preview_video,
      views,
      title,
    } = this.props;

    const sliderWrapStyle = {
      maxWidth: preview_images.length * 190 + 'px',
    };

    const { bigImg } = this.state;

    this.handleSlidesShow(preview_images);

    return (
      <div className={`${styles.wrap} videoCard`}>
        <h1 className={styles.title}>{title}</h1>
        <img className={styles.img} src={bigImg} alt={title} />
        <div className={styles.sliderWrap} style={sliderWrapStyle}>
          <button
            className={`${styles.slickButton} ${styles.slickPrev}`}
            onClick={this.previous}
          >
            <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
          </button>
          <button
            className={`${styles.slickButton} ${styles.slickNext}`}
            onClick={this.next}
          >
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
          </button>
          <Slider
            {...this.settings}
            className={styles.slickList}
            ref={this.slider}
          >
            {preview_images &&
              preview_images.map(img => (
                <div
                  className={styles.item}
                  key={img}
                  data-src={img.includes('http') ? img : PREVIEW_IMG + img}
                >
                  <img
                    src={img.includes('http') ? img : PREVIEW_IMG + img}
                    className={styles.imgSl}
                    onClick={this.onClickImage}
                  />
                </div>
              ))}
          </Slider>
        </div>
        <div className={styles.content}>
          <div className={styles.columnLeft}>
            <p className={styles.descr}>{descr}</p>
          </div>
          <div className={styles.columnRight}></div>
        </div>
      </div>
    );
  }
}

VideoCard.propTypes = {
  comments_count: PropTypes.number,
  created_at: PropTypes.string,
  decsr: PropTypes.string,
  duration: PropTypes.string,
  likes_count: PropTypes.number,
  preview_images: PropTypes.array,
  title: PropTypes.string,
  views: PropTypes.number,
};
