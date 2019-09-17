import React from 'react';
import { NavLink } from 'react-router-dom';
import { PREVIEW_IMG, WATCH } from '../../middlewars/api';
import PropTypes from 'prop-types';
import styles from './PromotedVideo.module.css';

const PromotedVideo = ({ promoted }) => (
  <div className={styles.wrap}>
    <NavLink className={styles.link} to={'/' + WATCH + promoted.link}>
      <img
        className={styles.img}
        src={PREVIEW_IMG + promoted.preview_images[0]}
        alt="promoted"
      />
    </NavLink>
    <div className={styles.content}>
      <NavLink className={styles.linkTitle} to={'/' + WATCH + promoted.link}>
        {promoted.name}
      </NavLink>
      <div>
        <span className={styles.views}>{promoted.views} views</span>
        <span className={styles.date}>{promoted.created_at}</span>
      </div>
    </div>
  </div>
);
PromotedVideo.propTypes = {
  promoted: PropTypes.shape({
    link: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    preview_images: PropTypes.array,
  }),
};

export default PromotedVideo;
