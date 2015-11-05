import React from 'react';
import { Route, Link } from 'react-router';
import List from './component/List';
import Detail from './component/Detail';

export default [
  <Route path="user-list" component={List} />,
  <Route path="user-detail/:id" component={Detail} />,
];
