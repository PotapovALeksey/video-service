import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "./ViewsAndComments.module.css";
import PropTypes from "prop-types";

const ViewsAndComments = ({ views, comments }) => (
  <>
    <span className={`${"miniText"} ${styles.views} ${styles.iconWrap}`}>
      <FontAwesomeIcon className={styles.icon} icon={faEye} />
      {views}
    </span>
    <span className={`${"miniText"} ${styles.iconWrap}`}>
      <FontAwesomeIcon className={styles.icon} icon={faComments} />
      {comments}
    </span>
  </>
);
ViewsAndComments.propTypes = {
  views: PropTypes.number,
  comments: PropTypes.number
};
export default ViewsAndComments;
