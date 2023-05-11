//
// File: main.js
// Date: 5/11/2023
//

const ex1 = () => {
	const countNumbers = (array) => {
		let numCounter = 0;

		for (let i = 0; i < array.length; i++) {
			if (typeof array[i] == 'number') {
				numCounter++;
			}
		}
		return numCounter;
	};

	const testCaseArray = [1, '2', 3, 'test', 1.2];

	console.log(countNumbers(testCaseArray));
};

const ex2 = () => {
	const minNumber = (array) => {
		let min = array[0];
		array.forEach((element) => {
			if (min > element) {
				min = element;
			}
		});
		console.log(min);
	};

	const array = [12, 55, 2, 22, 11];
	minNumber(array);
};

const ex3 = () => {
	const interleave = (a1, a2) => {
		let interArray = [];

		if (a1.length != a2.length) {
			console.log('ERROR: Array length mismatch');
		} else {
			for (let i = 0; i < a1.length; i++) {
				interArray.push(a1[i], a2[i]);
			}
			console.log(interArray.join(''));
		}
	};

	// Test Case 1
	// const array1 = [1, 2];
	// const array2 = ['a', 'b', 'c', 'd', 'e'];

	// Test Case 2
	const array1 = [1, 2, 3, 4, 5];
	const array2 = ['a', 'b', 'c', 'd', 'e'];
	//const array2 = [4, 5, 6, 7, 8];

	interleave(array1, array2);
};

const ex4 = () => {
	const palindrome = (str) => {
		// convert the str param into an array
		let workingArr = [...str];

		// setting default result to be true
		let result = true;

		// Iterating over the workingArr, checking it it is not odd, and comparing each item woth its key pair
		for (let i = 0; i < workingArr.length / 2; i++) {
			if (workingArr[i] !== workingArr[workingArr.length - i - 1]) {
				result = false;
			}
		}

		console.log(result);
	};

	// Test Case 1
	// const string = 'radar';

	// Test Case 2
	const string = 'month';

	palindrome(string);
};

const ex5 = () => {
	const countRepeats = (str) => {
		let strArr = str.split(' ')
		let testWord = 'this'
		let counter = 0;

		strArr.forEach(element => {
			if (element == testWord){
				counter++;
			}
		});

		console.log(testWord + ' appears: ' + counter + ' times');
	};

	countRepeats('today this is a this is a this is a test.');
};

// Call your exercise Functions here------------------------------------

const main = async () => {
	ex1();
	ex2();
	ex3();
	ex4();
	ex5();
};

main();
