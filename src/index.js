import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Main} from './app/main';
import {Home} from './app/pages/home';
import {Components} from './app/pages/components';
import {Prototypes} from './app/pages/prototypes';
import {Landlords} from './app/pages/landlords';

import './index.less';
import './content/theme/bootstrap.global.less';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/components" component={Components}/>
      <Route path="/prototypes" component={Prototypes}/>
      <Route path="/landlords" component={Landlords}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
