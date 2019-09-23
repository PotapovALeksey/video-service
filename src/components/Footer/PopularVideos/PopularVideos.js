import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { WATCH, PREVIEW_IMG } from '../../../middlewars/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import styles from './PopularVideos.module.css';

const PopularVideos = ({ videos }) => (
  <ul className={styles.list}>
    {videos &&
      videos.map(video => (
        <li key={video.name} className={styles.item}>
          {/* <div className={styles.picture}>
            <NavLink className={styles.link} to={'/' + WATCH + video.link}>
              <img
                src={PREVIEW_IMG + video.icon}
                alt={video.name}
                className={styles.img}
              />
            </NavLink>
          </div> */}
          <div className={styles.content}>
            <h3 className={styles.title}>
              <NavLink to={'/' + WATCH + video.link} className={styles.titleLink}>
                {video.name}
              </NavLink>
            </h3>
            <div>
              <span className={styles.text}>{video.videos_count} videos</span>
              <span className={styles.text}>
                <FontAwesomeIcon className={styles.icon} icon={faEye} />
                {video.views_sum} views
              </span>
            </div>
          </div>
        </li>
      ))}
  </ul>
);
PopularVideos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      videos_count: PropTypes.number.isRequired,
      views_sum: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PopularVideos;
