import React, { useCallback, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import useFakeLogin from "../hook/useFakeLogin";

// created the context variable to use
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const fakeLogin = useFakeLogin();
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	// login function when clicked
	const login = useCallback(
		async (from) => {
			try {
				// getting fake user
				const user = await fakeLogin();
				//setting the user
				setUser(user);
				// refreshToken is stored in localStorage here, but should be set in an secure/http only cookie
				// setting refershToken in localstorage
				localStorage.setItem("refreshToken", `refresh: ${Math.floor(Math.random() * 100)}`);
				// navigation from where the login is clicked
				navigate(from, { replace: true });
			} catch (err) {
				console.error(err);
			}
		},
		[fakeLogin, navigate]
	);

	const logout =
		(() => {
			localStorage.removeItem("refreshToken");
			localStorage.removeItem("UserEmail");
			localStorage.removeItem("UserPwd");
			localStorage.removeItem("UserName");
			localStorage.removeItem("AccessToken");

			setUser(null);
			navigate("/");
		},
		[navigate]);

	// this auth is getting faklogin from useFakelogin with access token

	const value = { user, setUser, login, logout };
	return (
		// AuthContext takes value prop
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};
export default AuthProvider;
