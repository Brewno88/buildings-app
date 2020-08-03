import React from 'react';

import './App.css';
import { BuildProvider } from './context/GlobalContext';
import CardsGrid from './components/CardsGrid';
import Header from './components/Header';
import Edit from './api/Edit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<BuildProvider>
			<Router>
				<Header />
				<Route path='/' exact component={CardsGrid} />å
				<Route path='/MainPage' component={Edit} />
			</Router>
		</BuildProvider>
	);
}

export default App;
