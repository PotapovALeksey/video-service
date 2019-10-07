import React, { createRef, Component } from 'react';
import * as http from '../../middlewars/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './RightSidebar.module.css';

export default class RightSidebar extends Component {
  state = {};
  render() {
    return <div className={styles.rightSidebar}>It`s rightSidebar</div>;
  }
}
