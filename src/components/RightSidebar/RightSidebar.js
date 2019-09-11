import React from 'react';
import PromotedVideo from '../PromotedVideo/PromotedVideo';
import LatestVideos from '../LatestVideos/LatestVideos';
import TopVideos from '../TopVideos/TopVideos';
import FormSubscribe from '../FormSubscribe/FormSubscribe';
import styles from './RightSidebar.module.css';

const RightSidebar = ({ promoted, latestVideos, topVideos }) => (
  <div className={styles.rightSidebar}>
    <PromotedVideo promoted={promoted} />
    <LatestVideos videos={latestVideos} />
    <TopVideos videos={topVideos} />
    <FormSubscribe />
  </div>
);

export default RightSidebar;
