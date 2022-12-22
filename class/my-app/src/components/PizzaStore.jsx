import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openClose, setPepperoni, setCombo, setCheese, resetAll } from "../redux/pizza/pizzaActions";

export const PizzaStore = () => {
	const dispatch = useDispatch();
	const pizza = useSelector((state) => state.pizza);
	const [quantity, setQuantity] = useState(0);

	// controlled component -  attached to input
	const handleChange = (event) => {
		setQuantity(event.target.value);
	};

	const handleOpenClose = () => {
		dispatch(openClose());
	};

	const handleSetPizza = (event) => {
		const { name } = event.target;
		// no problem with block scope
		//if using if else - problem accessing variable within block scope
		const action = name === "pepperoni" ? setPepperoni(quantity) : name === "combo" ? setCombo(quantity) : setCheese(quantity);
		//action dispatch to reduce
		dispatch(action);
		//clean up
		setQuantity(0);
	};

	const handleReset = () => {
		dispatch(resetAll());
	};

	return (
		<div>
			<h1>Pizza Store</h1>

			<h2>The store is {pizza.isOpen ? "OPEN" : "CLOSED"}</h2>

			<h3>Pepperoni Pizzas in stock: {pizza.pepperoni}</h3>
			<h3>Combo Pizzas in stock: {pizza.combo}</h3>
			<h3>Cheese Pizzas in stock: {pizza.cheese}</h3>

			<button onClick={handleOpenClose}>Open & Close Shop</button>
			<br />
			<br />

			<label htmlFor="quantity">
				Amount to stock: <input name="quantity" type="number" value={quantity} onChange={handleChange} />
			</label>

			<br />
			<button name="pepperoni" onClick={handleSetPizza}>
				Set pepperoni pizzas
			</button>
			<br />
			<button name="combo" onClick={handleSetPizza}>
				Set combo pizzas
			</button>
			<br />

			<button name="cheese" onClick={handleSetPizza}>
				Set cheese pizzas
			</button>
			<br />
			<button onClick={handleReset}>Reset All</button>
		</div>
	);
};
