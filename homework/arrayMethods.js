// 1
function discount(age) {
	// if greater than or equal to 65 => return "special discount"
	// otherwise "not allowed"
}

// 2
function multiply100(array) {
	return array.map((num) => num * 100);

	// forEach way
	// const ans = []
	// array.forEach(num => {
	//     ans.push(num * 100)
	// })
	// return ans;

	// reduce way
	// return array.reduce((newArr, currNum) => {
	// 	newArr.push(currNum * 100);
	// 	return newArr;
	// }, []);
}

console.log(multiply100([1, 2, 3, 4]));

const multi = (array) => array.map((num) => num * 100); // even shorter alternative form

// 3
function multiplyV2(arr) {
	const len = arr.length;
	if (len < 5) return null;

	return arr.map((num) => num * 100);
}

// 4
function q4(arr) {
	const ans = [];

	const cb = (num) => {
		const isEven = num % 2 === 0; // 100/2 = 50, remainder 0
		if (isEven) {
			const newNumber = num * 100;
			// push to new arr
		} else {
			// push original num
		}
	};
	arr.forEach(cb);

	return ans;
}

// 5
function q5(arr) {
	let counter = 0;
	arr.forEach((num) => {
		if (num === 154) counter++;
	});
	return counter;
}

// 6
function checkType(input) {
	const type = typeof input;
	if (type === "object") return "object";

	return "it's something else";
}

// console.log(typeof {});
// console.log(typeof function () {});
// console.log(function () {} instanceof Object);
