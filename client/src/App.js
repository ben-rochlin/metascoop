// eslint-disable-next-line
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from "./route/routes";
import './styles.scss'
import { BreakpointProvider } from 'react-socks';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
const store = createStore(reducers, compose(applyMiddleware(thunk)))
console.log(store.reducers, "HEEER I AM")







export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch])


  return (
    <div>

      <Provider store={store}>
        <BreakpointProvider>
          <Router />
        </BreakpointProvider>
      </Provider>


    </div>
  );
}
