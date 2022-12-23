import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const genRandomNum = () => Math.floor(Math.random(10) * 10);

export const Memo = () => {
	const [toggle, setToggle] = useState(false);

	const luckyNumbers = useMemo(() => new Array(6).fill(1).map(() => genRandomNum()), []);

	const handleReroll = () => setToggle(!toggle);
	return (
		<div>
			<h1>Memo</h1>
			<h2>{JSON.stringify(luckyNumbers)}</h2>
			<h2>{toggle ? "True" : "False"}</h2>
			<button onClick={handleReroll}>Reroll</button>
		</div>
	);
};

export default Memo;
