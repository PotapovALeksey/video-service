import React from 'react';
import { FadeLoader } from 'react-spinners';

const styles = {
  display: 'block',
  margin: '0 auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
};

const Loader = ({ load }) => (
  <FadeLoader
    css={styles}
    sizeUnit={'px'}
    size={100}
    color={'#36D7B7'}
    loading={load}
  />
);

export default Loader;
