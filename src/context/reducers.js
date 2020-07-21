import buildings from '../buildings.json';

const TYPE = 'TYPE';
const STATUS = 'STATUS';
const RESET = 'RESET';
const SELECTED = 'SELECTED';

// Selected Building from Card VIEW DETAILS button
export const selectedReducer = (state, action) => {
	switch (action.type) {
		case SELECTED:
			const selected = buildings.filter(
				build => build.id === action.payload.id
			);
			return selected[0];
		default:
			return state;
	}
};

// Filter Reducer function
export const filterReducer = (state, action) => {
	switch (action.type) {
		case TYPE:
			const type = buildings.filter(build => build.type === action.payload);
			return type;
		case STATUS:
			const status = buildings.filter(build => build.status === action.payload);
			return status;
		case RESET:
			return buildings;
		default:
			return state;
	}
};
