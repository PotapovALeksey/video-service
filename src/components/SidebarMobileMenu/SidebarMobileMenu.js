import React, { Component, createRef } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faHome,
  faBars,
  faDatabase,
  faSortDown,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import styles from './SidebarMobileMenu.module.css';

@observer
class SidebarMobileMenu extends Component {
  backDropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.onClickCloseMenu();
  };

  handleClickBackDropClick = e => {
    const { current } = this.backDropRef;
    if (current && e.target === current) {
      this.onClickCloseMenu();
    }
  };

  onClickCloseMenu = () => this.props.store.toggleMenu();

  render() {
    const { isOpenedMenu } = this.props.store;
    return (
      isOpenedMenu && (
        <div
          className={styles.backDrop}
          ref={this.backDropRef}
          onClick={this.handleClickBackDropClick}
        >
          <div className={styles.wrap}>
            <div className={styles.top}>
              <div className={styles.topBtn} onClick={this.onClickCloseMenu}>
                <FontAwesomeIcon icon={faTimes} className={styles.topIcon} />
                <span className={styles.text}>Close</span>
              </div>
            </div>
            <ul className={styles.menu}>
              <li className={styles.item}>
                <NavLink to="/" className={styles.link}>
                  <FontAwesomeIcon icon={faHome} className={styles.menuIcon} />
                  Home
                </NavLink>
                <div className={styles.openSub}>
                  <FontAwesomeIcon
                    icon={faSortDown}
                    className={styles.iconSort}
                  />
                  <ul className={styles.subMenu}>
                    <li className={styles.subItem}>
                      <NavLink to="/as" className={styles.subLink}>
                        Home Page V1
                      </NavLink>
                    </li>
                    <li className={styles.subItem}>
                      <NavLink to="/" className={styles.subLink}>
                        Home Page V1
                      </NavLink>
                    </li>
                    <li className={styles.subItem}>
                      <NavLink to="/" className={styles.subLink}>
                        Home Page V1
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.item}>
                <NavLink to="/" className={styles.link}>
                  <FontAwesomeIcon icon={faVideo} className={styles.menuIcon} />
                  Video
                </NavLink>
                <div className={styles.openSub}>
                  <FontAwesomeIcon
                    icon={faSortDown}
                    className={styles.iconSort}
                  />
                  <ul className={styles.subMenu}>
                    <li className={styles.subItem}>
                      <NavLink to="/" className={styles.subLink}>
                        Home Page V1
                      </NavLink>
                    </li>
                    <li className={styles.subItem}>
                      <NavLink to="/" className={styles.subLink}>
                        Home Page V1
                      </NavLink>
                    </li>
                    <li className={styles.subItem}>
                      <NavLink to="/" className={styles.subLink}>
                        Home Page V1
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.item}>
                <NavLink to="/" className={styles.link}>
                  <FontAwesomeIcon icon={faBars} className={styles.menuIcon} />
                  Features
                </NavLink>
                <div className={styles.openSub}>
                  <FontAwesomeIcon
                    icon={faSortDown}
                    className={styles.iconSort}
                  />
                  <ul className={styles.subMenu}>
                    <li className={styles.subItem}>
                      <NavLink to="/" className={styles.subLink}>
                        Home Page V1
                      </NavLink>
                    </li>
                    <li className={styles.subItem}>
                      <NavLink to="/" className={styles.subLink}>
                        Home Page V1
                      </NavLink>
                    </li>
                    <li className={styles.subItem}>
                      <NavLink to="/" className={styles.subLink}>
                        Home Page V1
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.item}>
                <NavLink to="/" className={styles.link}>
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className={styles.menuIcon}
                  />
                  Categories
                </NavLink>
                <div className={styles.openSub}>
                  <FontAwesomeIcon
                    icon={faSortDown}
                    className={styles.iconSort}
                  />
                  <ul className={styles.subMenu}>
                    <li className={styles.subItem}>
                      <NavLink to="/" className={styles.subLink}>
                        Home Page V1
                      </NavLink>
                    </li>
                    <li className={styles.subItem}>
                      <NavLink to="/" className={styles.subLink}>
                        Home Page V1
                      </NavLink>
                    </li>
                    <li className={styles.subItem}>
                      <NavLink to="/" className={styles.subLink}>
                        Home Page V1
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    );
  }
}
export default SidebarMobileMenu;
