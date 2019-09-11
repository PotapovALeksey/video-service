import React from 'react';
import TopCategories from '../TopCategories/TopCategories';
import CategoriesList from '../CategoriesList/CategoriesList';
import styles from './LeftSidebar.module.css';

// @observer
const LeftSidebar = props => {
  const { topCategories, categories, isOpenedSidebar } = props;

  return (
    <div
      className={`${styles.leftSidebar} ${
        isOpenedSidebar ? styles.openSidebar : null
      }`}
    >
      <>
        <TopCategories topCategories={topCategories} />
        <CategoriesList categories={categories} />
      </>
    </div>
  );
};

export default LeftSidebar;
