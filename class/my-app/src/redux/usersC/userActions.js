import { REMOVE_USER, SET_USERS } from "./userTypes";

//Actions (type and payload) to dispatch from UI

// 1. recived users by useEffect hook and stored in store
//  payload == users
export const setUsers = (users) => ({
	type: SET_USERS,
	payload: users,
});

// Payload is userID
export const removeUser = (userId) => ({
	type: REMOVE_USER,
	payload: userId,
});
