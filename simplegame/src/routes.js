import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import RPS from './pages/RPS/RPS';
import TTT from './pages/TTT/TTT';
import War from './pages/War/War';
import NotFound from './pages/NotFound/NotFound';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={App}>
			<Route path="/ttt" component={TTT} />
			<Route path="/rps" component={RPS} />
			<Route path="/war" component={War} />
			<Route path="*" component={NotFound} />
 		</Route>
	</Router>
);

export default Routes;