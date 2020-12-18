import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useNotice from './api/Notice/useNotice';

import { PageNotice } from './pages/PageNotice';
import { PageDetailsNotice } from './pages/PageDetailsNotice';
import { Loading } from './components/Loading';
import { Layout } from './components/Layout';

function App() {
	const { notice, isLoading } = useNotice();

	if (isLoading) return <Loading />;
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path='/'>
						<PageNotice info={notice} />
					</Route>
					<Route path='/:id'>
						<PageDetailsNotice info={notice} />
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
