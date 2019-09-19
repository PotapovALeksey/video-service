import React, { Component, createRef } from 'react';
import * as http from '../../middlewars/api';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
    emailError: undefined,
    passwordErrror: undefined,
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

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    http
      .login(email, password)
      .then(console.log)
      .catch(({ response: { status, data } }) => {
        if (status === 422) {
          if (data.errors.email && data.errors.email.length !== 0) {
            this.setState({ emailError: data.errors.email[0] });
          }

          if (data.errors.password && data.errors.password.length !== 0) {
            this.setState({ passwordError: data.errors.password[0] });
          }
        }
      });
  };

  render() {
    const { email, password, emailError, passwordError } = this.state;
    return (
      // <div
      //   className={styles.backDrop}
      //   ref={this.backdropRef}
      //   onClick={this.handleBackdropClick}
      // >
        <div className={styles.content}>
          <form className={styles.form} onSubmit={this.onSubmit}>
            <div className={styles.inputWrap}>
              <input
                placeholder="Email"
                onChange={this.onChange}
                name="email"
                type="text"
                className={styles.input}
                defaultValue={email}
              />
              {emailError && <span className={styles.error}>{emailError}</span>}
            </div>
            <div className={styles.inputWrap}>
              <input
                placeholder="Password"
                onChange={this.onChange}
                name="password"
                type="password"
                className={styles.input}
                defaultValue={password}
              />
              {passwordError && <span className={styles.error}>{passwordError}</span>}
            </div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      // </div>
    );
  }
}
