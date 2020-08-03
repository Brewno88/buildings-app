import React, { useContext } from 'react';
import { BuildContext } from '../context/GlobalContext';

function Edit() {
	const { buildings } = useContext(BuildContext);
	return (
		<div>
			<h1>This is the Buildings CRM</h1>
		</div>
	);
}

export default Edit;
