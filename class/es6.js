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

// console.log("user === user2", user === user2); // false
// console.log("user.address === user2.address", user.address === user2.address); // true

// Array & Object destructuring
const mailingAddress = "jackson ave";
const {
	address: { mailingAddress: wallStAddress },
	courses: [class1, class2],
} = user;

// const mailingAddress = user.address.mailingAddress
// const courses = user.courses
// console.log(mailingAddress);
// console.log(wallStAddress);
// console.log(class1);
// console.log(class2);

// high-order functions (HoF): functions that take in a function as parameter AND/OR returns a function
// .map, .forEach, .filter, .reduce...

// arrow functions
const add2 = (a, b) => a + b;

// closure: is created when a function is created, the closure guarantees that function will always have access
// to the variable in its lexical scope at the time of the function's creation
// we use this to hide variables
function outer(a) {
	return function (b) {
		return a + b;
	};
}

const inner = outer(5); // a = 5
const result = inner(7); // b = 7
// console.log(result);

// hiding variables and exposing functionality using closure & functional programming
function counter() {
	let counter = 0;

	function increase() {
		counter++;
		return counter;
	}

	function decrease() {
		counter--;
		return counter;
	}

	function getCounter() {
		return counter;
	}
	return [getCounter, increase, decrease];
}

// functional programming
const [getCounterA, incA, decA] = counter();
const [getCounterB, incB, decB] = counter();
incA();
incA();
// console.log(getCounterA()); // 2

incB();
decB();
// console.log(getCounterB()); // 0

// pure function: function should not mutate its given input, the function should only work with the resource (data)
// given to it through its parameters
const original = [1, 2, 3, 4];
function impureFunc(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] = array[i] + 2;
	}
	return array;
}
function pureFunc(array) {
	return array.map((num) => num + 2);
}
const pfResult = pureFunc(original);
console.log(pfResult);
console.log(original);
