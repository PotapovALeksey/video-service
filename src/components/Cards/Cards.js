import React from 'react';
import { NavLink } from 'react-router-dom';
import { PREVIEW_IMG, WATCH, concatURL } from '../../middlewars/api';
import defaultImg from '../../const/defaultImage';
import styles from './Cards.module.css';

const Cards = ({ items }) => {
  return (
    items &&
    items.length > 0 && (
      <div className={styles.items}>
        {items.map(item => {
          const img = item.preview_images
            ? PREVIEW_IMG + item.preview_images[0]
            : defaultImg;

          return (
            <div className={styles.item} key={item.link}>
              <NavLink to={concatURL(WATCH, item.link)} className={styles.link}>
                <img src={img} alt={item.name} className={styles.img} />
              </NavLink>
              <NavLink
                to={concatURL(WATCH, item.link)}
                className={styles.titleLink}
              >
                {item.name}
              </NavLink>
              <p className={styles.text}>{item.preview_images.length} pics</p>
              <p className={styles.price}>{item.price_pics}</p>
            </div>
          );
        })}
      </div>
    )
  );
};

export default Cards;
