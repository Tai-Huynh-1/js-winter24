// 5
function toTitleCase(str) {
	// "asdasSdsdaSDASDsds SDFfd Sdasdfsdf dsfsdf".toLowerCase().split(" ")
	const arrOfWords = str.toLowerCase().split(" ");

	for (let i = 0; i < arrOfWords.length; i++) {
		const word = arrOfWords[i];
		const firstChar = word.charAt(0).toUpperCase(); // word[0]
		const newWord = firstChar + word.substring(1); // A + sdasSdsdaSDASDsds

		arrOfWords[i] = newWord;
	}

	// console.log(arrOfWords.join(" "));
	return arrOfWords.join(" ");
}

// toTitleCase("asdasSdsdaSDASDsds SDFfd Sdasdfsdf dsfsdf");

// #4
function removeDuplicates(arr) {
	// const set = [];

	// for (let i = 0; i < arr.length; i++) {
	// 	const num = arr[i];

	// 	if (!set.includes(num)) {
	// 		set.push(num);
	// 	}
	// }

	const set = new Set(arr);
	const result = [];

	set.forEach((el) => result.push(el));

	return result;
}

// console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5]));

// 2
function isPalindrome(str) {
	return str.split("").reverse().join("") === str;
}
// console.log(isPalindrome("cat"));

// 1
function findMax(arr) {
	let max = arr[0];
	for (i = 1; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
	}
	return max;
}

// console.log(findMax([1, 2, 3, 3, 4, 5, 5]));

// #8
function reverseArray(arr) {
	const reverseArray = []; // space: O(N), time: O(N)
	for (let i = arr.length - 1; i >= 0; i--) {
		const el = arr[i];
		reverseArray.push(el);
	}
	return reverseArray;
}

// console.log(reverseArray([1, 2, 3, 3, 4, 5, 5]));

// #7
function longestWord(sentence) {
	let sentenceSplit = sentence.split(" ");
	let longestLength = 0;
	let longestWord = "";
	for (let i = 0; i < sentenceSplit.length; i++) {
		if (sentenceSplit[i].length > longestLength) {
			longestLength = sentenceSplit[i].length;
			longestWord = sentenceSplit[i];
		}
	}
	return longestWord;
}
// console.log(longestWord("SDFfd Sdasdfsdf asdasSdsdaSDASDsdssadasds dsfsdf"));

// reversing array
function reverseInPlace(array) {
	let left = 0;
	let right = array.length - 1; // [6, 2, 3, 4, 5, 1]  temp = 1

	while (left < right) {
		let temp = array[left];
		array[left] = array[right];
		array[right] = temp;

		left++;
		right--;
	}

	return array;
}

// console.log(reverseInPlace([1, 2, 3, 4, 5, 6])); // N = 6, time: O(N)

function inPlaceIsPalindrome(str) {
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		if (str[left] !== str[right]) return false; // c a t a s t r o p a c

		left++;
		right--;
	}

	return true;
}

// console.log(inPlaceIsPalindrome("racecar"));

// a^2 + b^2 = c ; 0 <= c <= 100,000   intuition solve for a: a = sqrt(c - b^2) so: a <= sqrt(c)
// return [a, b] if exist, otherwise return []; a === b is valid
// c = 8; [2, 2] => 2^2 + 2^2 = 8
// c = 5; [1, 2] => 1^2 + 2^2 = 5
// c = 3; [];

function findNum(c) {
	let upperBound = Math.sqrt(c);

	for (let a = 0; a <= upperBound; a++) {
		for (let b = 0; b <= upperBound; b++) {
			let sum = a * a + b * b;
			if (sum === c) return [a, b];
		}
	}

	return [];
}

console.log(findNum(8));
console.log(findNum(5));
console.log(findNum(3));
console.log(findNum(400));
