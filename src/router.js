import React, { PropTypes } from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
	    <Route path="11" component={require('./routes/contents/1-1.js')} />
        <Route path="12" component={require('./routes/contents/1-2.js')} />
        <Route path="13" component={require('./routes/contents/1-3.js')} />
        <Route path="14" component={require('./routes/contents/1-4.js')} />
        <Route path="21" component={require('./routes/contents/2-1.js')} />
        <Route path="22" component={require('./routes/contents/2-2.js')} />
        <Route path="23" component={require('./routes/contents/2-3.js')} />
        <Route path="31" component={require('./routes/contents/3-1.js')} />
	  </Route>
    </Router>
  );
}

export default RouterConfig;
