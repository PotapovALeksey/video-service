import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "./TopCategories.module.css";
import image from "../../assets/img/min.jpg";

const TopCategories = ({ items }) => (
  <div className={styles.wrap}>
    <h2 className={`${styles.title} ${"standartTitleBlack"}`}>
      Top Categories
    </h2>
    {items &&items.map(item => (
      <div className={styles.channelSubscribe} key={item.link}>
        <div className={styles.channelPicture}>
          <NavLink to={item.link} className={styles.imgLink}>
            <img src={image} alt="" className={styles.image} />
          </NavLink>
        </div>
        <div className={styles.channelContent}>
          <NavLink to={item.link} className={styles.titleLink}>
            <p className={styles.channelTitle}>{item.name}</p>
          </NavLink>
          <span className={`${styles.text} ${"miniText"}`}>
            {item.videos_count} videos
          </span>
          <span className={`${styles.text} ${"miniText"}`}>
            <FontAwesomeIcon className={styles.icon} icon={faEye} />
            {item.views_sum} views
          </span>
        </div>
      </div>
    ))}
  </div>
);

TopCategories.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      videos_count: PropTypes.number.isRequired,
      views_sum: PropTypes.number.isRequired
    })
  ).isRequired
};

export default TopCategories;
