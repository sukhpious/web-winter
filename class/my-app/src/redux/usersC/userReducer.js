import { REMOVE_USER, SET_USERS } from "./userTypes";

// intial state is empty array
const initialState = [];

//pure function
// empty state and action as arguments
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		// 2. display those users from the store
		case SET_USERS:
			// just knows ./userTypes
			// does not know the action types file - methods and payload
			// simply based on intial state - that is an Array
			// we are destructuring the payload
			return [...action.payload];

		//display users after removing user based on id passed through input
		case REMOVE_USER:
			// now initial state has payload user
			// filter them based on remove paylod - user id
			return state.filter((user) => user.id !== action.payload);

		default:
			return state;
	}
};

export default userReducer;
