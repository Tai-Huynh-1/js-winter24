const array = {
	bucket: [], // [1, 2]
	length: 0,
	prototype: {
		updateLength: function (array) {
			let newLength = 0;
			for (let i = 0; i < array.length; i++) {
				newLength++;
			}
			array.length = newLength;
		},

		push: function (item, originalArray) {
			originalArray.bucket[originalArray.length] = item;
			this.updateLength(originalArray);
		},

		forEach: function (callbackFn, originalArray) {
			for (let i = 0; i < originalArray.length; i++) {
				const currElement = originalArray[i];
				callbackFn(currElement, i, originalArray);
			}
		},
	},
};

console.log(array.bucket);
array.prototype.push("hello world", array);
console.log(array.bucket);

console.log(array.length);
