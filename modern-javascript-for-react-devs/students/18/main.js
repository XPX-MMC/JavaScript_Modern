//
// File: main.js
// Date: 5/09/2023
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
	// TODO...-xg-ex1
};

// Call your exercise Functions here------------------------------------

const main = async () => {
	ex1();
	ex2();
};

main();
