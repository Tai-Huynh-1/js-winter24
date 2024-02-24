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

// console.log(student1.age);

// console.log(student1.getValue("phone"));

// student1.gradYear = 2023;
// console.log("after", student1);

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

const user1 = {
	name: "User1",
	email: "user1@gmail.com",
	website: "www.user1.com",
	age: 20,
	phone: {
		home: "",
		cell: "",
	},
	cart: ["grapes"],

	// methods
	getName() {
		return this.name;
	},
	getPhone(phoneType) {
		return this.phone[phoneType];
	},
	getEmail() {},
	addToCart(item) {
		this.cart.push(item);
		return true;
	},
	removeFromCart(item) {
		// this.cart = this.cart.filter((el) => el !== item);
		// const index = this.cart.indexOf(item);
		// if (index !== -1) {
		// 	this.cart.splice(index, 1, "milk", "spoon");
		// }
	},
	addNewPhone(phoneType, phoneNumber) {
		this.phone[phoneType] = phoneNumber;
	},
	updateNewPhone(phoneType, newPhoneNumber) {
		this.phone[phoneType] = newPhoneNumber;
	},
};

// user1.addToCart("apples");
// user1.addToCart("oranges");
// console.log(user1.cart);
// user1.removeFromCart("apples");
// console.log(user1.cart);
// user1.updateNewPhone("personal", "111-1111-111");
// user1.addNewPhone("personal", "9999999999");
// console.log(user1);

// // deleting properies
// delete user1.age;
// console.log(user1);

// Given an array integers/numbers, and a target
// Find 2 numbers that add up to the target number and return the index of those 2 numbers
// Ex: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] => 2 + 7 = 9

function twoSum(nums, target) {
	// value at index i : index i
	const prevNums = {
		[nums[0]]: 0,
	};

	for (let i = 1; i < nums.length; i++) {
		let diff = target - nums[i];
		if (prevNums[diff] !== undefined) return [i, prevNums[diff]];

		prevNums[nums[i]] = i;
	}

	return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

function indexOf(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) return i;
	}
	return -1;
}
