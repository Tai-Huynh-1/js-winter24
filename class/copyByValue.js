let a = 5; // init. new value 5
let b = a; // assign a to b (1 time copy) // like init. new value
let c = 5; // init new value

console.log(a === c); // true
console.log(a === b); // true
console.log(b === c); // true

a = 10; // reassigning a to 10
console.log(a === c); // false: 10 === 5
console.log(a === b); // false: 10 === 5
console.log(b === c); // true: 5 === 5

// takeaway: copying primitive values is copy-by-value (1 time copy)

// OBJECTS IN JS
// ====================== ARRAYS ======================
const arrA = [999, "name", true, [[]], false, undefined, null, () => {}]; // declaring array literal
console.log(arrA.length); // 8
arrA.push(1000); // adding to the end of array
console.log(arrA.length, arrA); // 9
arrA[0] = 1000; // replacing elements at a certain index position
console.log(arrA.length, arrA); // 9
arrA.unshift(999);
console.log(arrA.length, arrA);

// VECTOR ----->
// PHYSICS: magnitude & direction
// ^
// |
// |
// | --------> v = vy + vx

// LINEAR ALG.
// 2x + 6y + 9z = 15        [2 6 9 15]          order matters => [6 2 9 15] => 6x + 2y + 9z = 15
// 8x - 12y + 5z = 100      [8 -12 5 100]
// x + 5y - 6z = 50         [1 5 -6 50]

// CS: Vector/Array => List of stuff
