import React from 'react';
import styles from './CategoriesList.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const CategoriesList = ({ cat, isFooter }) => (
  <div>
    {!isFooter ? (
      <h2 className={`${styles.title} ${'standartTitleBlack'}`}>Categories</h2>
    ) : null}
    <ul className={styles.list}>
      {cat.map(el => (
        <li className={styles.item} key={el.link}>
          <NavLink
            className={`${isFooter ? styles.linkF : styles.link}`}
            to={`/categories/${el.link}`}
          >
            <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />

            {el.name}
          </NavLink>
          <span className={`${isFooter ? styles.countF : styles.count}`}>
            ({el.videos_count})
          </span>
        </li>
      ))}
    </ul>
  </div>
);

CategoriesList.propTypes = {
  cat: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      videos_count: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CategoriesList;
