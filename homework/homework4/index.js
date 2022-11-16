function checkAge(age) {
	if (age >= 65) {
		console.log("Special Discount");
	} else {
		console.log("Not Allowed");
	}
}
console.log("Function 1");
checkAge(55);
checkAge(65);

function mul(arr) {
	let newArr = arr.map((num) => num * 100);
	console.log(newArr);
}
console.log("Function 2");
mul([5, 6, 10]);

function mulArrLen(arr) {
	let chkArrLen = arr.length > 5 ? true : false;
	if (chkArrLen) {
		let newArr = arr.map((num) => num * 100);
		console.log(newArr);
	} else {
		console.log("Array length is less than 5");
	}
}
console.log("Function 3");
mulArrLen([5, 6, 10, 9, 1, 3]);
mulArrLen([5, 10, 9, 1, 3]);

function mulEvenArr(arr) {
	let copyArr = arr;
	let resultArr = [];
	copyArr.forEach((element) => {
		if (element % 2 === 0) {
			let calculate = element * 100;
			resultArr.push(calculate);
		} else {
			resultArr.push(element);
		}
	});
	console.log(resultArr);
}
console.log("Function 4");
mulEvenArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function numOfTimes(arr) {
	let count = 0;
	arr.forEach((num) => {
		if (num === 154) {
			count++;
		}
	});
	console.log(count);
}
console.log("Function 5");
numOfTimes([154, 657, 564, 561, 154, 678, 100, 154]);

function checkType(input) {
	if (input.constructor.name === "Array" || input.constructor.name === "Object") {
		console.log("Object");
	} else {
		console.log("It is something else");
	}
}
console.log("Function 6");
checkType([3, 3]);
checkType(true);
checkType({ name: "Sukhpious" });

console.log("Ends Here");

function add(x, y) {
	return x + y;
}
// add(3, 4);
// console.log(add(3, 4));

function div(x, y) {
	return x / y;
}
// console.log(div(8, 4));

function convert(f) {
	return parseInt((f - 32) * (5 / 9));
}
// console.log(convert(45));

function divisibleBy55(num) {
	if (num === 0) return `Please enter a valid number!`;
	return num % 55 === 0 ? true : false;
}
// console.log(divisibleBy55(15));
// console.log(divisibleBy55(165));

function checkLength(str) {
	return str.length;
}
// console.log(checkLength("JavaScript"));

function concat(a, b) {
	// return a + b;
	return `${a} ${b}`;
}
// console.log(concat("JavaScript", "IS AWESOME"));
