// 1.

// n = 5 => 5! => 5 * 4 * 3 * 2 * 1
function calculateFactorial(n) {
	// init. a variable to hold answer outside of for loop - init. to 1

	for (let i = 2; i <= n; i++) {
		// use for loop to get the next number to multiply
	}

	// return the answer init. at the top
}

// console.log(calculateFactorial(5)); // 120

// 2.
function sumArray(array) {
	// init sum variable outside of loop - init. to 0;
	// loop to iterate through each element and add it to the answer variable on outside of loop
	// return the sum
}

// 3. "hello" => ["h", "e", "l", "l", "o"] => "olleh"
function reverseString(str) {
	let output = "";

	// for (let i = str.length - 1; ) // iterate through string backward
	// hint: work with string directly: str.charAt(4) => "o"
	// or you can turn string into an array of letters: const stringArr = string.split("")
	// or string[index]

	return output;
}

// console.log("hello"[4]);

// 4.
function countVowels(str) {
	let counter = 0; // number of vowels

	// for loop to iterate through each character of string, check if the character is a vowel
	// if vowel, then increment counter

	return counter;
}

console.log(countVowels("hello world"));
