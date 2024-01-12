// Challenge 1
function recordMeals(breakfast, lunch, dinner) {
    return `breakfast: ${breakfast}, lunch: ${lunch}, dinner: ${dinner}`;
}

// Example usage:
const mealsString = recordMeals("pancakes", "blt", "steakandchips");
console.log(mealsString);

// Challenge 2 - do not quite under how the divisble aspect of these functions and how the calculation is made)
function fizzBuzz(num) {
    if (typeof num !== 'number' || num <= 0) {
        return 'needs to be a positive number';
    } else if (num % 3 === 0 && num % 5 === 0) {
        return 'fizz buzz';
    } else if (num % 3 === 0) {
        return 'fizz';
    } else if (num % 5 === 0) {
        return 'buzz';
    } else {
        return num;
    }
}

// Example usage:
console.log(fizzBuzz(9)); // Output: fizz
console.log(fizzBuzz(10)); // Output: buzz
console.log(fizzBuzz(15)); // Output: fizz buzz
console.log(fizzBuzz(-5)); // Output: needs to be a positive number
console.log(fizzBuzz("string")); // Output: needs to be a positive number

// Challenge 3
function processNumbers(num1, num2) {
    // Check if the parameters are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Make sure you enter 2 numbers.';
    }

    // Calculate the sum of the numbers
    const sum = num1 + num2;

    // Check if the sum is even
    if (sum % 2 === 0) {
        return sum; // Return the sum if it's even
    } else {
        return num1 * num2; // Return the product if the sum is not even
    }
}

// Example usage:
const result1 = processNumbers(3, 4); // Example of even sum (3 + 4 = 7)
console.log(result1); // Output: 21 (product of 3 and 7)

const result2 = processNumbers(5, 6); // Example of odd sum (5 + 6 = 11)
console.log(result2); // Output: 30 (product of 5 and 6)

const result3 = processNumbers('not a number', 8); // Example of non-numeric input
console.log(result3); // Output: 'Make sure you enter 2 numbers.'

// Challenge 4

function generateRandomNumbers() {
    const randomNumbers = [];

    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}

// Example usage:
const randomNumbersArray = generateRandomNumbers();
console.log(randomNumbersArray);

// Challenge 5
function countDownArray() {
    const resultArray = [];

    for (let i = 9; i >= 0; i--) {
        resultArray.push(i);
    }

    return resultArray;
}

// Example usage:
const countdownNumbers = countDownArray();
console.log(countdownNumbers); // Output: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
