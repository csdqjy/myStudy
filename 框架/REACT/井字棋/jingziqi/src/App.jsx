import React, { Suspense, lazy } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

const jzq = lazy(() => import('./page/jzq'));
const a = lazy(() => import('./page/a'));
const b = lazy(() => import('./page/1'));

function App() {
	return (
		<HashRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path="/" component={jzq} />
					<Route exact path="/jzq" component={jzq} />
					<Route exact path="/a" component={a} />
					<Route exact path="/1" component={b} />
				</Switch>
			</Suspense>
		</HashRouter>
	);
}

export default App;
