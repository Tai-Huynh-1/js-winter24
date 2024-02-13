function loop(array) {
	// "for" loop
	// for (let i = 0; i < array.length; i++) {
	// 	const element = array[i];
	// 	console.log(element);
	// }

	// "while" loop
	let i = 0;
	while (i < array.length) {
		const element = array[i];
		console.log(element);
		i++; // i = i + 1 | make sure to increment i to keep the loop going
	}
}

// loop(["ana", "jack", "sam"]); // array[3]

function sum(array) {
	let result = 0;

	let i = 0;
	while (i < array.length) {
		const element = array[i];
		result = result + element;
		i++; // i = i + 1 | make sure to increment i to keep the loop going
	}

	return result;
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
