import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFilm,
  faBars,
  faDatabase,
  faUser,
  faSearch,
  faSortDown,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import Sticky from 'react-stickynode';

import logo from '../../assets/img/logl.png';
import styles from './Header.module.css';

const Mobile = ({ children }) => {
  const isDesktop = useMediaQuery({ maxWidth: 600 });
  return isDesktop ? children : null;
};

const Planshet = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 600 });
  return isDesktop ? children : null;
};

class Header extends Component {
  state = { inputValue: '', isInputEnable: false };

  onChange = e => this.setState({ inputValue: e.target.value });

  handleInputEnable = () =>
    this.setState({ isInputEnable: !this.state.isInputEnable });

  onSubmit = e => e.preventDefault();

  onModalOpen = () => this.props.openModal();

  // onClickToggleMenu = e => this.props.store.toggleMenu();

  onCliclToggleSidebar = () => this.props.toggleSidebar();

  render() {
    const { inputValue, isInputEnable } = this.state;

    return (
      <>
        <Sticky top={0} bottomBoundary={9000}>
          <header className={styles.wrap}>
            <div className={styles.left}>
              <div className={`${styles.stickyBlock} ${styles.logoWrap}`}>
                <span
                  className={styles.openSidebar}
                  onClick={this.onCliclToggleSidebar}
                >
                  <FontAwesomeIcon
                    className={styles.iconMobile}
                    icon={faEllipsisH}
                  />
                </span>
                <NavLink to="/">
                  <img className={styles.logo} src={logo} alt="logotype" />
                </NavLink>
              </div>
              <div className={styles.stickyBlock}>
                <div className={styles.iconAbsolute}>
                  <input
                    className={styles.input}
                    defaultValue={inputValue}
                    onChange={this.onChange}
                    placeholder="Enter keyword"
                  />
                  <FontAwesomeIcon
                    className={styles.iconInput}
                    icon={faSearch}
                  />
                </div>
              </div>
              <div>
                <ul className={styles.menu}>
                  <li className={`${styles.item} ${styles.stickyItem}`}>
                    <NavLink
                      className={`${styles.menuLink} ${styles.link} ${styles.stickyLink}`}
                      to="/"
                    >
                      <FontAwesomeIcon
                        className={styles.iconMenu}
                        icon={faHome}
                      />
                      Home
                    </NavLink>
                  </li>
                  <li className={`${styles.item} ${styles.stickyItem}`}>
                    <NavLink
                      className={`${styles.menuLink} ${styles.link} ${styles.stickyLink}`}
                      to="/"
                    >
                      <FontAwesomeIcon
                        className={styles.iconMenu}
                        icon={faFilm}
                      />
                      Video
                    </NavLink>
                  </li>
                  <li className={`${styles.item} ${styles.stickyItem}`}>
                    <NavLink
                      className={`${styles.menuLink} ${styles.link} ${styles.stickyLink}`}
                      to="/"
                    >
                      <FontAwesomeIcon
                        className={styles.iconMenu}
                        icon={faBars}
                      />
                      Features
                    </NavLink>
                  </li>
                  <li className={`${styles.item} ${styles.stickyItem}`}>
                    <NavLink
                      className={`${styles.menuLink} ${styles.link} ${styles.stickyLink}`}
                      to="/"
                    >
                      <FontAwesomeIcon
                        className={styles.iconMenu}
                        icon={faDatabase}
                      />
                      Categories
                      <FontAwesomeIcon
                        className={styles.iconArrow}
                        icon={faSortDown}
                      />
                    </NavLink>
                    <ul className={`${styles.subMenu} ${styles.stickySubmenu}`}>
                      <li className={styles.subMenuItem}>
                        <NavLink to="/" className={styles.subMenuLink}>
                          Top video
                        </NavLink>
                      </li>
                      <li className={styles.subMenuItem}>
                        <NavLink to="/" className={styles.subMenuLink}>
                          Top video
                        </NavLink>
                      </li>
                      <li className={styles.subMenuItem}>
                        <NavLink to="/" className={styles.subMenuLink}>
                          Top video
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.stickyBlock}>
                <div className={styles.loginLink} onClick={this.onModalOpen}>
                  <FontAwesomeIcon className={styles.iconMenu} icon={faUser} />
                  Login
                </div>
              </div>
            </div>
          </header>
        </Sticky>
        <Sticky top={0} bottomBoundary={9000}>
          <header className={styles.mobileWrap}>
            <div className={styles.mobileLeft}>
              {/* <div
                className={`${styles.mobileBlock} ${styles.mobileBlockIcon}`}
                onClick={this.onClickToggleMenu}
              >
                <span>
                  <span className={styles.mobileText}>Menu</span>
                  <FontAwesomeIcon
                    className={styles.iconMobile}
                    icon={faBars}
                  />
                </span>
              </div> */}
              <div
                onClick={this.onCliclToggleSidebar}
                className={`${styles.mobileBlock} ${styles.mobileBlockIcon}`}
              >
                <FontAwesomeIcon className={styles.iconMobile} icon={faBars} />
              </div>
              <div className={styles.mobileBlock}>
                <Planshet>
                  <div className={styles.iconAbsolute}>
                    <input
                      className={styles.input}
                      defaultValue={inputValue}
                      onChange={this.onChange}
                      placeholder="Enter keyword"
                    />
                    <FontAwesomeIcon
                      className={styles.iconInput}
                      icon={faSearch}
                    />
                  </div>
                </Planshet>
                <Mobile>
                  {isInputEnable && (
                    <form onSubmit={this.onSubmit}>
                      <input
                        className={styles.mobileInput}
                        defaultValue={inputValue}
                        onChange={this.onChange}
                        placeholder="Enter keyword"
                      />
                    </form>
                  )}
                  <FontAwesomeIcon
                    className={`${styles.iconMobileInput} ${
                      isInputEnable ? styles.iconLeft : null
                    }`}
                    icon={faSearch}
                    onClick={this.handleInputEnable}
                  />
                </Mobile>
              </div>
            </div>
            <div className={styles.mobileRight}>
              <div className={styles.mobileBlock}>
                <div className={styles.loginLink} onClick={this.onModalOpen}>
                  <FontAwesomeIcon className={styles.iconMenu} icon={faUser} />
                  Login
                </div>
              </div>
            </div>
          </header>
        </Sticky>
      </>
    );
  }
}

export default Header;
