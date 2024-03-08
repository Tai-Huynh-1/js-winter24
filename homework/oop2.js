class Animal {
	name;
	color;
	numOfEyes;
	numOfLegs;

	constructor(name, color, numOfEyes, numOfLegs) {
		this.name = name;
		this.color = color;
		this.numOfEyes = numOfEyes;
		this.numOfLegs = numOfLegs;
	}
	//b.) methods
	eat() {
		console.log("eat");
	}
	sleep() {
		console.log("sleep");
	}
	walk() {
		console.log("walk");
	}
	run() {
		console.log("run");
	}
}

// 2.) Animal class => Bird class
// a.) properties
class Bird extends Animal {
	canFly;

	constructor(name, color, numOfEyes, numOfLegs, canFly) {
		super(name, color, numOfEyes, numOfLegs);
		this.canFly = canFly;
	}
	// b.) methods
	fly() {
		console.log("fly");
	}
	peck() {
		console.log("peck");
	}
}

// 3.) Animal class => Dog class
// a.) properties
class Dog extends Animal {
	breed;

	constructor(name, color, numOfEyes, numOfLegs, breed) {
		super(name, color, numOfEyes, numOfLegs);
		this.breed = breed;
	}
	// b.) methods
	bark() {
		console.log("ruff");
	}
	dig() {
		console.log("digging");
	}
}
