import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WATCH, VIEW } from '../../middlewars/api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../SharedComponents/ButtonLink/ButtonLink';
import VideoImage from '../SharedComponents/VideoImage/VideoImage';
import ViewsAndLikes from '../SharedComponents/ViewsAndLikes/ViewsAndLikes';

import styles from './VIdeosSlider.module.css';

export default class VideosSlider extends React.Component {
  settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  slider = React.createRef();

  next = () => {
    this.slider.current.slickNext();
  };
  previous = () => {
    this.slider.current.slickPrev();
  };

  render() {
    const { videos, title, link, isPicture } = this.props;
    console.log('link', link);
    return (
      <div className={`${styles.wrap}`}>
        <div className={styles.wrapButton}>
          <div className={styles.titleWrap}>
            <h4 className={styles.title}>{title}</h4>
            {link && <Button label={'Show all'} link={link} />}
          </div>
          <div className={styles.buttonWrap}>
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
          </div>
        </div>

        <Slider
          {...this.settings}
          className={styles.slickList}
          ref={this.slider}
        >
          {(videos || []).map(video => {
            if (isPicture) {
              return (
                <div className={styles.item} key={video.link}>
                  <div className={styles.imageWrap}>
                    <VideoImage
                      img={video.preview_images && video.preview_images[0]}
                      link={'/' + VIEW + video.link}
                      altImg={video.name}
                      price={video.price_pics}
                      duration={video.duration}
                      isPicture
                    />
                    <div>
                      <NavLink
                        to={'/' + VIEW + video.link}
                        className={`imgTitleB ${styles.imgTitle}`}
                      >
                        {video.name}
                      </NavLink>
                    </div>
                    <ViewsAndLikes
                      like={video.likes_count}
                      views={video.views}
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div className={styles.item} key={video.link}>
                  <div className={styles.imageWrap}>
                    <VideoImage
                      img={video.preview_images && video.preview_images[0]}
                      link={'/' + WATCH + video.link}
                      altImg={video.name}
                      price={video.price_video}
                      duration={video.duration}
                    />
                    <div>
                      <NavLink
                        to={'/' + WATCH + video.link}
                        className={`imgTitleB ${styles.imgTitle}`}
                      >
                        {video.name}
                      </NavLink>
                    </div>
                    <ViewsAndLikes
                      like={video.likes_count}
                      views={video.views}
                    />
                  </div>
                </div>
              );
            }
          })}
        </Slider>
      </div>
    );
  }
}
VideosSlider.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      price_video: PropTypes.string,
      price_pics: PropTypes.string,
      name: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};
