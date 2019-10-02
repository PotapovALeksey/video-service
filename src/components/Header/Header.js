import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const BANNER = 'https://leatherfighter.com/preview/banner.jpg';

const Header = () => (
  <>
    <div className={styles.banner}>
      <img src={BANNER} alt="banner " />
      <NavLink to="/" className={styles.button}>
        Home
      </NavLink>
    </div>
  </>
);

export default Header;
