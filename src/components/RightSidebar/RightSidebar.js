import React from 'react';
import PromotedVideo from '../PromotedVideo/PromotedVideo';
import LatestVideos from '../LatestVideos/LatestVideos';
import TopVideos from '../TopVideos/TopVideos';
import styles from './RightSidebar.module.css';

const RightSidebar = ({ promoted, latestVideos, topVideos }) => (
  <div className={styles.rightSidebar}>
    <PromotedVideo promoted={promoted} />
    <LatestVideos videos={latestVideos} />
    <TopVideos videos={topVideos} />
  </div>
);

export default RightSidebar;
