import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Clockb() {
	const [date, setDate] = useState(new Date());
	//state
	//setter function
	// in useState(initial state)
	// What else can be passed to useState()) 	Any data type
	//use Words is reserved
	//custom hooks useCustomHook - reserved

	function tick() {
		setDate(new Date());
	}

	useEffect(
		() => {
			let timerID = setInterval(() => tick(), 1000);

			// has access to variables at the time of creation
			return function cleanUp() {
				console.log("cleaner function");
				clearInterval(timerID);
			};
		},
		//dependency array to rerun the function
		//empty means the run only once
		// when given something rereun based on that dependency
		[]
	);

	return (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {date.toLocaleTimeString()}.</h2>
		</div>
	);
}

export default Clockb;
