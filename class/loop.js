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

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function printReverse(array) {
	for (let i = array.length - 1; i >= 0; i--) {
		const element = array[i];
		console.log(element);
	}
}

// printReverse([1, 2, 3, 4, 5, 6, 7, 8, 9]);

function stringBuilder(arrayOfLetters) {
	let word = "";

	for (let index = 0; index < arrayOfLetters.length; index++) {
		const letter = arrayOfLetters[index]; // "h", "e", "l"
		word = word + letter; // "" + "h" => "h" + "e" => "he" + "l" => "hel"
	}

	return word;
}

console.log(stringBuilder(["h", "e", "l", "l", "o"])); // "hello"

// strings with methods
console.log("hello".concat(" world")); // primitive: string, undefined, null, boolean, number
// ("hello"); // auto boxing -> turns a primitive into an object to perform a method then gets rid of the object in memory
// []
