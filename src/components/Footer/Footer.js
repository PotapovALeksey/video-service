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
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const inf = [
  { name: 'About us', link: 'asd1' },
  { name: 'Get a Video', link: 'asd2' },
  { name: 'Terms and Privacy', link: 'asd3' },
  { name: 'For Advertisers', link: 'asd4' },
  { name: 'Contact Us', link: 'asd5' },
];

const Footer = ({ populars, latests, categories, popularCategories }) => {
  const newLatests = latests.slice(0, 3);

  return (
    <footer className={styles.footer}>
      <PopularVideosSl videos={populars} />
      <div className={styles.footerInner}>
        <Container fluid={true}>
          <Row>
            <Col className={styles.block} xl={3} lg={4} md={6} sm={6} xs={12}>
              <h3 className={styles.title}>Leather Fighter</h3>
              <p className={styles.text}>
                This jacket will seduce with the sportive and modern design and
                with the price positioning. PPE Ce certified, Fighter is made of
                thick full grain leather, features a removable warm lining and
                can be fully connected thanks to a zip around waist, to make a 2
                pc suit with Fighter Pant.{' '}
              </p>
              <ul className={styles.socialList}>
                <li className={styles.socialItem}>
                  <NavLink
                    className={`${styles.socialLink} ${styles.facebook}`}
                    to="/"
                  >
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faFacebook}
                    />
                  </NavLink>
                </li>
                <li className={styles.socialItem}>
                  <NavLink
                    className={`${styles.socialLink} ${styles.youtube}`}
                    to="/"
                  >
                    <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
                  </NavLink>
                </li>
                <li className={styles.socialItem}>
                  <NavLink
                    className={`${styles.socialLink} ${styles.twitter}`}
                    to="/"
                  >
                    <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                  </NavLink>
                </li>
              </ul>
            </Col>
            <Col className={styles.block} xl={3} lg={4} md={6} sm={6} xs={12}>
              <h3 className={styles.title}>Latest</h3>
              <LatestVideoF videos={newLatests} />
            </Col>
            <Col className={styles.block} xl={2} lg={4} md={4} sm={6} xs={12}>
              <h3 className={styles.title}>Categories</h3>
              <CategoriesList categories={categories} isFooter={true} />
            </Col>
            <Col className={styles.block} xl={2} lg={4} md={4} sm={6} xs={12}>
              <h3 className={styles.title}>Information</h3>
              <Information information={inf} />
            </Col>
            <Col className={styles.block} xl={2} lg={4} md={4} sm={6} xs={12}>
              <h3 className={styles.title}>Popular</h3>
              <PopularVideos videos={popularCategories.slice(0, 3)} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.text}>
          Developed By Blanc Studio © 2019 Leather Fighter. All rights reserved.
        </p>
        <div>
          <NavLink className={styles.link} to="/">
            Privacy policy
          </NavLink>
          <NavLink className={styles.link} to="/">
            Cookies
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
