import React from 'react'
import ReactDOM, { hydrate, render } from 'react-dom'
import { fromJS } from 'immutable'

import routes from './routes'
import Root from './Root'
import configureStore from './redux/configureStore'
import { history } from './app-history'

let initialState = {};

if (window.__INITIAL_STATE__) {
  initialState = window.__INITIAL_STATE__;

  Object
    .keys(initialState)
    .forEach((key) => {
      initialState[key] = fromJS(initialState[key])
    });
}

const store = configureStore(initialState, history);

ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('app-container')
);
