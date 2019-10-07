import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Loader from '../../components/Loader/Loader';
import CategoryLoaded from '../../components/CategoryLoaded/CategoryLoaded';
import Cards from '../../components/Cards/Cards';

import styles from './Forms.module.css';

const PATH = {
  register: '/register',
  forgotPassword: '/password/reset',
  login: '/login',
};

@inject('store')
@observer
class Category extends Component {
  componentDidMount() {
    this.props.store.stores.data.getCategories();
    this.props.store.stores.data.fetchBreadcrumbs();
  }

  renderForm = path => {
    console.log('path', path);
    if (path === PATH.register) {
      return (
        <iframe
          className={styles.iframe}
          src="https://leatherfighter.com/register"
        ></iframe>
      );
    }

    if (path === PATH.forgotPassword) {
      console.log('hello');
      return (
        <iframe
          className={styles.iframe}
          src="https://leatherfighter.com/password/reset"
        ></iframe>
      );
    }

    if (path === PATH.login) {
      return (
        <iframe
          className={styles.iframe}
          src="https://leatherfighter.com/login"
        ></iframe>
      );
    }
  };

  render() {
    const { location } = this.props;
    const { categories, breadcrumbs } = this.props.store.stores.data;

    const isRender = categories && breadcrumbs;

    return isRender ? (
      <>
        <Header categories={categories} />
        <div className="wrap">
          <LeftSidebar categories={categories} />
          <div className="content">
            <div>{this.renderForm(location.pathname)}</div>
            <Footer />
          </div>
          <RightSidebar />
        </div>
      </>
    ) : (
      <Loader load={!isRender} />
    );
  }
}
export default Category;
