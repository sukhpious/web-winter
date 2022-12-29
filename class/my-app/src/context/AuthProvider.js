import React, { useCallback, useState } from "react";
import { useFakeLogin } from "../hook/useFakeLogin";
import { useNavigate } from "react-router-dom";

// created the context variable to use
export const AuthContext = React.createContext(null);

export const AuthProvider = () => {
	const fakeLogin = useFakeLogin();
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	const login = useCallback(
		async (from) => {
			try {
				const { data } = await fakeLogin();
				setUser(data);
				navigate(from, { replace: true });
			} catch (err) {
				console.error(err);
			}
		},
		[fakeLogin, navigate]
	);

	const logout =
		(() => {
			setUser(null);
			navigate("/");
		},
		[navigate]);

	const value = { user, setUser, login, logout };
	return (
		// AuthContext takes value prop
		<AuthContext.Provider value={value}>AuthProvider</AuthContext.Provider>
	);
};
export default AuthProvider;
