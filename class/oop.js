// Creating a normal object
const car1 = {
	brand: "Ford",
	year: "1998",
	color: "red",
	model: "mustang",
};

const car2 = {
	brand: "Toyota",
	year: "1998",
	color: "white",
	model: "camry",
};

// write constructor functions to produce objects (for the purpose of reusability)
function generateCar(brand, year, color, model) {
	return {
		brand: brand,
		year: year,
		color: color,
		model: model,
	};
}

const car3 = generateCar("tesla", "2020", "white", "model y");
// console.log(car3);

// REAL CONSTRUCTOR FUNCTIONS
function Car(brand, year, color, model) {
	this.brand = brand;
	this.year = year;
	this.color = color;
	this.model = model;
}

Car.prototype.honk = function () {
	console.log("beep beep!");
};

// This is what the car object will look like
// const car6 = {
//     ... custom properties,
//     prototype: {
//         honk: function () {
//             console.log("beep beep!");
//         }
//     }
// }

const car4 = new Car("tesla", "2020", "red", "model 3");
const car5 = new Car("toyota", "2022", "white", "prius");
console.log(car4);
console.log(car5);
car4.honk();
car5.honk();

// student.address.getAddress = function () {};
// student.address.getAddress();

// ES6 syntax => "class" keyword to create a class of object
class Store {
	name;
	isOpen;
	numberOfEmployees;
	yearOpen;

	constructor(name, numberOfEmployees, yearOpen) {
		this.name = name;
		this.isOpen = false;
		this.numberOfEmployees = numberOfEmployees;
		this.yearOpen = yearOpen;
	}

	openStore() {
		this.isOpen = true;
	}

	closeStore() {
		this.isOpen = false;
	}

	getIsOpen() {
		return this.isOpen;
	}

	getNumberOfEmployees() {
		return this.numberOfEmployees;
	}

	setNumberOfEmployees(newNumber) {
		if (typeof newNumber !== "number") return;
		this.numberOfEmployees = newNumber;
	}
}

const paneraBread = new Store("Panera Bread", 10, "2024");
console.log(paneraBread);
