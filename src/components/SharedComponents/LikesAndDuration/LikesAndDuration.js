import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import styles from "./LikesAndDuration.module.css";

const LikesAndDuration = ({ like, duration }) => (
  <>
    {like && (
      <span className={styles.like}>
        <FontAwesomeIcon className={styles.icon} icon={faThumbsUp} />
        {like}
      </span>
    )}

    {duration && <span className={styles.duration}>{duration}</span>}
  </>
);

LikesAndDuration.propTypes = {
  like: PropTypes.number,
  duration: PropTypes.string
};

export default LikesAndDuration;
