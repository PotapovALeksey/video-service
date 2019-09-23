import React from "react";
import { NavLink } from "react-router-dom";
import PricesAndDuration from "../PricesAndDuration/PricesAndDuration";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./VideoImage.module.css";

const VideoImage = ({ img, link, altImg, price, duration }) => (
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
    <PricesAndDuration price={price} duration={duration} />
  </div>
);

VideoImage.propTypes = {
  img: PropTypes.string,
  link: PropTypes.string,
  altImg: PropTypes.string,
  price: PropTypes.string,
  duration: PropTypes.string
};

export default VideoImage;
