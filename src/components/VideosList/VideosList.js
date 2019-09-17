import React, { Component, createRef } from 'react';
import { NavLink } from 'react-router-dom';
import { PREVIEW_IMG, WATCH } from '../../middlewars/api';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import VideoImage from '../SharedComponents/VideoImage/VideoImage';
import ViewsAndComments from '../SharedComponents/ViewsAndComments/ViewsAndComments';
import ButtonLink from '../SharedComponents/ButtonLink/ButtonLink';
import styles from './VideosList.module.css';

let iterator = 0;

export default class VideosList extends Component {
  listRef = createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.props.onScroll) {
      this.props.onScroll(this.listRef.current);
    }
  };

  render() {
    const { videos, title, buttonLabel, buttonLink } = this.props;

    return (
      <div className={styles.wrap}>
        <div className={styles.top}>
          <h3 className={styles.title}>{title}</h3>
          {buttonLink && <ButtonLink label={buttonLabel} link={buttonLink} />}
        </div>
        <div className={styles.list} ref={this.listRef}>
          {videos && videos.length !== 0 && (
            <Row>
              {videos.map(video => (
                <Col
                  xl={3}
                  md={4}
                  sm={6}
                  xs={6}
                  className={styles.item}
                  key={video.link + ++iterator}
                >
                  <VideoImage
                    img={PREVIEW_IMG +  video.preview_images[0]}
                    link={'/' + WATCH + video.link}
                    altImg={video.name}
                    like={video.likes_count}
                    duration={video.duration}
                  />
                  <NavLink
                    className={`imgTitleB ${styles.imgTitle}`}
                    to={'/' + WATCH + video.link}
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
          )}
        </div>
      </div>
    );
  }
}

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
