import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { observer } from 'mobx-react';
import { configure } from 'mobx';

import router from '../router';

configure({ enforceActions: 'observed' });

const styles = {
  width: '1200px',
  margin: '0 auto',
};

@observer
class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Switch>
          {router.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
