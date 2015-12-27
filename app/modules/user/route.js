import React from 'react';
import { Route } from 'react-router';
import List from './container/List';
import Detail from './container/Detail';

export default [
  <Route key="user-list" path="user-list" component={List} />,
  <Route key="user-detail" path="user-detail/:id" component={Detail} />,
];
