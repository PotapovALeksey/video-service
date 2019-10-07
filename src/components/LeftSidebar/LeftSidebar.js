import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './LeftSidebar.module.css';
import CategoriesList from '../CategoriesList/CategoriesList';

import img from '../../assets/img/info.png';

const LeftSidebar = () => (
  <div className={styles.leftSidebar}>
    <>
      <img src={img} alt="info" />
    </>
  </div>
);

export default LeftSidebar;
