import React from "react";
import { NavLink } from "react-router-dom";
import VideoImage from "../SharedComponents/VideoImage/VideoImage";
import ViewsAndComments from "../SharedComponents/ViewsAndComments/ViewsAndComments";
import ButtonLink from "../SharedComponents/ButtonLink/ButtonLink";
import styles from "./VideosList.module.css";
import img from "../../assets/img";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const VideosList = ({ videos, title, buttonLabel, buttonLink }) => (
  <div className={styles.wrap}>
    <div className={styles.top}>
      <h3 className={styles.title}>{title}</h3>
      {buttonLink && <ButtonLink label={buttonLabel} link={buttonLink} />}
    </div>
    {videos && (
      <Container fluid={true} className={styles.list}>
        <Row>
          {videos.map(video => (
            <Col
              // xl={4}
              // lg={4}
              md={4}
              sm={6}
              xs={12}
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
      </Container>
    )}
  </div>
);

VideosList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired
    })
  ).isRequired,
  title: PropTypes.string.isRequired
};

export default VideosList;
