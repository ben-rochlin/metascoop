import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
const store = createStore(reducers, compose(applyMiddleware(thunk)))
console.log(store.reducers, "HEEER I AM")

import App from './App'
import './index.scss'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
    document.getElementById('root')
    )