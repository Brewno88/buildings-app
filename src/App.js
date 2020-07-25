
import React from 'react';
import { MyContainer } from './Elements';
import './App.css';
import { BuildProvider } from './context/GlobalContext';
import CardsGrid from './components/CardsGrid';

import Header from './components/Header';

function App() {
	return (
		<BuildProvider>
			<Header />
			<MyContainer>
				<CardsGrid />
			</MyContainer>
		</BuildProvider>
	);
}

export default App;
