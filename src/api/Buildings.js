import React, { useContext } from 'react';
import { BuildContext } from '../context/GlobalContext';
import { MyContainer } from '../components/ComponentsStyles';

function Buildings() {
	const { buildings } = useContext(BuildContext);
	return (
		<MyContainer>
			<h1>This is the Buildings CRM</h1>
		</MyContainer>
	);
}

export default Buildings;
