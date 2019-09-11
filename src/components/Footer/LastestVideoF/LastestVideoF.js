import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import LikesAndDuration from "../../SharedComponents/LikesAndDuration/LikesAndDuration";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./LastestVideoF.module.css";
import img from "../../../assets/img";

const LatestVideoF = ({ videos }) => (
  <ul>
    {videos &&
      videos.map(video => (
        <li className={styles.item} key={video.link}>
          <div className={styles.picture}>
            <NavLink className={styles.linkImg} to={`/videos/${video.link}`}>
              <img src={img} alt={video.name} />
              <LikesAndDuration duration={video.duration} />
              <div className={styles.iconWrap}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </NavLink>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>
              <NavLink
                className={styles.titleLink}
                to={`/videos/${video.link}`}
              >
                {video.name}
              </NavLink>
            </h3>
            <div>
              <span className={`miniText ${styles.slash}`}>We are</span>
              <span className={`miniText`}>{video.likes_count} Likes</span>
            </div>
          </div>
        </li>
      ))}
  </ul>
);

LatestVideoF.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired
    })
  ).isRequired
};

export default LatestVideoF;
