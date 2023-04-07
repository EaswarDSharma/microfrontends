import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
 
import { createBrowserHistory } from 'history';

import Progress from './components/Progress';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));

const history = createBrowserHistory();

export default () => {
  

  return (
    <Router history={history}>
        <div>
          <Header
            
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
    </Router>
  );
};
