// 1.
function countWords(sentence) {
	const words = sentence.split(" ");
	const result = {};

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		const count = result[word];
		if (count) {
			result[word] = count + 1;
		} else {
			result[word] = 1;
		}
		console.log(result);
	}
	return result;
}
// countWords("hello world hello"); // {"hello": 2, "world": 1}

function countLetters(sentence) {
	const letters = sentence.split("");
	const result = {}; // O(n) space depending on size of the sentence
	for (let i = 0; i < letters.length; i++) {
		const letter = letters[i];
		const count = result[letter]; // result['h'] => undefined, 1
		if (count) {
			result[letter] = count + 1; // h: 2
		} else {
			result[letter] = 1; // h: 1
		}
		console.log(result);
	}
	return result;
}
// countLetters("hello world hello");

// 2.
function updateInventory(inventory, newItems) {
	newItems.forEach((item) => {
		const count = inventory[item];
		if (count) {
			inventory[item]++;
		} else {
			inventory[item] = 1;
		}
		console.log(inventory);
	});
	return inventory;
}

const inventory = { apples: 2, bananas: 1 };
const newItems = ["apples", "oranges", "apples"];
// console.log(updateInventory(inventory, newItems));

// 3.
function groupPeopleByAge(people) {
	const result = {};
	people.forEach((person) => {
		const name = person.name;
		const age = person.age;
		if (result[age]) {
			result[age].push(name);
		} else {
			result[age] = [name];
		}
		console.log(result);
	});
	return result;
}

const people = [
	{ name: "John", age: 23 },
	{ name: "Amy", age: 25 },
	{ name: "Cameron", age: 23 },
];
// console.log(groupPeopleByAge(people)); // results: { "23": ["John", "Cameron"], "25": ["Amy"] }

function countLetters2(sentence) {
	const map = new Map();
	const letters = sentence.split("");
	letters.forEach((letter) => {
		if (map.has(letter)) {
			// O(1)
			map.set(letter, map.get(letter) + 1);
		} else {
			map.set(letter, 1);
		}
		console.log(map);
	});
}

countLetters2("hello world hello");

function find(array, target) {
	// array.length: N => O(N) / O(N)
}

class MockMap {
	array = [];
	arraySize = 10;

	set(key, value) {
		const hashIndex = this.keyToNumber(key) % this.arraySize; // 312 % 10 => 2
		console.log(`your value will be stored at index ${hashIndex}`);
		this.array[hashIndex] = value;
	}

	// O(1)
	get(key) {
		const hashIndex = this.keyToNumber(key) % this.arraySize; // 312 % 10 => 2
		console.log(`your value will be retrieved from index ${hashIndex}`);
		return this.array[hashIndex];
	}

	keyToNumber(key) {
		const chars = key.split(""); // ['c', 'a', 't'] | ['t', 'a', 'c'], // 97+99+116=312(cat)
		return chars.reduce((accu, char) => {
			const charCode = char.charCodeAt(0);
			return accu + charCode;
		}, 0);
	}
}

const mockMap = new MockMap();
mockMap.set("h", "my secret value"); // key = cat, tac
console.log(mockMap.get("h")); // 2
