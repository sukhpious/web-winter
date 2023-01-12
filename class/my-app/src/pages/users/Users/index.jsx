import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import PageContainer from "../../../components/layout/PageContainer";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Users = () => {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchUsers() {
			const url = `https://jsonplaceholder.typicode.com/users`;
			try {
				const { data } = await axios.get(url);
				setUsers(data);
				// console.log(data);
			} catch (err) {
				console.log(err);
			}
		}
		fetchUsers();
	}, []);

	const handleSelect = (e) => {
		const optionIndex = e.target.selectedIndex;
		const userObj = users.filter((user) => user.id === optionIndex);
		setSelectedUser(userObj);
		console.log(userObj);
		// console.log(optionIndex, userObj);
		// localStorage.setItem("userInfo", JSON.stringify(userObj));
	};
	const goToUserDetails = () => {
		const navId = crypto.randomUUID();
		// const user = { navId, userObj };
		localStorage.setItem("userInfo", JSON.stringify(selectedUser));
		// const path = selectedUser[0].id;
		// console.log(user);

		navigate(`/users/${navId}`);
	};

	const goBack = () => navigate(-1);

	return (
		<PageContainer>
			<select onChange={handleSelect} name="Users" id="">
				<option default disabled="disabled" value="">
					Select the user
				</option>
				{users.map((user) => (
					<option key={user.id} value={user.name}>
						{user.name}
					</option>
				))}
			</select>

			<br />
			<br />

			<button className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3" type="button" onClick={goToUserDetails}>
				User Details
			</button>

			{/* <button className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3" type="button" onClick={goBack}>
				Go Back
			</button> */}
		</PageContainer>
	);
};
export default Users;
