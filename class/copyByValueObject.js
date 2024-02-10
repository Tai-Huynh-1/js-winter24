const arrA = [10]; // address stored in stack mem. 0xA8F56B  | object itself stored in heap
const arrB = arrA; // 0xA8F56B
const arrC = [10]; // 0xCA5F6C
const arrD = [10]; // 0x5687DF

const myPrimitive = 7; // stack mem: 0000_0000_0000_0111

console.log("arrA === arrB", arrA === arrB); // true: arrA are equal        true
console.log("arrA === arrC", arrA === arrC); // true: value look the same   false
console.log("arrC === arrD", arrC === arrD); // true: they look the same    false

// examples of object manipulation
function replaceGrocery(groceryList, item) {
	// groceryList = list // 0x5687DF - copy by value with pass by value
	groceryList[0] = item;
}

const list = ["grapes"]; // 0x5687DF
console.log(list); // ['grapes']
replaceGrocery(list, "milk");
console.log(list); // ['milk']

// examples of primitives
function modifyName(oldName, newName) {
	// function arguments are passed-by-value
	console.log("character name BEFORE mod INSIDE FUNCTION", oldName); // Sam
	oldName = newName;
	console.log("character name AFTER mod INSIDE FUNCTION", oldName); // Jack
}

let characterName = "Sam";
console.log("character name BEFORE mod.", characterName); // Sam
modifyName(characterName, "Jack");
console.log("character name AFTER mod", characterName); // Sam

let balance = 0;
console.log(balance); // 0

(function (currBalance, amount) {
	currBalance = currBalance + amount;
	console.log(currBalance); // 100
})(balance, 100);

console.log(balance); // 0
