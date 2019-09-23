import React, { Component, createRef } from 'react';
import * as http from '../../middlewars/api';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
    emailError: undefined,
    passwordErrror: undefined,
  };

  linkRedirectRef = createRef();

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
      .then(response => {
        if (response && response.status === 200) {
          this.linkRedirectRef.current.click();
        }
      })
      .catch(({ response }) => {
        if (response && response.status === 422) {
          if (
            response.data.errors.email &&
            response.data.errors.email.length !== 0
          ) {
            this.setState({ emailError: response.data.errors.email[0] });
          }

          if (
            response.data.errors.password &&
            response.data.errors.password.length !== 0
          ) {
            this.setState({ passwordError: response.data.errors.password[0] });
          }
        }
      });
  };

  render() {
    const { email, password, emailError, passwordError } = this.state;
    return (
      <div className={styles.content}>
        <a
          href="/account"
          ref={this.linkRedirectRef}
          style={{ display: 'none' }}
        ></a>
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
            {passwordError && (
              <span className={styles.error}>{passwordError}</span>
            )}
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
          <div className={styles.linkWrap}>
            <a className={styles.link} href="/register">
              Register now
            </a>
            <a className={styles.link} href="/password/reset">
              Forgotten password
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Modal;
