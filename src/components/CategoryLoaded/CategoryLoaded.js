import React from 'react';
import { FadeLoader } from 'react-spinners';

import style from './CategoryLoaded.module.css';

const styles = {
  display: 'block',
  margin: '0 auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

const CategoryLoader = ({ load }) => (
  <div className={style.wrap}>
    <FadeLoader
      css={styles}
      sizeUnit={'px'}
      size={100}
      color={'#36D7B7'}
      loading={load}
    />
  </div>
);

export default CategoryLoader;
