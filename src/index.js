import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { configure } from 'mobx';
import Home from './pages/Home/Home';
import rootStore from './stores/RootStore';
import './grid.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
configure({ enforceActions: 'observed' });

let token;

if (document.getElementById('token')) {
  token = document.getElementById('token').getAttribute('content');
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={rootStore}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
  );
}

export default token;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
