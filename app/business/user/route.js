import React from 'react';
import { Route, Link } from 'react-router';
import List from './view/List';
import Detail from './view/Detail';

export default [
  <Route key="user-list" path="user-list" component={List} />,
  <Route key="user-detail" path="user-detail/:id" component={Detail} />,
];
