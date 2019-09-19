import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { CATEGORIES, PREVIEW_IMG, concatURL } from '../../middlewars/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import styles from './TopCategories.module.css';

const TopCategories = ({ topCategories }) => (
  <div className={styles.wrap}>
    <h2 className={`${styles.title} ${'standartTitleBlack'}`}>
      Top Categories
    </h2>
    {topCategories &&
      topCategories.map(item => (
        <div className={styles.channelSubscribe} key={item.link}>
          <div className={styles.channelPicture}>
            <NavLink
              className={styles.imgLink}
              to={concatURL(CATEGORIES, item.link)}
            >
              <img
                src={PREVIEW_IMG + item.icon}
                alt={item.name}
                className={styles.image}
              />
            </NavLink>
          </div>
          <div className={styles.channelContent}>
            <NavLink
              to={concatURL(CATEGORIES, item.link)}
              className={styles.titleLink}
            >
              <p className={styles.channelTitle}>{item.name}</p>
            </NavLink>
            <span className={`${styles.text} ${'miniText'}`}>
              {item.videos_count} videos
            </span>
            <span className={`${styles.text} ${'miniText'}`}>
              <FontAwesomeIcon className={styles.icon} icon={faEye} />
              {item.views_sum} views
            </span>
          </div>
        </div>
      ))}
  </div>
);

TopCategories.propTypes = {
  topCategories: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      videos_count: PropTypes.number.isRequired,
      views_sum: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TopCategories;
