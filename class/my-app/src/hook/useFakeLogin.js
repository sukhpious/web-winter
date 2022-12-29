import React, { useCallback } from "react";
import axios from "axios";

export const useFakeLogin = () => {
	const fakeLogin = useCallback(async () => {
		const url = `https://jsonplaceholder.typicode.com/users/1`;
		const response = await axios.get(url);
		return response;
	}, []);
	return fakeLogin;
};
