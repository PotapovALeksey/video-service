import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { PREVIEW_IMG} from '../../middlewars/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import LikesAndDate from '../SharedComponents/LikesAndDate/LikesAndDate';
import styles from './LatestVideos.module.css';

const LatestVideos = ({ videos }) => (
  <div className={styles.wrap}>
    <h2 className={`${styles.title} ${'standartTitleBlack'}`}>
      <div className={styles.iconWrap}>
        <FontAwesomeIcon className={styles.titleIcon} icon={faPlay} />
      </div>
      Latest Videos
    </h2>
    <ul className={styles.list}>
      {videos.map(video => (
        <li className={styles.item} key={video.link}>
          <div className={styles.picture}>
            <NavLink className={styles.link} to={`/watch/${video.link}`}>
              <img
                className={styles.img}
                src={PREVIEW_IMG + video.preview_images[0]}
                alt={video.name}
              />
            </NavLink>
            <NavLink
              className={`${styles.iconWrap} ${styles.absolute}`}
              to={`/watch/${video.link}`}
            >
              <FontAwesomeIcon className={styles.titleIcon} icon={faPlay} />
            </NavLink>
          </div>
          <div className={styles.content}>
            <h3 className={styles.titleItem}>
              <NavLink className={styles.link} to={`/watch/${video.link}`}>
                {video.name}
              </NavLink>
            </h3>
            <div>
              <LikesAndDate likes={video.likes_count} date={video.created_at} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

LatestVideos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default LatestVideos;
