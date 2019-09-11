import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import styles from "./Information.module.css";

const Information = ({ information }) => (
  <ul className={styles.list}>
    {information &&
      information.map(inf => (
        <li className={styles.item} key={inf.link}>
          <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
          <NavLink className={styles.link} to={inf.link}>
            {inf.name}
          </NavLink>
        </li>
      ))}
  </ul>
);

export default Information;
