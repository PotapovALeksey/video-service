import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  onChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && current !== e.target) return;

    this.props.onClose();
  };

  render() {
    const { email, password } = this.state;
    return (
      <div
        className={styles.backDrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.content}>
          <form className={styles.form}>
            <input
              placeholder="Email"
              onChange={this.onChange}
              name="email"
              type="text"
              className={styles.input}
              defaultValue={email}
            />
            <input
              placeholder="Password"
              onChange={this.onChange}
              name="password"
              type="text"
              className={styles.input}
              defaultValue={password}
            />
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
