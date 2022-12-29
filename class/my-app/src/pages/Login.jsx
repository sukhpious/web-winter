import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export const Login = () => {
	const { login } = useAuth;
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/dashboard";

	const handleLogin = () => {
		login(from);
	};
	const goBack = () => {
		navigate(-1);
	};
	return (
		<div>
			<h1>Login</h1>
			<button onClick={handleLogin}>Log in</button>

			<br />
			<button onClick={goBack}>Go Back</button>
		</div>
	);
};

export default Login;
// const Login = () => {
// 	const { login: contextLogin } = useAuth();
// 	const naviagte = useNavigate();
// 	const location = useLocation();
// 	const from = location.state?.from?.pathname || "/dashboard";
// 	const login = () => contextLogin(from);
// 	const goBack = () => naviagte(-1);
// 	return (
// 		<div>
// 			<h1>Login</h1>
// 			<button onClick={login}>Log in</button>

// 			<br />
// 			<button onClick={goBack}>Go Back</button>
// 		</div>
// 	);
// };
