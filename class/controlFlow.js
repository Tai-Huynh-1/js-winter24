function funcA(name) {
	const firstLetter = name.charAt(0); // name[0]

	if (firstLetter === "A") {
		console.log("name starts with letter A");
	} else if (firstLetter === "B") {
		console.log("name starts with letter B");
	} else if (firstLetter === "C") {
		console.log("name starts with letter B");
	} else {
		console.log("name starts with letter D-Z");
	}

	console.log("name check complete");
}

// funcA("Zebra");

function operator(num1, num2) {
	const num1IsEven = num1 % 2 === 0;
	const num2IsEven = num2 % 2 === 0;

	if (num1IsEven && num2 % 2 === 0) {
		// true && true => true
		console.log("both numbers are even");
	} else if (num1IsEven || num2IsEven) {
		// true || true => true (short circuit and skip right side calculation)
		// false || true => true
		// true || false => true (short circuit and skip right side calculation)
		// false || false => false
		console.log("at least one number is even");
	} else if (num1 > num2) {
		// > , < , >=, <=
		console.log("num1 greater than num2");
	}
}
