const month = ["Jan", "Feb", "Mar"];
//  "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
const date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function printCalendar(monArr, dateArr) {
	let date;
	for (let i = 0; i < monArr.length; i++) {
		for (let j = 0; j < dateArr.length; j++) {
			date = `${monArr[i]} ${dateArr[j]}`;
			console.log("-", date);
		}
	}
}

printCalendar(month, date);

function cloneArray(arrC) {
	let copyArr = arrC;
	console.log("Cloned array", copyArr);
	return copyArr;
}
cloneArray([3, 6, 8, 3, 5, 2, 1]);

function getNthElement(arr, n) {
	if (typeof arr[n] === "undefined") {
		console.log("Element does not exist");
	} else {
		console.log("Nth Element", arr[n]);
	}
}
getNthElement([4, "Sam", 7, 7, "John", "Jenny", 0, 1, true, 66, false, 2], 5);
getNthElement([4, "Sam", 7, 7, "John", "Jenny", 0, 1, true, 66, false, 2], 55);

function customPush(arr, item) {
	let newArr = arr;
	newArr.push(item);
	console.log("Custom Push Length", newArr.length);
}
customPush([5, 6, 3, 8, 7], 22);

function customPop(arr) {
	let newArr = arr.pop();
	console.log("Custom Pop Element", newArr);
}

customPop([25, 67, 33, 18, 37]);
