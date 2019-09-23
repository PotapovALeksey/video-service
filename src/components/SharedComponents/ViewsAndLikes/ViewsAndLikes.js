import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEye } from '@fortawesome/free-solid-svg-icons';
import styles from './ViewsAndLikes.module.css';
import PropTypes from 'prop-types';

const ViewsAndLikes = ({ views, like }) => (
  <>
    <span className={`${'miniText'} ${styles.views} ${styles.iconWrap}`}>
      <FontAwesomeIcon className={styles.icon} icon={faEye} />
      {views}
    </span>
    <span className={`${'miniText'} ${styles.iconWrap}`}>
      <FontAwesomeIcon className={styles.icon} icon={faThumbsUp} />
      {like}
    </span>
  </>
);
ViewsAndLikes.propTypes = {
  views: PropTypes.number,
  like: PropTypes.number,
};
export default ViewsAndLikes;
