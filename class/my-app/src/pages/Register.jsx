import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const EMAIL_REGEX = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const USER_REGEX = /^([A-Za-z0-9])/;

const Register = () => {
	const { setUser } = useAuth();
	const regUserRef = useRef();
	const navigate = useNavigate();

	const [regUser, setRegUser] = useState("");
	const [validUser, setValidUser] = useState(false);

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);

	const [pwd, setPwd] = useState("");
	const [validPwd, setValidPwd] = useState(false);

	const [errMsg, setErrMsg] = useState("");

	const goBack = () => navigate(-1);

	useEffect(() => {
		regUserRef.current.focus();
	}, []);

	useEffect(() => {
		setValidUser(USER_REGEX.test(regUser) && regUser.length <= 12);
		setValidEmail(EMAIL_REGEX.test(email) && email.length <= 50);
		setValidPwd(pwd.length >= 4 && pwd.length <= 16);
	}, [regUser, email, pwd]);

	useEffect(() => {
		setErrMsg("");
	}, [regUser, email, pwd]);

	const registerUser = () => {
		const user = {
			name: regUser,
			email: email,
			pwd: pwd,
			accessToken: `${Math.floor(Math.random() * 100)}`,
		};
		return user;
	};

	const handleRegister = (e) => {
		e.preventDefault();

		setErrMsg("");

		try {
			// this is for authentication
			const user = registerUser();
			setUser(user);
			//Analogy: this is to check against db stored user and password
			localStorage.setItem("UserEmail", `email: ${user.email}`);
			localStorage.setItem("UserPwd", `password: ${user.pwd}`);
			localStorage.setItem("UserName", `username: ${user.name}`);
			navigate("/login");
			console.log(user);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<form onSubmit={handleRegister} className="flex flex-col gap-3 w-7/12 md:w-4/12 lg:w-3/12 mx-auto">
				<div className="flex flex-col">
					<label htmlFor="user">Username: </label>
					<input ref={regUserRef} className="py-1 px-3 border-2 border-black rounded-md" id="user" type="text" placeholder="Enter Username" required onChange={(e) => setRegUser(e.target.value)} value={regUser} />
					{!validUser && regUser.length > 0 && <p className="text-red-500">Not a valid user</p>}
				</div>

				<div className="flex flex-col">
					<label htmlFor="email">Email: </label>
					<input className="py-1 px-3 border-2 border-black rounded-md" id="email" type="email" placeholder="user@domain.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
					{!validEmail && email.length > 0 && <p className="text-red-500">Not a valid email</p>}
				</div>

				<div className="flex flex-col">
					<label htmlFor="password">Password: </label>
					<input className="py-1 px-3 border-2 border-black rounded-md" id="password" type="password" required onChange={(e) => setPwd(e.target.value)} value={pwd} />
					{!validPwd && pwd.length > 0 && <p className="text-red-500">Not a valid password</p>}
				</div>

				<button type="submit" className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3 mt-6" disabled={!validUser || !validEmail || !validPwd}>
					Register
				</button>

				<button className="rounded-md border-2 border-indigo-500 py-2 px-3" onClick={goBack}>
					Go Back
				</button>
			</form>
			{errMsg && <p className="text-red-500">{errMsg}</p>}
		</>
	);
};
export default Register;
