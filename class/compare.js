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
// with 4 digits/bits, I can represent the number 0 to 15

// signed / unsigned / two's complement
