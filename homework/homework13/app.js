class Building {
	#hasWalls;
	#numOfWalls;
	#roofShape;
	constructor(hasWalls, numOfWalls, roofShape) {
		this.#hasWalls = hasWalls;
		this.#numOfWalls = numOfWalls;
		this.#roofShape = roofShape;
	}
	openDoor() {
		console.log("Door is open...");
	}
	closeDoor() {
		console.log("Door is closing...");
	}
	static getHasWalls() {
		return this.#hasWalls;
	}
	getNumOfWalls() {
		return this.#numOfWalls;
	}
	setNumOfWalls(walls) {
		this.#numOfWalls = walls;
	}
	getRoofShape() {
		return this.#roofShape;
	}
	setRoofShape(roofShape) {
		this.#roofShape = roofShape;
	}
}

class Gym extends Building {
	#gymName;
	#hasPool;
	constructor(hasWalls, numOfWalls, roofShape, gymName, hasPool) {
		super(hasWalls, numOfWalls, roofShape);
		this.#gymName = gymName;
		this.#hasPool = hasPool;
	}
	getGymName() {
		return this.#gymName;
	}
	setGymName(name) {
		this.#gymName = name;
	}
	getHasPool() {
		return this.#hasPool;
	}
	setHasPool(pool) {
		this.#hasPool = pool;
	}
}

class Bank extends Building {
	#numOfVault;
	#numOfStaff;
	#name;
	constructor(hasWalls, numOfWalls, roofShape, numOfVault, numOfStaff, name) {
		super(hasWalls, numOfWalls, roofShape);
		this.#numOfVault = numOfVault;
		this.#numOfStaff = numOfStaff;
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	setName(name) {
		this.#name = name;
	}
	getNumOfVault() {
		return this.#numOfVault;
	}
	setNumOfVault(vault) {
		this.#numOfVault = vault;
	}
	getNumOfStaff() {
		return this.#numOfStaff;
	}
	setNumOfStaff(staff) {
		this.#numOfStaff = staff;
	}
}

const plutoGym = new Gym(true, 8, "Gable", "Pluto Gym", true);

const spaceBank = new Bank(true, 12, "Flat", 2, 10, "Space Bank");
console.log(plutoGym.getHasPool());
console.log(spaceBank.closeDoor());
console.log(plutoGym.openDoor());
console.log(spaceBank.getNumOfVault());
console.log(plutoGym.getGymName());
console.log(spaceBank.getName());
