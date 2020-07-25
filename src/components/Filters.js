import React from 'react';
import { MyFilters } from '../Elements';
import FilterButtons from './Dropdown';

const Filters = () => {
	return (
		<MyFilters>
			<span>Filter by:</span>
			<FilterButtons />
		</MyFilters>
	);
};
export default Filters;
