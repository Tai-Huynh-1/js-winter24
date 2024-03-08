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
// function Car(brand, year, color, model) {
// 	this.brand = brand;
// 	this.year = year;
// 	this.color = color;
// 	this.model = model;
// }

// Car.prototype.honk = function () {
// 	console.log("beep beep!");
// };

// // This is what the car object will look like
// // const car6 = {
// //     ... custom properties,
// //     prototype: {
// //         honk: function () {
// //             console.log("beep beep!");
// //         }
// //     }
// // }

// const car4 = new Car("tesla", "2020", "red", "model 3");
// const car5 = new Car("toyota", "2022", "white", "prius");
// console.log(car4);
// console.log(car5);
// car4.honk();
// car5.honk();

// student.address.getAddress = function () {};
// student.address.getAddress();

// 4 OOP Principles: Inheritance, Encapsulation, Polymorphism, Abstraction

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

// const paneraBread = new Store("Panera Bread", 10, "2024");
// console.log(paneraBread);

// create a parent class for inheritance
class Vehicle {
	#year;
	#make;
	#model;
	#color;

	constructor(year, make, model, color) {
		this.#year = year;
		this.#make = make;
		this.#model = model;
		this.#color = color;
	}

	getYear() {
		return this.#year;
	}

	getMake() {
		return this.#make;
	}

	getModel() {
		return this.#model;
	}

	getColor() {
		return this.#color;
	}

	setColor(color) {
		if (typeof color !== "string") return;
		this.#color = color;
	}

	useHorn() {
		console.log("Vehicle: beep beep!");
	}

	start() {
		console.log("starting Vehicle");
	}

	stop() {
		console.log("turning off Vehicle");
	}

	prep() {
		console.log("prepping vehicle to start");
	}
}

class SUV extends Vehicle {
	#seats;

	constructor(year, make, model, color, seats) {
		super(year, make, model, color); // calling parent class constructor (Vehicle)
		this.#seats = seats;
	}

	getSeats() {
		return this.#seats;
	}

	setSeats(num) {
		if (typeof num !== "number") return;
		this.#seats = num;
	}

	// Overriding parent methods using function signature
	useHorn() {
		console.log("SUV: beep beep!");
	}

	// Overriding parent + using parent's method via super
	start() {
		super.prep();
		console.log("starting SUV");
	}

	stop() {
		console.log("turning off SUV");
	}
}

class Sedan {
	year;
	make;
	model;
	color;
	seats;

	constructor(year, make, model, color, seats) {
		// super(year, make, model, color);
		this.year = year;
		this.make = make;
		this.model = model;
		this.color = color;
		this.seats = seats;
	}

	// useHorn() {
	// 	console.log("Sedan: beep beep!");
	// }

	// start() {
	// 	console.log("starting Sedan");
	// }

	// stop() {
	// 	console.log("turning off Sedan");
	// }
}

const sedan1 = new Sedan("2020", "honda", "civic", "grey", 5);
const suv1 = new SUV("2015", "toyota", "highlander", "white", 7);

console.log(suv1.seats); // undefined (private variable now)
console.log(suv1.getSeats()); // 7

suv1.setSeats("ten");
console.log(suv1.getSeats()); // 7

suv1.setSeats(10);
console.log(suv1.getSeats()); // 10

console.log(suv1.getYear());
