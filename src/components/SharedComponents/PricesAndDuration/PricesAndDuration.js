import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCoins } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './PricesAndDuration.module.css';

const PricesAndDuration = ({ price, duration }) => (
  <>
    {
      <span className={styles.like}>
        <FontAwesomeIcon className={styles.icon} icon={faCoins} />
        {price || 'Free'}
      </span>
    }

    {duration && <span className={styles.duration}>{duration}</span>}
  </>
);

PricesAndDuration.propTypes = {
  price: PropTypes.string,
  duration: PropTypes.string,
};

export default PricesAndDuration;
