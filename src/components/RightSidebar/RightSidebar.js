import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './RightSidebar.module.css';

export default class RightSidebar extends React.Component {
  state = {
    login: '',
    password: '',
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = e => e.preventDefault();

  render() {
    const { login, password } = this.state;
    return (
      <div className={styles.rightSidebar}>
        <p className={styles.title}>Sign in</p>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <span className={styles.text}>Email address</span>
          <input
            onChange={this.onChange}
            value={login}
            className={styles.input}
            type="text"
            name="login"
          />
          <span className={styles.text}>Password</span>
          <input
            onChange={this.onChange}
            value={password}
            className={styles.input}
            type="password"
            name="password"
          />
          <button className={styles.button} type="submit">
            Sign in
          </button>
        </form>
        <div className={styles.wrapLinks}>
          <div className={styles.wrapLink}>
            <FontAwesomeIcon icon={faCaretRight} className={styles.icon} />
            <a className={styles.link} href="#">
              Fortog your password?
            </a>
          </div>

          <div className={styles.wrapLink}>
            <FontAwesomeIcon icon={faCaretRight} className={styles.icon} />
            <a className={styles.link} href="#">
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
