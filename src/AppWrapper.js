import React, { useEffect, useState } from 'react';
import { Route, withRouter, useLocation } from 'react-router-dom';
import App from './App';
import { Login } from './pages/Login';
import { Error } from './pages/Error';
import { NotFound } from './pages/NotFound';
import { Access } from './pages/Access';

export const ctx = React.createContext()

const AppWrapper = (props) => {
	let location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location]);

	const [colorScheme, setColorScheme] = useState('light')

	switch (props.location.pathname) {
		case '/login':
			return <Route path="/login" render={() => <Login colorScheme={colorScheme} />} />
		case '/error':
			return <Route path="/error" render={() => <Error colorScheme={colorScheme} />} />
		case '/notfound':
			return <Route path="/notfound" render={() => <NotFound colorScheme={colorScheme} />} />
		case '/access':
			return <Route path="/access" render={() => <Access colorScheme={colorScheme} />} />
		default:
			return <App setColorScheme={setColorScheme} />;
	}

}

export default withRouter(AppWrapper);