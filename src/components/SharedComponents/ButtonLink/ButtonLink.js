import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ButtonLink.module.css';

const ButtonLink = ({ label, link }) => (
  <NavLink to={link} className={styles.button}>
    {label}
  </NavLink>
);

export default ButtonLink;
