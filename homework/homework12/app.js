function Animal(color, legs) {
	this.color = color;
	this.eyes = 2;
	this.legs = legs;
	this.eat = function () {
		console.log("eats");
	};
	this.sleep = function () {
		console.log("sleeps");
	};
}

const dog = new Animal("Dog", "brown");
const cat = new Animal("Cat", "black");
const rabbit = new Animal("rabbit", "white");
console.log("Dog", dog);
console.log("Rabit", rabbit.eat());
console.log("Cat", cat.sleep());
//change dog color
dog.color = "black";
console.log(dog.color);

function Bird(name, color, legs) {
	this.name = name;
	this.color = color;
	this.eyes = 2;
	this.legs = legs;
	this.eat = function () {
		console.log("eats");
	};
	this.sleep = function () {
		console.log("sleeps");
	};
	this.getName = function () {
		return this.name;
	};
	this.setName = function (changeName) {
		this.name = changeName;
	};
}

const sparrow = new Bird("sparrow", "brown", 2);
const pigeon = new Bird("pigeon", "white", 2);
//change name
sparrow.setName = "Brown Sparrow";
console.log(sparrow);

// add methods to sparrow
sparrow.sounds = function () {
	console.log("chirping");
};

//does not work
// pigeon.sounds();

// add method to constructor function using prototype
Bird.prototype.sounds = function () {
	console.log("sounds");
};
// sparrow still chirping
sparrow.sounds();
//and pigeon now works
pigeon.sounds();
