import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Clockb() {
	const [date, setDate] = useState(new Date());

	// What else can be passed to useState()) ? object, string,

	function tick() {
		setDate(new Date());
	}

	useEffect(() => {
		let timerID = setInterval(() => tick(), 1000);

		return function cleanUp() {
			console.log("cleaner function");
			clearInterval(timerID);
		};
	});

	return (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {date.toLocaleTimeString()}.</h2>
		</div>
	);
}

export default Clockb;
