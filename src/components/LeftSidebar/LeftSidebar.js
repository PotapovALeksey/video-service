import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TopCategories from '../TopCategories/TopCategories';
import CategoriesList from '../CategoriesList/CategoriesList';
import styles from './LeftSidebar.module.css';

const topCategories = [
  {
    name: 'GAME',
    videos_count: 910,
    icon: '',
    link: 'game',
    views_sum: 1234124,
  },
  {
    name: 'NEWS',
    videos_count: 9127,
    icon: '',
    link: 'news',
    views_sum: 221125,
  },
  {
    name: 'FREE',
    videos_count: 22123,
    icon: '',
    link: 'free',
    views_sum: 64423,
  },
];

const cat = [
  {
    name: 'GAME',
    videos_count: 910,
    icon: '',
    link: 'game',
  },
  {
    name: 'KOMBAT',
    videos_count: 2312,
    icon: '',
    link: 'kombat',
  },
  {
    name: 'MOVIE',
    videos_count: 998,
    icon: '',
    link: 'movie',
  },
  {
    name: 'MUSIC',
    videos_count: 992,
    icon: '',
    link: 'music',
  },
  {
    name: 'NEWS',
    videos_count: 9127,
    icon: '',
    link: 'news',
  },
  {
    name: 'FREE',
    videos_count: 22123,
    icon: '',
    link: 'free',
  },
  {
    name: 'WHATS NEW',
    videos_count: 1512,
    icon: '',
    link: 'whats-new',
  },
];

@observer
class LeftSidebar extends Component {
  componentDidMount() {
    this.props.dataStore.getCategories();
  }
  handleClick = () => {
    console.log('click');
    this.props.dataStore.getCategories();
  };
  render() {
    const { categories } = this.props.dataStore;
    console.log('render', categories);
    return (
      <div
        onClick={this.handleClick}
        className={`${styles.leftSidebar} ${
          this.props.viewStore.isOpenedSidebar ? styles.openSidebar : null
        }`}
      >
        {categories && (
          <>
            <TopCategories items={categories} />
            <CategoriesList cat={cat} />
          </>
        )}
      </div>
    );
  }
}

export default LeftSidebar;
