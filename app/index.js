/* global __DEVTOOLS__ */
import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { ReduxRouter } from 'redux-router';
import store from './base/store';
import Application from 'components/Application';
import Confirm  from 'components/Confirm';
import Loading from 'components/Loading';
import NoMatch from 'components/NoMatch';
import * as routes from './base/route';

//const store = configStore();

const concatSubRoutes = function () {//todo es6是否有更简洁的方法？
  const keys = Object.keys(routes);
  let routeConfig = [];
  keys.forEach(k => {
    const route = routes[k];
    routeConfig = routeConfig.concat(route);
  });
  return routeConfig;
};

const renderDebugPanel = function () {
  if (__DEVTOOLS__) {
    const { DevTools, DebugPanel, LogMonitor } =
      require('redux-devtools/lib/react');
    return (
      <DebugPanel key="debug-panel" top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }
};

ReactDOM.render(
  <div className="container">
    <Provider store={store}>
        <div>
          <ReduxRouter>
            <Redirect from="/" to="/home" />
            <Route path="/" component={Application}>
              {concatSubRoutes()}
            </Route>
            <Route path="*" component={NoMatch}/>
          </ReduxRouter>
          <Loading/>
          <Confirm />
        </div>
    </Provider>
    {renderDebugPanel()}
  </div>
  , document.getElementById('app'));
