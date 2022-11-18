function discountDay(num) {
	switch (num) {
		case 1:
			console.log("Too Early");
			break;
		case 15:
			console.log("Here is the discount");
			break;
		case 30:
			console.log("Too Late");
			break;
		default:
			console.log("Not a valid date");
	}
}
discountDay(30);

function printNum(numA, numB) {
	let result = [];
	while (numB >= numA) {
		result.push(numA);
		numA++;
	}
	console.log(result);
	return result;
}

printNum(1, 50);

const myObj = {
	name: "Jack",
	email: "jack@gmail.com",
	age: 30,
};
function objProps(obj) {
	let keyArr = [];
	for (let key in obj) {
		keyArr.push(key);
	}
	return keyArr;
}
console.log(objProps(myObj));

function calcProfit(priceArr) {
	for (let i = 0; i < priceArr.length; i++) {
		console.log("Buy Day", i + 1, "price", priceArr[i]);
		for (let j = i + 1; j < priceArr.length; j++) {
			console.log("Sell Day", j + 1 + " price", priceArr[j], ":", priceArr[j], "-", priceArr[i], "=", priceArr[j] - priceArr[i]);
		}
		console.log("---");
	}
}

calcProfit([315, 50, 314, 684, 100, 648, 132, 50, 98, 45]);
