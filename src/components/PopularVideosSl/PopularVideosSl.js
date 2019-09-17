import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PREVIEW_IMG, WATCH } from '../../middlewars/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoImage from '../SharedComponents/VideoImage/VideoImage';
import CommentAndDate from '../SharedComponents/CommentAndDate/CommentAndDate';
import styles from './PopularVideosSl.module.css';

export default class PopularVideosSl extends React.Component {
  settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    lazy: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
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
    const { videos } = this.props;

    return (
      <div className={`${styles.wrap} popularVideos`}>
        <div className={styles.wrapButton}>
          <h4 className={styles.title}>Popular Videos</h4>
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

        <Slider {...this.settings} className="slick-list" ref={this.slider}>
          {(videos || []).map(video => (
            <div className={styles.item} key={video.link}>
              <div className={styles.imageWrap}>
                <VideoImage
                  img={PREVIEW_IMG + video.preview_images[0]}
                  link={'/' + WATCH + video.link}
                  altImg={video.name}
                  like={video.likes_count}
                  duration={video.duration}
                />
                <div>
                  <NavLink
                    to={'/' + WATCH + video.link}
                    className={`imgTitleW ${styles.imgTitle}`}
                  >
                    {video.name}
                  </NavLink>
                </div>
                <CommentAndDate
                  comments={video.comments_count}
                  date={video.created_at}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
PopularVideosSl.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
