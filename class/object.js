// create an object - key : value pair
// key is unique, value does not have to be unique
// ordering of key value pairs DOES NOT MATTER in an object
const student1 = {
	firstName: "Anne",
	email: "anne@gmail.com",
	phone: "111-111-1111",
	age: 15, // <--
	isActive: true,
	address: {
		mailingAddress: "123 Main St",
		shippingAddress: "321 Wall St",
	},
	enrollment: ["cs101", "math1a", "chem2a"],
	gradYear: null, // <-- update

	// methods: function that belongs to an object
	getEmail: function () {
		return this.email;
	},

	// different way of declaring a method (ES6 method notation)
	getValue(key) {
		// <-- get phone with this method
		return this[key];
	},
};

const student2 = {
	firstName: "Jack",
	email: "jack@gmail.com",
	phone: "111-111-1111",
	age: 15,
	isActive: true,
	address: {
		mailingAddress: "123 Main St",
		shippingAddress: "321 Wall St",
	},
	enrollment: ["cs101", "math1a", "chem2a"],
	gradYear: null,

	// methods: function that belongs to an object
	getEmail: function () {
		return this.email;
	},

	// different way of declaring a method (ES6 method notation)
	getValue(key) {
		return this[key];
	},
};

// access / reading data in an object => we use the "." or object["key"]
// console.log(student1.email); // accessing properties / keys

// console.log(student1.getEmail()); // invoke getEmail with () since this is a method / function

// console.log(student1.address.mailingAddress); // accessing a nested property

// console.log(student1.enrollment[1]); // accessing an array element

// console.log("before", student1);
student1.enrollment[2] = "bio101"; // update by reassignment: using assignment operator
// console.log("after", student1);

student1.address.shippingAddress = "999 Wall St";
// console.log("after", student1);

student1.address["mailingAddress"] = "777 Main St"; // access / update object property with ["key"] notation
// console.log("after", student1);

console.log(student1.age);

console.log(student1.getValue("phone"));

student1.gradYear = 2023;
console.log("after", student1);

// chain .notations
// "my string is hello world".split(" ").reverse()

// build a user object
// properties: name: string, phone: object(home: string, cell: string), email: string, website: string, age: number
// cart: ["grapes"]
//
// methods: getName() -> name
// getPhone(phoneType) -> appropriate phone number
// getEmail()
// addToCart(item) -> boolean (returns boolean indicating if item has been added successfully or not)

const user = {
	name: "User1",
	email: "user1@gmail.com",
	website: "www.user1.com",
	age: 20,
	phone: {},
	cart: [],
};
