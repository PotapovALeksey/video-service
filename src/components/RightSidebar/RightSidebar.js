import React, { createRef } from 'react';
import * as http from '../../middlewars/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './RightSidebar.module.css';

export default class RightSidebar extends React.Component {
  state = {
    email: '',
    password: '',
    emailError: undefined,
    passwordErrror: undefined,
  };

  linkRedirectRef = createRef();

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
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
      <div className={styles.rightSidebar}>
        <a
          href="/account"
          ref={this.linkRedirectRef}
          style={{ display: 'none' }}
        ></a>
        <p className={styles.title}>Sign in</p>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <span className={styles.text}>Email address</span>
          <div className={styles.inputWrap}>
            <input
              onChange={this.onChange}
              value={email}
              className={styles.input}
              type="text"
              name="email"
            />
            {emailError && <span className={styles.error}>{emailError}</span>}
          </div>
          <span className={styles.text}>Password</span>
          <div className={styles.inputWrap}>
            <input
              onChange={this.onChange}
              value={password}
              className={styles.input}
              type="password"
              name="password"
            />
            {passwordError && (
              <span className={styles.error}>{passwordError}</span>
            )}
          </div>
          <button className={styles.button} type="submit">
            Sign in
          </button>
        </form>
        <div className={styles.wrapLinks}>
          <div className={styles.wrapLink}>
            <FontAwesomeIcon icon={faCaretRight} className={styles.icon} />
            <a className={styles.link} href="/password/reset">
              Fortog your password?
            </a>
          </div>

          <div className={styles.wrapLink}>
            <FontAwesomeIcon icon={faCaretRight} className={styles.icon} />
            <a className={styles.link} href="/register">
              Register
            </a>
          </div>
        </div>

        <div className={styles.wrapBasket}>
          <p className={styles.titleB}>Basket</p>
          <div className={styles.basketList}>
            <div className={styles.basketItem}>
              <FontAwesomeIcon icon={faTimes} className={styles.iconClose} />
              <img
                className={styles.basketImg}
                src="https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"
                alt=""
              />
              <div className={styles.textWrp}>
                <div className={styles.basketTitle}>Tierra Grant</div>
                <div className={styles.basketPrice}>5.00 $</div>
              </div>
            </div>
          </div>
          <p className={styles.basketTotal}>Total summ : 5.00 $</p>
        </div>
      </div>
    );
  }
}
