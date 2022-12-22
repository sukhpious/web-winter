import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../redux/usersC/userActions";

const UsersC = () => {
	const dispatch = useDispatch();
	// Users Array
	const usersC = useSelector((state) => state.usersC);
	//Input User id
	const [userId, setUserId] = useState();
	// Remaning Users
	const [userList, setUserList] = useState([]);
	// Deleted User
	const [userRemoved, setUserRemoved] = useState([]);

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users`;
		fetch(url)
			.then((response) => response.json())
			.then((result) => {
				const action = setUsers(result);
				dispatch(action);
			});
	}, []);

	const handleChange = (event) => {
		setUserId(parseInt(event.target.value));
	};

	const handleRemoveUser = () => {
		let resultArr = usersC.filter((user) => user.id !== userId);
		let removedUser = usersC.filter((user) => user.id === userId);

		setUserList(resultArr);
		setUserRemoved(removedUser);
	};

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
			<ul style={{ textAlign: "left" }}>
				{userRemoved.map(({ id, name, email, address }) => (
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
			</ul>
			<br />
			<h2>Users List</h2>
			<ul style={{ textAlign: "left" }}>
				{userList.map(({ id, name, email, username, website }) => (
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
