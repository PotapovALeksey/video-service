import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import styles from "./CommentAndDate.module.css";
import PropTypes from "prop-types";

const CommentAndDate = ({ comments, date }) => (
  <>
    <span className={`${"miniText"} ${styles.like}`}>
      <FontAwesomeIcon className={styles.icon} icon={faComments} />
      {comments}
    </span>
    <span className={`${"miniText"} `}>{date}</span>
  </>
);
CommentAndDate.propTypes = {
  comments: PropTypes.number,
  date: PropTypes.string
};
export default CommentAndDate;
