import React from 'react';
import styles from './Footer.module.css';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoriesList from '../CategoriesList/CategoriesList';
import PopularVideosSl from '../PopularVideosSl/PopularVideosSl';
import LatestVideoF from './LastestVideoF/LastestVideoF';
import Information from './Information/Information';
import PopularVideos from './PopularVideos/PopularVideos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const inf = [
  { name: 'About us', link: 'asd1' },
  { name: 'Get a Video', link: 'asd2' },
  { name: 'Terms and Privacy', link: 'asd3' },
  { name: 'For Advertisers', link: 'asd4' },
  { name: 'Contact Us', link: 'asd5' },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.menu}>
        <div className={styles.item}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faAngleDoubleRight}
          ></FontAwesomeIcon>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faAngleDoubleRight}
          ></FontAwesomeIcon>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faAngleDoubleRight}
          ></FontAwesomeIcon>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
        </div>
      </div>
      <p className={styles.text}>Copyright © 2020 leatherfighter.com All rights reserved.</p>
    </footer>
  );
};

export default Footer;
