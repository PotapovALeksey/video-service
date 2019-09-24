import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './VideoCard.module.css';

export default class VideoCard extends Component {
  render() {
    const {
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
    } = this.props;
    const iframeUrl = `https://www.youtube.com/embed/${preview_video}`;

    return (
      <div className={`${styles.wrap} videoCard`}>
        <h1 className={styles.title}>{title}</h1>
        <iframe
          className={styles.iframe}
          width="100%"
          src={iframeUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.content}>
          <div className={styles.columnLeft}>
            <p className={styles.descr}>{descr}</p>
          </div>
          <div className={styles.columnRight}></div>
        </div>
      </div>
    );
  }
}

VideoCard.propTypes = {
  comments_count: PropTypes.number,
  created_at: PropTypes.string,
  decsr: PropTypes.string,
  duration: PropTypes.string,
  likes_count: PropTypes.number,
  title: PropTypes.string,
  views: PropTypes.number,
};
