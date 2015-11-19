/* global __DEVTOOLS__ */
import { routerStateReducer, reduxReactRouter } from 'redux-router';
//import { createHistory } from 'history';
import createHashHistory from 'history/lib/createHashHistory';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import * as reducers from './reducer';

reducers['router'] = routerStateReducer;

let combinedCreateStore;
const logger = createLogger();
const storeEnhancers = [reduxReactRouter({ createHistory: createHashHistory })];
if (__DEVTOOLS__) {
  const { devTools } = require('redux-devtools');
  storeEnhancers.push(devTools());
}
combinedCreateStore = compose(...storeEnhancers)(createStore);
const finalCreateStore = applyMiddleware(thunk, logger)(combinedCreateStore);
const combinedReducer = combineReducers(reducers);

export default function configureStore (initialState) {

  const store = finalCreateStore(combinedReducer, initialState);
  if (module.hot) {
    module.hot.accept();
  }
  // Enable Webpack hot module replacement for reducers
  //  module.hot.accept('./reducer', () => {
  //    const nextRootReducer = require('./reducer')
  //    store.replaceReducer(nextRootReducer)
  //  })

  return store;
}
