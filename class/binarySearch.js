function randomString(length) {
	// Define the characters that can be included in the string
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	const charactersLength = characters.length;

	for (let i = 0; i < length; i++) {
		// Generate a random index to pick characters
		const randomIndex = Math.floor(Math.random() * charactersLength);
		// Append the character to the result
		result += characters.charAt(randomIndex);
	}

	return result;
}

function generateStringArray(length) {
	const result = new Array(length);

	for (let i = 0; i < length; i++) {
		result[i] = randomString(5);
	}

	return result;
}

const products = generateStringArray(1000);

// console.log(products.length);
// console.log(randomProduct);

// O(N)
function searchProduct(list, target) {
	let counter = 0;
	for (let i = 0; i < list.length; i++) {
		counter++;
		const item = list[i];
		if (item === target) {
			console.log("counter: ", counter);
			return i;
		}
	}
	return -1;
}

// console.log("index found: ", searchProduct(products, randomProduct)); // 355

// sorting products
products.sort();
const randomProduct = products[355];

// O(log N)
function binarySearch(sortedList, target) {
	let counter = 0;
	let left = 0;
	let right = sortedList.length - 1;

	while (left <= right) {
		counter++;
		const mid = Math.floor((left + right) / 2);

		if (sortedList[mid] === target) {
			console.log("counter: ", counter);
			return mid;
		} else if (sortedList[mid] < target) {
			left = mid + 1; // search right half
		} else {
			right = mid - 1; // search left half
		}
	}

	console.log("counter: ", counter);
	return -1;
}

console.log("index found at: ", binarySearch(products, randomProduct));

// 1:	1000
// 2:	500
// 3:	250
// 4:	125
// 5:	62
// 6:	31
// 7: 	15
// 8:	7
// 9:	3
// 10:	1

// 1000 => 10 * 10 * 10
// 1000 => 2^10 => log b2(2^10)

// 2 000 000 000  => log b2(2^N)
