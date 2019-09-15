import React from "react";
import { NavLink } from "react-router-dom";
import LikesAndDuration from "../LikesAndDuration/LikesAndDuration";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./VideoImage.module.css";

const VideoImage = ({ img, link, altImg, like, duration }) => (
  <div className={styles.wrap}>
    <NavLink className={styles.link} to={link}>
      <img className={styles.img} src={img} alt={altImg} />
    </NavLink>
    <NavLink
      className={`${styles.iconWrap} ${styles.absolute}`}
      to={`${link}`}
    >
      <FontAwesomeIcon className={styles.titleIcon} icon={faPlay} />
    </NavLink>
    <LikesAndDuration like={like} duration={duration} />
  </div>
);

VideoImage.propTypes = {
  img: PropTypes.string,
  link: PropTypes.string,
  altImg: PropTypes.string,
  like: PropTypes.number,
  duration: PropTypes.string
};

export default VideoImage;
