const sumOfAllNumbers = function(...num) {
	return num.reduce(function(prev, current) {
		return prev + current;
	});
};

const sumOfAllOtherNumbers = function(num1, num2, num3) {
	return num1 + num2 + num3;
};

const numbers = [1, 2, 3];

console.log(sumOfAllOtherNumbers(...numbers));
console.log(sumOfAllNumbers(1, 2, 3, 4, 5, 6, 7, 894, 6484, 6484, 64664, 6488));

/* document.addEventListener('DOMContentLoaded', event => {
	console.log('DOM fully loaded and parsed');
	sumOfAllNumbers(1, 2, 3, 4, 5, 6, 7, 894, 6484, 6484, 64664, 6488);
	sumOfAllOtherNumbers(1, 2, 3, 4, 98, 64, 56, 997, 56455);
}); */
