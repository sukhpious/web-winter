import { SET_USERS } from "./userTypes";

const initialState = [];

//pure function
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return [...action.payload];

		default:
			return state;
	}
};

export default userReducer;
