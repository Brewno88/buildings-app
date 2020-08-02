const TYPE = 'TYPE';
const STATUS = 'STATUS';
const RESET = 'RESET';
const SELECTED = 'SELECTED';

// Selected Building from Card VIEW DETAILS button
export const selectedReducer = (state, action) => {
	switch (action.type) {
		case SELECTED:
			return action.payload;
		default:
			return state;
	}
};

// Filter Reducer function
export const filterReducer = (state, action) => {
	switch (action.type) {
		case TYPE:
			const type = action.payload.buildings.filter(
				build => build.type === action.payload.type
			);
			return type;
		case STATUS:
			const status = action.payload.buildings.filter(
				build => build.status === action.payload.status
			);
			return status;
		case RESET:
			return action.payload;
		default:
			return state;
	}
};
