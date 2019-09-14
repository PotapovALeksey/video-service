import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import VideoImage from '../SharedComponents/VideoImage/VideoImage';
import ViewsAndComments from '../SharedComponents/ViewsAndComments/ViewsAndComments';
import ButtonLink from '../SharedComponents/ButtonLink/ButtonLink';
import Loader from '../Loader/Loader';
import styles from './VideosList.module.css';
import img from '../../assets/img';

const VideosList = ({ videos, title, buttonLabel, buttonLink }) => (
  <div className={styles.wrap}>
    <div className={styles.top}>
      <h3 className={styles.title}>{title}</h3>
      {buttonLink && <ButtonLink label={buttonLabel} link={buttonLink} />}
    </div>
    <div className={styles.list}>
      {videos ? (
        <Row>
          {videos.map(video => (
            <Col
              xl={3}
              // lg={3}
              md={4}
              sm={6}
              xs={6}
              className={styles.item}
              key={video.link}
            >
              <VideoImage
                img={img}
                link={`/videos/${video.link}`}
                altImg={video.name}
                like={video.likes_count}
                duration={video.duration}
              />
              <NavLink
                className={`imgTitleB ${styles.imgTitle}`}
                to={`/videos/${video.link}`}
              >
                {video.name}
              </NavLink>
              <ViewsAndComments
                comments={video.comments_count}
                views={video.views}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Loader />
      )}
    </div>
  </div>
);

VideosList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default VideosList;
