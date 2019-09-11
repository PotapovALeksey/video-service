import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { observer } from 'mobx-react';
import { configure } from 'mobx';

import Home from './pages/Home/Home';

configure({ enforceActions: 'observed' });

@observer
class App extends Component {
  state = {
    load: true,
  };

  async componentDidMount() {
    const { default: rootStore } = await import('./stores/RootReducer');

    this.setState({
      load: false,
      rootStore: new rootStore(),
    });
  }

  render() {
    const { rootStore, load } = this.state;
    return (
      load && (
        <>
          <Provider store={rootStore}>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </Provider>
        </>
      )
    );
  }
}

export default App;
