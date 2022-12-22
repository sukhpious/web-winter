import { createStore, combineReducers } from "redux";
import balanceReducer from "./balance/balanceReducer";
import pizzaReducer from "./pizza/pizzaReducer";
import userReducer from "./usersC/userReducer";

const rootReducer = combineReducers({
	// pizza: pizzaReducer,
	balance: balanceReducer,
	usersC: userReducer,
});

export const store = createStore(rootReducer);
