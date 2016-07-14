import 'normalize.css';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {render} from 'react-dom';
import App from './App';
import Home from './App/Home';
import Invite from './App/Invite';
import {Router, Route, Redirect, browserHistory, IndexRoute} from 'react-router';

injectTapEventPlugin();

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/c/:code" component={Invite} />
      <Redirect from="/*" to="/" />
    </Route>
  </Router>
), document.getElementById('container'));