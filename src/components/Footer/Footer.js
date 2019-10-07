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

const Footer = () => (
  <footer className={styles.footer}>
    {/* <div className={styles.menu}>
        <div className={styles.item}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faAngleDoubleRight}
          ></FontAwesomeIcon>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
        </div>
        {(categories || []).map(item => (
          <div className={styles.item} key={item.link}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faAngleDoubleRight}
            ></FontAwesomeIcon>
            <NavLink to={`/category/${item.link}`} className={styles.link}>
              {item.name}
            </NavLink>
          </div>
        ))}
      </div> */}
    <p className={styles.text} style={{ textAlign: 'center' }}>
      Copyright © 2020 leatherfighter.com All rights reserved.
    </p>
  </footer>
);

export default Footer;
