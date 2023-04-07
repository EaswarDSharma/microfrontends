import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Landing from './components/Landing'; 
import Pricing from './components/Pricing';

export default ({ history }) => {
  return (
    <div>
         <Router history={history}>
          <Switch>
            <Route exact path="/otherpage" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
     </div>
  );
};
