function Animal(color, numOfEyes, numOfLegs) {
	this.color = color;
	this.numOfEyes = numOfEyes;
	this.numOfLegs = numOfLegs;
}

Animal.prototype.eat = function () {
	console.log("Time to eat!!!");
};

Animal.prototype.sleep = function () {
	console.log("sleeping");
};

// instantiating an object
const animal1 = new Animal("grey", "2", "2"); // monkey
const animal2 = new Animal("white", "2", "0"); // fish
const animal3 = new Animal("black", "8", "8"); // spider

function Bird(name, color, ableToFly) {
	this.name = name;
	this.color = color;
	this.ableToFly = ableToFly;
}

Bird.prototype.eat = function () {
	console.log("");
};

Bird.prototype.sleep = function () {
	console.log("");
};

Bird.prototype.getName = function () {
	return this.name;
};

Bird.prototype.setName = function (newName) {
	if (typeof newName !== "string") return;
	this.name = newName;
};

const bird1 = new Bird("big berd", "yellow", false);
console.log(bird1);
bird1.setName(100);
console.log("after setting to number", bird1);
bird1.setName("Big Bird");
console.log("after setting to correct name", bird1);
