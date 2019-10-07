import React, { createRef } from 'react';
import { inject, observer } from 'mobx-react';
import * as http from '../../middlewars/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './HeaderForm.module.css';
import { NavLink } from 'react-router-dom';

@inject('store')
@observer
class HeaderForm extends React.Component {
  state = {
    email: '',
    password: '',
    emailError: undefined,
    passwordErrror: undefined,
  };

  componentDidMount() {
    this.props.store.stores.data.getBascket();
  }

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
    const { bascket } = this.props.store.stores.data;

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
            <NavLink className={styles.link} to="/password/reset">
              Forgot your password?
            </NavLink>
          </div>

          <div className={styles.wrapLink}>
            <FontAwesomeIcon icon={faCaretRight} className={styles.icon} />
            <NavLink className={styles.link} to="/register">
              Register
            </NavLink>
          </div>
        </div>

        <div className={styles.wrapBasket}>
          <p className={styles.titleB}>Basket</p>
          <div className={styles.basketList}>
            <p className={styles.text}>Line items: 2</p>
            <p className={styles.text}>Total amount: 25.60 €</p>
          </div>
          <NavLink to="/bascket">Go bascket page</NavLink>
        </div>
      </div>
    );
  }
}

export default HeaderForm;
