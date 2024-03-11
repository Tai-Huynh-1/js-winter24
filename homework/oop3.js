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

// 4.
