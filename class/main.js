// Compile: JS: Interpreted Language (runtime) => Translate the code line by line before execution => CPU => Slower runtime / likely faster dev time (garbage collector / auto. memory management)

// Compile: Java: Compiled Language (compile time) => Java Bytecode (JVM) (runtime) => Assembly Language => Binary Code => CPU => Faster than inter. language, but slower than C/C++ (garbage collector / auto. memory management)

// Compile: C/C++: Compiled Language (compile time) => Assembly Language => Binary Code => CPU => Extremely fast runtime / likely slower dev time / manual memory management

// Memory: Disk/SSD (persistent) (bigger/slower) => RAM (non-persistent) (smaller than disk/faster) => CPU (register memory) (non-persistent)

// JS: Dynamically typed language / Java/ TypeScript: Statically typed language
var myFirstVariable = "hello world";
// console.log(myFirstVariable); // prints the variable

myFirstVariable = 5; // reassigned to a number
// console.log(myFirstVariable);

// primitive types in JS: string, number, boolean, undefined, null
var myName = "tai"; // data type: string
var age = 11; // data type: number
var active = true; // boolean
var membership; // undefined - proper value/type  - var membership = undefined (same thing)
var dateCreated = null; // null - proper value/type

console.log(typeof membership, membership); // undefined
membership = "gold"; // re-assignment using assignment operator = ; also notice we did not have to use the 'var' keyword again
console.log(typeof membership, membership);

var myName = true; // REDECLARING variable: notice we use the 'var' keyword again with same variable name as line 17 / this is only possible with 'var'
// var keyword should be avoided when writing our source code / transpiler/TS compiler will convert the source code to use "var" for compatibility reasons

// other keywords for declaring variables
let x = 5; // 'let' allows re-assignment
const y = 10; // 'const' does NOT allow re-assignment

x = 15; // reassignment => valid
// y = 20; // reassignment => invalid/illegal

// use 'let' if you expect the variable to change; otherwise, use 'const'
var myVarVariable; // allows reassignment so I can just declare variable without assigning value
let myLetVariable; // allows reassignment so I can just declare variable without assigning value
// const myConstVariable; // DOES NOT allow reassignment, so I must initialize with a value (can still assign it "undefined" explicitly)
