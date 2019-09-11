import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DataStore from './stores/Data';
import App from './App';

import './grid.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

let token;

if (document.getElementById('token')) {
  token = document.getElementById('token').getAttribute('content');
  console.log(token);
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root'),
  );
}

export default token;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
