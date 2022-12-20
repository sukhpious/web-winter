import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Users = () => {
	const [userId, setUserId] = useState(0);
	const [err, setErr] = useState(false);
	const [user, setUser] = useState(0);

	function handleChange(event) {
		setUserId(event.target.value);
	}

	useEffect(() => {
		// did not use === strict data checking
		// userId is of string data type
		// to stop sending request on user id of 0
		if (!userId || userId == 0) return;
		if (userId > 10) {
			console.log(`User ID ${userId} do not exist`);
			return;
		}
		const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
		fetch(url)
			.then((response) => response.json())
			.then((result) => setUser(result))
			.catch((err) => {
				console.log(err);
				setErr(true);
			});
	}, [userId]);

	if (err) {
		return <div>Error fetching data</div>;
	}

	return (
		<div>
			<h1>User List</h1>
			<label htmlFor="userId"></label>
			<input id="userId" type="number" name="userId" value={userId} onChange={handleChange} />
			<br />
			{user?.id && <div>{JSON.stringify(user)}</div>}
		</div>
	);
};

export default Users;
