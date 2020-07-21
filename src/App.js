import React, { useContext } from 'react';
import { MyCardGrid, MyContainer } from './Elements';
import './App.css';
import Card from './components/Card';
import { BuildContext } from './context/GlobalContext';
import SideBar from './components/SideBar';
import Header from './components/Header';

function App() {
	const context = useContext(BuildContext);

	return (
		<>
			<Header />
			<MyContainer>
				<MyCardGrid
					initial={{ x: 300 + 'px', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					sideBar={context.sideBar}
				>
					{context.filters.map(building => {
						return <Card building={building} key={building.id} />;
					})}
				</MyCardGrid>
				{context.sideBar && <SideBar />}
			</MyContainer>
		</>
	);
}

export default App;
