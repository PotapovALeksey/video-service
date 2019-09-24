import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faImage } from '@fortawesome/free-solid-svg-icons';
import getImage from '../../../const/defaultImage';

import PricesAndDuration from '../PricesAndDuration/PricesAndDuration';
import styles from './VideoImage.module.css';

const VideoImage = ({ img, link, altImg, price, duration, isPicture }) => (
  <div className={styles.wrap}>
    <NavLink className={styles.link} to={link}>
      <img className={styles.img} src={getImage(img)} alt={altImg} />
    </NavLink>
    <NavLink className={`${styles.iconWrap} ${styles.absolute}`} to={`${link}`}>
      {isPicture ? (
        <FontAwesomeIcon className={styles.titleIcon} icon={faImage} />
      ) : (
        <FontAwesomeIcon className={styles.titleIcon} icon={faPlay} />
      )}
    </NavLink>
    <PricesAndDuration price={price} duration={duration} />
  </div>
);

VideoImage.propTypes = {
  img: PropTypes.string,
  link: PropTypes.string,
  altImg: PropTypes.string,
  price: PropTypes.string,
  duration: PropTypes.string,
};

export default VideoImage;
