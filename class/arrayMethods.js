const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// array.forEach()
// arr.forEach((element, index, originalArray) => {
// 	console.log(element, "-", index);
// });

// array.map()
const newArr = arr.map((element) => {
	return element * 100;
});

// console.log(newArr);
// console.log(arr);

// array.filter()
const filteredArr = arr.filter((element) => {
	if (element === 6) return false; // filtering array for the number 6
	return true;
});
console.log("filtered", filteredArr);
console.log("original", arr);

// array.includes()
console.log(arr.includes(60));

// array.findIndex()
// console.log("index for 6: ", arr.findIndex((el) => {

// }));
// array.reverse()
// write reverse in-place function

function findIndex(array, target) {
	let i = -1;

	array.forEach((element, index) => {
		console.log(element);
		if (element === target) {
			console.log("element found at index: " + index);
			return index;
		}
	});

	// while (i < array.length) {
	// 	const element = array[i];
	// 	console.log(element);
	// 	if (element === target) return i;

	// 	i++;
	// }

	return i;
}

// console.log("index is: " + findIndex(arr, 5)); // index: 4
