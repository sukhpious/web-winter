function add(x, y) {
	return x + y;
}
// add(3, 4);
console.log(add(3, 4));

function div(x, y) {
	return x / y;
}
console.log(div(8, 4));

function convert(f) {
	return parseInt((f - 32) * (5 / 9));
}
console.log(convert(45));

function divisibleBy55(num) {
	if (num === 0) return `Please enter a valid number!`;
	return num % 55 === 0 ? true : false;
}
console.log(divisibleBy55(15));
console.log(divisibleBy55(165));

function checkLength(str) {
	return str.length;
}
console.log(checkLength("JavaScript"));

function concat(a, b) {
	// return a + b;
	return `${a} ${b}`;
}
console.log(concat("JavaScript", "IS AWESOME"));
