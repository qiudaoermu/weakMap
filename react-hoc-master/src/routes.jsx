import React from 'react';
import { Route } from 'react-router-dom';
import Usual from './components/simple/usual';
import Usual1 from './components/inheritance/usual';
import Login from './components/form/login.js';
import FuncContainer from './components/container/container-add-func';
import WrappedUsual from './components/container/hoc-usual';
import stateLessAndfull from './components/stateLess-state'
import circle from './components/life-circle'

import containerShow from './components/container-show'
const Routes = () => (
  <div>
    <Route exact path="/" render={() => <div>Welcome to</div>} />
    <Route path = '/stateLessAndfull' component={stateLessAndfull}/>
    <Route path = '/con-show' component={containerShow}/>
    <Route path = '/circle' component={circle}/>
    <Route path="/usual" component={Usual} />
    <Route path="/container" component={FuncContainer} />
    <Route path="/form" component={Login} />
    <Route path="/inheritance" component={Usual1} />
    <Route path="/hoc-usual" component={WrappedUsual} />
  </div>
  );
export default Routes;
