import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { observer } from 'mobx-react';
import { configure } from 'mobx';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import SidebarMobileMenu from './components/SidebarMobileMenu/SidebarMobileMenu';

import ViewStore from './stores/Views';
import DataStore from './stores/Data';

configure({ enforceActions: 'observed' });
@observer
class App extends Component {
  render() {
    return (
      <>
        <Header store={ViewStore} />
        <div className="wrap">
          <LeftSidebar viewStore={ViewStore} dataStore={DataStore} />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <RightSidebar />
        </div>
        <Footer />
        <SidebarMobileMenu store={ViewStore} />
      </>
    );
  }
}

export default App;
