import React from "react";
import { useState } from "react";

const Users = () => {
	const [userId, setUserId] = useState(0);
	const [err, setErr] = useState(false);
	const [user, setUser] = useState(0);

	function handleChange(event) {
		setUserId(event.target.value);
	}

	function handleClick() {
		console.log(user);
		fetch("https://jsonplaceholder.typicode.com/users/" + userId)
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				setUser(result);
			})
			.catch((err) => {
				console.log(err);
				setErr(true);
			});
	}

	if (err) {
		return <div>Error fetching data</div>;
	}

	return (
		<div>
			<h1>User List</h1>
			<label htmlFor="userId"></label>
			<input id="userId" type="number" name="userId" value={userId} onChange={handleChange} />
			<br />
			<button type="button" onClick={handleClick}>
				Fetch
			</button>
			{user?.id && <div>{JSON.stringify(user)}</div>}
		</div>
	);
};

export default Users;
