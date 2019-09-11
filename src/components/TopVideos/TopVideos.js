import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./TopVideos.module.css";
import img from "../../assets/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import LikesAndDate from "../SharedComponents/LikesAndDate/LikesAndDate";

import VideoImage from "../SharedComponents/VideoImage/VideoImage";

const TopVideos = ({ videos }) => (
  <div className={styles.wrap}>
    <h2 className={`${styles.title} ${"standartTitleBlack"}`}>
      <div className={styles.iconTitle}>
        <FontAwesomeIcon className={styles.titleIcon} icon={faStar} />
      </div>
      Top Videos
    </h2>
    <ul className={styles.list}>
      {videos.map(video => (
        <li className={styles.item} key={video.link}>
          <VideoImage
            img={img}
            link={video.link}
            altImg={video.name}
            duration={video.duration}
          />
          <div>
            {" "}
            <NavLink className={"imgTitleB"} to={video.link}>
              {video.name}
            </NavLink>
          </div>
          <LikesAndDate likes={video.likes_count} date={video.created_at} />
        </li>
      ))}
    </ul>
  </div>
);

TopVideos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TopVideos;
