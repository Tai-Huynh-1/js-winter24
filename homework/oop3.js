// 1.
class Book {
	title;
	author;
	yearPublished;

	constructor(title, author, yearPublished) {
		this.title = title;
		this.author = author;
		this.yearPublished = yearPublished;
	}

	getSummary() {
		return `${this.title} is written by ${this.author} and published in ${this.yearPublished}`;
	}
}

const ulysses = new Book("Ulysses", "James Joyce", "1922");
// console.log(ulysses.getSummary());

// 2.
class Rectangle {
	width;
	height;
	constructor(w, h) {
		this.width = w;
		this.height = h;
	}

	calculateArea() {
		return this.width * this.height;
	}

	calculatePerimeter() {
		return this.width * 2 + this.height * 2;
	}
}

// 3.
class Vehicle {
	make;
	model;
	year;

	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	getInfo() {
		return this.make + " " + this.model + " " + this.year;
	}
}

class Car extends Vehicle {
	numDoors;

	constructor(make, model, year, numDoors) {
		super(make, model, year);
		this.numDoors = numDoors;
	}
	getInfo() {
		return this.make + " " + this.model + " " + this.year + " " + this.numDoors;
	}
}

// 4.
class Employee {
	#id;
	#name;
	#email;

	constructor(id, n, e) {
		this.#id = id;
		this.#name = n;
		this.#email = e;
	}

	greet() {
		console.log(`Hi my name is ${this.#name}`);
	}
	getId() {
		return this.#id;
	}
	getName() {
		return this.#name;
	}
}

class CrewMember extends Employee {
	#manager;
	constructor(id, n, e) {
		super(id, n, e);
	}
	getManager() {
		return this.#manager;
	}
	setManager(m) {
		if (!(m instanceof Manager)) return;
		this.#manager = m;
	}
}

class Manager extends Employee {
	#subordinates;
	constructor(id, n, e) {
		super(id, n, e);
		this.#subordinates = new Set();
	}
	getSubordinates() {
		return this.#subordinates;
	}
	addSubordinates(...subs) {
		subs.forEach((sub) => {
			this.#subordinates.add(sub);
			sub.setManager(this);
		});
	}
	removeSubordinate(removeSub) {
		// this.#subordinates = this.#subordinates.filter((sub) => sub.getId() !== removeSub.getId());
		this.#subordinates.delete(removeSub);
	}
}

const m = new Manager(155, "Harshil", "h@email.com");
console.log("manager", m.getSubordinates());

const c1 = new CrewMember(1, "Juan", "j@email.com");
const c2 = new CrewMember(2, "Anita", "a@email.com");
const c3 = new CrewMember(3, "Tai", "t@email.com");

m.addSubordinates(c1, c2, c3);
m.getSubordinates().forEach((s) => console.log(`employee: ${s.getName()} - manager: ${s.getManager().getName()}`));

// m.addSubordinates(c3);
// m.getSubordinates().forEach((s) => console.log(`employee: ${s.getName()} - manager: ${s.getManager().getName()}`));

// m.removeSubordinate(c3);
// m.getSubordinates().forEach((s) => console.log(`employee: ${s.getName()} - manager: ${s.getManager().getName()}`));

c3.setManager(c1);
console.log(c3.getManager().getName());
