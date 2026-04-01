# Factorial

## Code

```javascript
// Factorial
// Calculates the factorial of a number

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log("\nFactorials from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(`${i}! = ${factorial(i)}`);
}
```

## Approach

The factorial of a non-negative integer `n` (denoted as `n!`) is the product of all positive integers less than or equal to `n`.

### Algorithm

1. **Handle Negative Numbers**: Check if the input is negative. If so, return an error message since factorial is not defined for negative numbers.

2. **Base Cases**: If `n` is 0 or 1, return 1 (by definition, 0! = 1 and 1! = 1).

3. **Iterative Calculation**: 
   - Initialize a variable `fact` to 1
   - Loop from 2 to n (inclusive)
   - Multiply each number with `fact`
   - Return the final result

### Time Complexity
- **O(n)**: The loop runs `n-1` times, making the time complexity linear.

### Space Complexity
- **O(1)**: Only a constant amount of extra space is used.

### Example Output
```
Factorials from 1 to 10:
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720
7! = 5040
8! = 40320
9! = 362880
10! = 3628800
```

