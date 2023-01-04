import React, { useCallback, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import useFakeLogin from "../hook/useFakeLogin";

// created the context variable to use
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const fakeLogin = useFakeLogin();
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	const login = useCallback(
		async (from) => {
			try {
				const user = await fakeLogin();
				setUser(user);
				// refreshToken is stored in localStorage here, but should be set in an secure/http only cookie
				localStorage.setItem("refreshToken", `refresh: ${Math.floor(Math.random() * 100)}`);
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
			setUser(null);
			navigate("/");
		},
		[navigate]);

	const value = { user, setUser, login, logout };
	return (
		// AuthContext takes value prop
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};
export default AuthProvider;
