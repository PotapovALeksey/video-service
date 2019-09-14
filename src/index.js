import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configure } from 'mobx';
import rootStore from './stores/RootStore';
import App from './App';
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
        <App />
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
