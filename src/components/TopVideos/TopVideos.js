import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { PREVIEW_IMG, WATCH } from '../../middlewars/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import LikesAndDate from '../SharedComponents/LikesAndDate/LikesAndDate';
import VideoImage from '../SharedComponents/VideoImage/VideoImage';
import styles from './TopVideos.module.css';

const TopVideos = ({ videos }) => (
  <div className={styles.wrap}>
    <h2 className={`${styles.title} ${'standartTitleBlack'}`}>
      <div className={styles.iconTitle}>
        <FontAwesomeIcon className={styles.titleIcon} icon={faStar} />
      </div>
      Top Videos
    </h2>
    <ul className={styles.list}>
      {videos.map(video => (
        <li className={styles.item} key={video.link}>
          <VideoImage
            img={video.preview_images && video.preview_images[0]}
            link={'/' + WATCH + video.link}
            altImg={video.name}
            duration={video.duration}
            price={video.price_video}
          />
          <div>
            <NavLink className={'imgTitleB'} to={'/' + WATCH + video.link}>
              {video.name}
            </NavLink>
          </div>
          <LikesAndDate likes={video.likes_count} date={video.created_at} />
        </li>
      ))}
    </ul>
  </div>
);

TopVideos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      price_video: PropTypes.string,
      name: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TopVideos;
