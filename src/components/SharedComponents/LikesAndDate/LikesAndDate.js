import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import styles from "./LikesAndDate.module.css";

const LikesAndDate = ({ likes, date }) => (
  <>
    <span className={`${"miniText"} ${styles.like}`}>
      <FontAwesomeIcon className={styles.icon} icon={faThumbsUp} />
      {likes}
    </span>
    <span className={`${"miniText"} ${styles.date}`}>{date}</span>
  </>
);

LikesAndDate.propTypes = {
  likes: PropTypes.number,
  date: PropTypes.string,
}

export default LikesAndDate;
