// human number system uses base 10 (decimal) primarily - given 1 digit, I can represent 10 different numbers:
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (ones / tens/ hundreds/ thousands...)
// 99 => expanded form: 9*10^1 + 9*10^0 => 90 + 9 (9 tens + 9 ones) => 99
// 75 => 7*10^1 + 5*10^0 => 70 + 5 => 75

// in base 2 (binary), how many different numbers can you represent given 1 digit only:
// 0, 1
// each binary is 1 bit, 8 bit = 1 byte
// 00 (dec) => 0000_0000 (bin)
// 01 (dec) => 0000_0001 (bin)
// 02 (dec) => 0000_0010 (bin)

// 03 (dec) => 0000_0011 (bin) => check by converting binary to decimal by expanded form:
// 0*2^3 + 0*2^2 + 1*2^1 + 1*2^0 (0 eights + 0 fours + 1 twos + 1 ones) => 0 + 0 + 2 + 1 => 3

// 04 (dec) => 0000_0100 => x*2^3 + x*2^2 + x*2^1 + x*2^0
// 0*2^3 + 1*2^2 + 0*2^1 + 0*2^0 = 0 + 4 + 0 + 0 = 4

// x^2 = x * x
// x^1 = (x * x) / x = x
// x^0 = x / x = 1, x does not equal 0

let x = 8; // bin: 0000_1000 => 1*2^3 + 0 + 0 + 0 => 8
// given 8 digits, how many numbers can I represent in binary? 2^8 = 256 different numbers
// with 8 bits/digits, I can represent the number 0 to 255, 0 -> 255
// RGB (red, blue, green light) has a range of 0 to 255 in intensity

// given 4 digits, => 2^4 => 16 different numbers => guess: 1111 => 8 + 4 + 2 + 1 => 15
// with 4 digits/bits, I can represent the number 0 to 15 (unsigned)
// with 4 digits/bits, I can represent the number -8 to 7 (signed)
// given x digits, -1*2^(x-1) to 1*2^(x-1)-1 (range of a signed number)

// 8 digits/bits (unsigned), 2^8 = 256 diff. numbers => 0-> 255
// 8 bits (signed), 2^8 = 256 diff., number range: -128 to 127

// 15 => 1111 unsigned
// 8 => 1000 unsigned
// 7 (given 8 bits) => 0000_0111
// 7 => 0111 => 7 signed => 1000 + 0001 => 1001 => -7
// -8 = -7 - 1 => 1001 - 0001 = 1000
// 6 => 0110 => 1001 + 0001 => 1010 = -6 | 1001 + 0001 = 1010 (-6) + 0001 = 1011 (-5)
// 5 => positive 0101 => (flip all digits & add 1) 1010 + 0001 = 1011 (-5)
// 4 => 0100 => 1011 + 0001 = 1100 | 1011 + 0001 => 1100
// -8 => -4
// 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111, 0000, 0001, 0010, ...

// signed / unsigned / two's complement

// dec => bin => hex

// compare values
// triple equal sign: compares type then compares value
console.log("7" === 7); // false - comparing string to number (diff type)
console.log(7 === 7); // true - comparing number type & number value

// double equal sign: convert type then compare value
console.log("7" == 7); // true - type conversion then compare value -> true
console.log(7 == 7); // true

// other primitives
console.log(0 === false); // false: diff type
console.log(0 == false); // true: type conversion and value comparion
