// create an object - key : value pair
// key is unique, value does not have to be unique
// ordering of key value pairs DOES NOT MATTER in an object
const student1 = {
	firstName: "Anne",
	email: "anne@gmail.com",
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

// access data in an object => we use the "." or object["key"]
console.log(student1.email); // accessing properties / keys

console.log(student1.getEmail()); // invoke getEmail with () since this is a method / function
