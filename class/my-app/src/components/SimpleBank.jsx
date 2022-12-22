import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, reset, withdraw } from "../redux/balance/balanceActions";

export const SimpleBank = () => {
	const dispatch = useDispatch();
	const balance = useSelector((state) => state.balance);

	const handleDeposit = () => {
		//action object
		const action = deposit();
		dispatch(action);
	};

	const handleWithdraw = () => {
		//action object
		const action = withdraw();
		dispatch(action);
	};

	const handleReset = () => {
		//action object
		dispatch(reset());
	};

	return (
		<div>
			<h1>SimpleBank</h1>
			<h2>Current Balance: {balance}</h2>

			<br />
			<button onClick={handleDeposit}>Deposit $10</button>
			<button onClick={handleWithdraw}>Withdraw $10</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
};
export default SimpleBank;
