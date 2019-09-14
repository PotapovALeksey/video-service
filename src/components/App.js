import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { observer } from 'mobx-react';
import { configure } from 'mobx';

import router from '../router';

configure({ enforceActions: 'observed' });

@observer
class App extends Component {
  render() {
    return (
      <Switch>
        {router.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    );
  }
}

export default App;
