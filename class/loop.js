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

function loop2(array) {
	let length = array.length;
	let lastIndex = length - 1;
	let index = 0;

	while (index <= lastIndex) {
		// 5 <= 4
		const currEl = array[index];
		console.log(currEl);
		// increment or decrement your index
		index++;
	}

	// continues down here after while loop
}

// loop2(["h", "e", "l", "l", "o"])

function countVowel(str) {
	const vowel = ["a", "e", "i", "o", "u"];
	let length = str.length;
	let lastIndex = length - 1;
	let index = 0;
	let numOfVowels = 0;

	while (index <= lastIndex) {
		const currLetter = str[index];
		const isVowel = vowel.includes(currLetter);
		if (isVowel) {
			numOfVowels++;
		}
		index++;
	}

	return numOfVowels;
}

function countVowelForLoop(str) {
	const vowel = ["a", "e", "i", "o", "u"];
	let length = str.length;
	let numOfVowels = 0;

	for (let index = 0; index < length; index++) {
		const currLetter = str[index];
		const isVowel = vowel.includes(currLetter);
		if (isVowel) {
			numOfVowels++;
		}
	}

	return numOfVowels;
}

// console.log(countVowelForLoop("hello world"));

function findNumberExitEarly(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		const currNumber = arr[i];
		console.log(currNumber);
		if (currNumber === target) return i;
	}

	return -1; // common convention in JS to return -1 if not found
}

function findForEach(arr, target) {
	let foundIndex = -1;

	arr.forEach((el, index) => {
		console.log(el);
		if (el === target) {
			console.log("if statement got triggered correctly");
			foundIndex = index;
		}
	});

	return foundIndex;
}

// for-loop & while-loop VS. .forEach & .map

console.log("found at index: " + findForEach([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

function mapper(array) {
	return array.map((userObject) => {
		return { ...userObject, areaCode: "999" };
	});
}

console.log(
	"new list",
	mapper([
		{ firstName: "tai", id: "123456789" },
		{ firstName: "Jack", id: "987654321" },
	])
);
