const arrA = [10]; // address stored in stack mem. 0xA8F56B  | object itself stored in heap
const arrB = arrA; // 0xA8F56B
const arrC = [10]; // 0xCA5F6C
const arrD = [10]; // 0x5687DF

const myPrimitive = 7; // stack mem: 0000_0000_0000_0111

console.log("arrA === arrB", arrA === arrB); // true: arrA are equal        true
console.log("arrA === arrC", arrA === arrC); // true: value look the same   false
console.log("arrC === arrD", arrC === arrD); // true: they look the same    false

// examples of object manipulation
function addGrocery(groceryList, item) {
	groceryList.push(item);
}
const list = ["grapes"];
console.log(list); // grapes
addGrocery(list, "milk");
console.log(list); // milk - grapes, milk

// examples of primitives
function modifyName(characterName, newName) {
	console.log("character name BEFORE mod INSIDE FUNCTION", characterName);
	characterName = newName;
	console.log("character name AFTER mod INSIDE FUNCTION", characterName);
}
let characterName = "Sam";
console.log("character name BEFORE mod.", characterName); // Sam
modifyName(characterName, "Jack");
console.log("character name AFTER mod", characterName); // Jack
