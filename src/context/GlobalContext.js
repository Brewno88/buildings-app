import React, { createContext, useState, useReducer } from 'react';
import App from '../App';
import buildings from '../buildings.json';
import { selectedReducer, filterReducer } from './reducers';

export const BuildContext = createContext();

export const BuildProvider = ({ children }) => {
	// Open Side Bar
	const [sideBar, setSideBar] = useState(false);

	// function that adds commas every thousands
	const formatNumber = num =>
		num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

	// Use the Filter reducer and return updated list of buildings
	const [filters, dispatchFilters] = useReducer(filterReducer, buildings);

	const [selected, dispatchSelected] = useReducer(selectedReducer, buildings);
	// This object will be passed as context value
	const contextValues = {
		buildings,
		filters,
		dispatchFilters,
		selected,
		dispatchSelected,
		formatNumber,
		sideBar,
		setSideBar,
	};
	// Make context available to entire App
	return (
		<BuildContext.Provider value={contextValues}>
			<App>{children}</App>
		</BuildContext.Provider>
	);
};
