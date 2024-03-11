// ES6 was a major JS update, here are some common features:

// Default parameters for functions
function multiply(a = 1, b = 1) {
	return a * b;
}
// console.log(multiply(5));

// Rest parameters for passing an unspecified amount of arguments to a function
// Your function aggregates the arguments into an "args" array
function add(...args) {
	// "args" is an array of all the inputs
	return args.reduce((acc, curr) => acc + curr, 0);
}
// console.log(add(5, 8, 6, 4, 5, 4, 8, 5));

// Spread operator (shallow copy - copy-by-reference value)
const arrA = [100, 800];
const arrB = [1, 2, [44, 55]];
const arrC = [...arrA, arrB]; // [100, 800, [1, 2, [44, 55]]]
const arrD = [...arrA, ...arrB]; // [100, 800, 1, 2, [44, 55]] // copies CONTENT only
// [arrA, arrB] => [[100, 800], [1, 2, [44, 55]]]
// console.log(arrC);
// console.log(arrD);

const obj1 = {
	firstName: "jack",
	lastName: "sparrow",
	address: {
		mailing: "321 Main St",
	},
};
const obj2 = { ...obj1 };
// console.log(obj2);
// obj1.address.mailing = "123 Main St";
// console.log(obj2);

const user = {
	firstName: "Jack",
	lastName: "Sparrow",
	address: {
		// 10000
		mailingAddress: "123 Wall St.",
		shippingAddress: "321 Main St.",
	},
	courses: ["cs101", "math8"], // 10004
};

const user2 = {
	...user,
};

console.log("user === user2", user === user2); // false
console.log("user.address === user2.address", user.address === user2.address); // true
