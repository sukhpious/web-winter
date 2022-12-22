// Third
//Reducer function
// takes initial state or previous state and action object

import { DEPOSIT, RESET, WITHDRAW } from "./balanceTypes";

// return new state

const initialState = 0;

const balanceReducer = (state = initialState, action) => {
	switch (action.type) {
		case DEPOSIT:
			return state + parseInt(action.payload);
		case WITHDRAW:
			return state - parseInt(action.payload);
		case RESET:
			return parseInt(action.payload);
		default:
			return state;
	}
};

export default balanceReducer;
