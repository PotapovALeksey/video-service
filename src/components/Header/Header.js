import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HeaderForm from '../HeaderForm/HeaderForm';
import styles from './Header.module.css';
import { inject, observer } from 'mobx-react';
const BANNER = 'https://leatherfighter.com/preview/banner.jpg';

@inject('store')
@observer
class Header extends Component {
  state = {
    value: '',
  };

  componentDidMount() {
    console.log(this.props);
  }

  onChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { value } = this.state;

    if (value.trim() === '') {
      return;
    }

    await this.props.store.stores.data.getSearchedData(value);

    this.props.history.push(`/search/${value}`);
  };
  render() {
    const { mainPage, categories } = this.props;
    const { value } = this.state;
    return (
      <div className={styles.wraper}>
        <div className={styles.leftColumn}>
          <div className={styles.banner}>
            {mainPage ? (
              <img src={BANNER} alt="banner " />
            ) : (
              <NavLink to="/" className={styles.button}>
                <img src={BANNER} alt="banner " />
              </NavLink>
            )}
          </div>
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
          {categories && (
            <ul className={styles.menu}>
              {categories.map(el => (
                <li className={styles.item} key={el.link}>
                  <NavLink className={styles.link} to={`/category/${el.link}`}>
                    {el.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.rightColumn}>
          <HeaderForm />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
