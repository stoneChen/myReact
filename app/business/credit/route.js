import React from 'react';
import { Route } from 'react-router';
import List from './view/List';
import Detail from './view/Detail';

export default [
  <Route key="credit-list" path="credit-list" component={List} />,
  <Route key="credit-detail" path="credit-detail/:id" component={Detail} />,
];
