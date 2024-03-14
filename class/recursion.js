// recursion is when a function calls itself

// fib(0): 0
// fib(1): 1
// fib(2): 1
// fib(3): 2
// fib(4): 3

// fib seq: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// fib(n) = fib(n-1) + fib(n-2)

// O(2^N)
function fib(n) {
	// define ending condition
	if (n === 0) return 0;
	if (n === 1) return 1;

	return fib(n - 1) + fib(n - 2);
}
// fib10 = fib9 + fib8
// fib10 = fib8 + fib7 + fib7 + fib6
// fib10 = fib7 + fib6 + fib6 + fib5 + fib6 + fib5 + fib5 + fib4

// console.log(fib(10));

function fibIter(n) {
	const fib = [0, 1];

	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2]; // fib[2] = fib[1] + fib[0]
		// fib[3] = fib[2] + fib[1]
	}

	return fib[n];
}

// console.log(fibIter(10));

// fib5 = fib4 + fib3
