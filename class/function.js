console.log("program start");

function greet(greeting) {
	// function parameters are the inputs to a function in the function signature: ex. greeting
	console.log(greeting);
}

// to invoke/call/use a function, we have to call function name with ()
let g = "hello world";
// greet("hello world"); // an "argument" is the actual input being passed into a function when it is being invoked/used

// greet("hello again");

// console.log("program ending");

// variable scoping in functions
const lastName = "Jackson";

function printLastName() {
	// closure captures all variables available to the function when function is created - it allows the function to use these variables later
	// WARNING: These variable may be stale (outdated)

	const lastName = "Ng";
	console.log(lastName);
	console.log(g);
	console.log(firstName);
}

// printLastName();

// OTHER WAYS OF DECLARING FUNCTIONS
// anonymous function
const myAnonymousFunc = function (a, b) {
	// do something inside function body
	return a + b;
};

// arrow function
const myArrowFunc = (a, b) => {
	return a + b;
};

const myArrowFuncB = (a, b) => a + b; // single line arrow function (without curly bracket body - this implies "return")
const sum = myArrowFuncB(5, 6);
// console.log(sum);

// FUNCTIONS ARE OBJECTS: they can be passed around like objects
// [1, 2, 3].forEach(function (element) {
// 	console.log(element);
// });

// ["anna", "jack", "sam"].forEach((el, idx, arr) => {
// 	console.log(el, idx, arr);
// });

const reducedSum = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((prevSum, el) => prevSum + el, 0);
// console.log(reducedSum);

// functions can be reused
function sumReduce(array) {
	return array.reduce((prevSum, currNum) => prevSum + currNum, 0);
}

// const ans1 = sumReduce([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// const ans2 = sumReduce([1, 2, 3, 9]);
// const ans3 = sumReduce([1, 2, 7, 8, 9]);
