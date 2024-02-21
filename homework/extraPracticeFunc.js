// 5
function toTitleCase(str) {
	// "asdasSdsdaSDASDsds SDFfd Sdasdfsdf dsfsdf".toLowerCase().split(" ")
	const arrOfWords = str.toLowerCase().split(" ");

	for (let i = 0; i < arrOfWords.length; i++) {
		const word = arrOfWords[i];
		const firstChar = word.charAt(0).toUpperCase(); // word[0]
		const newWord = firstChar + word.substring(1);

		arrOfWords[i] = newWord;
	}

	console.log(arrOfWords.join(" "));
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
console.log(isPalindrome("cat"));

// 1
function findMax(arr) {
	let max = arr[0];
	for (i = 1; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
	}
	return max;
}

console.log(findMax([1, 2, 3, 3, 4, 5, 5]));

// #8
function reverseArray(arr) {
	const reverseArray = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		const el = arr[i];
		reverseArray.push(el);
	}
	return reverseArray;
}

console.log(reverseArray([1, 2, 3, 3, 4, 5, 5]));

// #7
function longestWord(sentence) {
	let sentenceSplit = sentence.split(" ");
	let longestWord = 0;
	for (let i = 0; i < sentenceSplit.length; i++) {
		if (sentenceSplit[i].length > longestWord) {
			longestWord = sentenceSplit[i].length;
		}
	}
	return longestWord;
}
console.log(longestWord("SDFfd Sdasdfsdf asdasSdsdaSDASDsdssadasds dsfsdf"));
