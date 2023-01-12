import React from "react";
import { useEffect, useState } from "react";
import PageContainer from "../../../components/layout/PageContainer";
import { useNavigate } from "react-router-dom";

const User = () => {
	const [user, setUser] = useState();
	const navigate = useNavigate();
	const [firstLetter, setFirstLetter] = useState();

	useEffect(() => {
		const getUser = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : [];
		if (getUser.length === 1) {
			setUser(getUser);

			// const fsLetter = user[0].name.charAt(0);
			// setFirstLetter(fsLetter);
		} else {
			console.log("User does not exist.");
		}
	}, []);

	const goBack = () => {
		localStorage.removeItem("userInfo");
		navigate(-1);
	};

	return (
		<PageContainer pageTitle={"User Details"}>
			<div className="max-w-sm w-full lg:max-w-full lg:flex">
				{user && (
					<div className="border border-gray-400 bg-slate-800 text-slate-300 p-4 flex flex-col justify-between leading-normal">
						<div className="flex items-center">
							<p className="w-10 h-10 rounded-full mr-4">{firstLetter}</p>
							<div className="text-sm">
								<p className="leading-none text-sm">{user[0].name}</p>
								<p className="text-xs">{user[0].company.bs}</p>
							</div>
						</div>
						<div className="flex text-sm items-center">
							<p>{user[0].company.catchPhrase}</p>
						</div>
					</div>
				)}
			</div>

			<button className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3" type="button" onClick={goBack}>
				Go Back
			</button>
		</PageContainer>
	);
};
export default User;
