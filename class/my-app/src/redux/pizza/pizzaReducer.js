import { OPENCLOSE, RESET_ALL, SET_CHEESE, SET_COMBO, SET_PEPPERONI } from "./pizzaTypes";

const initialState = {
	isOpen: false,
	pepperoni: 0,
	combo: 0,
	cheese: 0,
};

//pure function
const pizzaReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPENCLOSE:
			return { ...state, isOpen: !state.isOpen };

		case SET_PEPPERONI:
			return { ...state, pepperoni: parseInt(action.payload) };

		case SET_COMBO:
			return { ...state, combo: parseInt(action.payload) };

		case SET_CHEESE:
			return { ...state, cheese: parseInt(action.payload) };

		// object that looks exactly like original state
		//do not work with external just with parameter

		case RESET_ALL:
			return {
				isOpen: false,
				pepperoni: 0,
				combo: 0,
				cheese: 0,
			};

		default:
			return state;
	}
};

export default pizzaReducer;
