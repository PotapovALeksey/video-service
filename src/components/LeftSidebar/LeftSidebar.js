import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './LeftSidebar.module.css';
import CategoriesList from '../CategoriesList/CategoriesList';

class LeftSidebar extends Component {
  state = {
    value: '',
  };

  onChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { value } = this.state;
    const { categories } = this.props;

    return (
      <div className={styles.leftSidebar}>
        <>
          <img
            src="http://www.female-fighting.net/WebRoot/Store21/Shops/63207256/MediaGallery/boxinfo.png?CachePrevention=1567401055"
            alt="bred"
          />
          {categories.length > 0 && (
            <ul className={styles.menu}>
              {(categories || []).map(el => (
                <li className={styles.item} key={el.link}>
                  <NavLink className={styles.link} to={`/category/${el.link}`}>
                    {el.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}

          <form className={styles.form} onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              value={value}
              placeholder="Search for"
              className={styles.input}
            />
            <button className={styles.btn}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faSearch}
              ></FontAwesomeIcon>
            </button>
          </form>
        </>
      </div>
    );
  }
}

export default LeftSidebar;
