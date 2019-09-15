import React from 'react';
import PropTypes from 'prop-types';
import styles from './VideoCard.module.css';

const VideoCard = ({
  comments_count,
  created_at,
  descr,
  duration,
  likes_count,
  link,
  preview_images,
  preview_video,
  views,
  title,
}) => (
  <div className={styles.wrap}>
    <div className={styles.leftColumn}>
      <img
        className={styles.img}
        src={`https://leatherfighter.com/preview${preview_images[0]}`}
        alt={title}
      />
    </div>
    <div className={styles.rightColumn}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.descr}>{descr}</p>
    </div>
  </div>
);

VideoCard.propTypes = {
  comments_count: PropTypes.number,
  created_at: PropTypes.string,
  decsr: PropTypes.string,
  duration: PropTypes.string,
  likes_count: PropTypes.number,
  preview_images: PropTypes.array,
  title: PropTypes.string,
  views: PropTypes.number,
};

export default VideoCard;
