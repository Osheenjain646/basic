# Sum of Digits in a Number

## Code

```javascript
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
```

## Approach

This program calculates the sum of all digits in a given integer number using the modulo and division operations.

### Algorithm

1. **Handle Negative Numbers**: Use `Math.abs()` to convert any negative number to its positive equivalent.

2. **Initialize Variables**:
   - `sum` to store the running total (initially 0)
   - `num` as a working copy of the number

3. **Iterative Digit Extraction**:
   - Use a while loop that continues until all digits are processed (when `num` becomes 0)
   - Extract the last digit using `num % 10`
   - Add the extracted digit to `sum`
   - Remove the last digit using `Math.floor(num / 10)`

4. **Return the Result**: Return the calculated sum

### How It Works

The algorithm repeatedly:
- Gets the last digit: `num % 10` (e.g., 12345 % 10 = 5)
- Adds it to sum
- Removes the last digit: `Math.floor(num / 10)` (e.g., Math.floor(12345 / 10) = 1234)

This process continues until all digits are processed:
- 12345 → 5 (sum = 5)
- 1234 → 4 (sum = 9)
- 123 → 3 (sum = 12)
- 12 → 2 (sum = 14)
- 1 → 1 (sum = 15)

### Time Complexity
- **O(d)**: Where d is the number of digits in the input number.

### Space Complexity
- **O(1)**: Only a constant amount of extra space is used.

### Example Output
```
Sum of digits in 12345: 15
Sum of digits in 98765: 35
```

