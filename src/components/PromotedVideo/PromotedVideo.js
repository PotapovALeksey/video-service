import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PromotedVideo.module.css';
import img from '../../assets/img/features.jpg';

const PromotedVideo = ({ promoted }) => (
  <div className={styles.wrap}>
    <NavLink className={styles.link} to={`/videos/${promoted.link}`}>
      <img className={styles.img} src={img} alt="promoted" />
    </NavLink>
    <div className={styles.content}>
      <NavLink className={styles.linkTitle} to={`/videos/${promoted.link}`}>
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
  }),
};

export default PromotedVideo;
