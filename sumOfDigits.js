// Sum of Digits in a Number
// Calculates the sum of all digits in a given number

function sumOfDigits(number) {
    // Handle negative numbers by taking absolute value
    let num = Math.abs(number);
    
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Example usage
let number = 12345;
console.log(`Sum of digits in ${number}: ${sumOfDigits(number)}`);

number = 98765;
console.log(`Sum of digits in ${number}: ${sumOfDigits(number)}`);
