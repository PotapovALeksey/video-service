import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { observer } from 'mobx-react';
import { configure } from 'mobx';

import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Category from './pages/Category/Category';

configure({ enforceActions: 'observed' });

@observer
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories/:id" component={Category} />
        <Route path="/categories" component={Categories} />
      </Switch>
    );
  }
}

export default App;
