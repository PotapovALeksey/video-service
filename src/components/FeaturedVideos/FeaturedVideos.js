import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonLink from '../SharedComponents/ButtonLink/ButtonLink';
import img from '../../assets/img';
import styles from './FeaturedVideos.module.css';

const FeaturedVideos = ({ videos }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <h3 className={styles.title}>Featured Videos</h3>
        <ButtonLink label={'more'} link={'/'} />
      </div>
      <div className={styles.content}>
        <div className={styles.columnLeft}>
          <div className={styles.pictureWrap}>
            <NavLink to={videos[0].link} className={styles.linkImg}>
              <img src={img} alt={videos[0].name} className={styles.imgBig} />
            </NavLink>
            <div className={styles.gradient}></div>
            <div className={styles.blockText}>
              <NavLink to={videos[0].link} className={styles.imgTitle}>
                {videos[0].name}
              </NavLink>
              <NavLink to={videos[0].link} className={styles.imgText}>
                <span className={styles.text}>{videos[0].views} views</span>
                <span className={styles.text}>{videos[0].created_at} </span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.columnRight}>
          <div className={styles.innerWrap}>
            <div className={styles.pictureWrap}>
              <NavLink to={videos[1].link} className={styles.linkImg}>
                <img src={img} alt={videos[1].name} className={styles.img} />
              </NavLink>
              <div className={styles.gradient}></div>
              <div className={styles.blockText}>
                <NavLink
                  to={videos[1].link}
                  className={`${styles.imgTitle} ${styles.imgTitleMin}`}
                >
                  {videos[1].name}
                </NavLink>
                <NavLink
                  to={videos[1].link}
                  className={`${styles.imgText} ${styles.hiddenMobile}`}
                >
                  <span className={styles.text}>{videos[1].views} views</span>
                  <span className={styles.text}>{videos[1].created_at} </span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className={styles.innerWrap}>
            <div className={styles.pictureWrap}>
              <NavLink to={videos[2].link} className={styles.linkImg}>
                <img src={img} alt={videos[2].name} className={styles.img} />
              </NavLink>
              <div className={styles.gradient}></div>
              <div className={styles.blockText}>
                <NavLink
                  to={videos[2].link}
                  className={`${styles.imgTitle} ${styles.imgTitleMin}`}
                >
                  {videos[2].name}
                </NavLink>
                <NavLink
                  to={videos[2].link}
                  className={`${styles.imgText} ${styles.hiddenMobile}`}
                >
                  <span className={styles.text}>{videos[2].views} views</span>
                  <span className={styles.text}>{videos[2].created_at} </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideos;
