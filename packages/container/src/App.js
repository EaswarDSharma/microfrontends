import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Progress from './components/Progress';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});
const history = createBrowserHistory();

export default () => {

  return (
    <div>
            <StylesProvider generateClassName={generateClassName} >
    <Router history={history}>
          <Header
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
          </Router>
        </StylesProvider>
        </div>
  );
};