import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { removeUser, setUsers } from "../redux/usersC/userActions";

const UsersC = () => {
	const dispatch = useDispatch();
	// Users Array
	const usersC = useSelector((state) => state.usersC);
	//Input User id
	const [userId, setUserId] = useState(0);
	// Remaning Users
	// const [userList, setUserList] = useState([]);
	// Deleted User
	// const [userRemoved, setUserRemoved] = useState([]);

	// -------- **************** --------//
	// -------- One Way to write logic in component --------//

	/* useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users`;
		fetch(url)
			.then((response) => response.json())
			.then((result) => {
				const action = setUsers(result);
				dispatch(action);
			});
	}, []);

	const handleRemoveUser = () => {
		let resultArr = usersC.filter((user) => user.id !== userId);
		let removedUser = usersC.filter((user) => user.id === userId);
		
		//to dispatch users from here to store
		const action = setUsers(resultArr);
		dispatch(action);
		
		//set up users
		setUserList(resultArr);
		setUserRemoved(removedUser);
	 }; */
	// -------- **************** --------//

	// -------- SECOND WAY--------//
	// write logic in actions.js
	// using axios

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users`;
		axios.get(url)
			.then((result) => {
				dispatch(setUsers(result.data));
			})
			.catch((err) => console.log(err));
	}, [dispatch]);

	const handleChange = (event) => {
		setUserId(parseInt(event.target.value));
	};

	const handleRemoveUser = () => dispatch(removeUser(userId));

	return (
		<div>
			<h1>Users List</h1>
			<label htmlFor="userId">Enter UserID</label>
			<br />
			<input id="userId" name="userId" value={userId} type="text" onChange={handleChange} />
			<br />
			<br />
			<button onClick={handleRemoveUser} type="button">
				Remove User
			</button>
			<br />
			<h2>Deleted User</h2>
			{/* <ul style={{ textAlign: "left" }}>
				{usersC.map(({ id, name, email, address }) => (
					<li key={id}>
						<h2>{id}</h2>
						<p>Name:{name}</p>
						<p>Email: {email}</p>
						<div>
							Address:
							<p>{address.street}</p>
							<p>{address.city}</p>
							<p>{address.zipcode}</p>
						</div>
						<hr />
					</li>
				))}
			</ul> */}
			<br />
			<h2>Users List</h2>
			<ul style={{ textAlign: "left" }}>
				{usersC.map(({ id, name, email, username, website }) => (
					<li key={id}>
						<h2>{id}</h2>
						<p>Name:{name}</p>
						<p>Email: {email}</p>
						<p>Username: {username}</p>
						<p>Website: {website}</p>
						<hr />
					</li>
				))}
			</ul>
		</div>
	);
};

export default UsersC;
