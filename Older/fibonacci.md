# Fibonacci Series

## Code

```javascript
// Fibonacci Series
// Generates a Fibonacci series up to n terms

function fibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    }
    
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

let terms = 10;
console.log(`Fibonacci series with ${terms} terms:`);
console.log(fibonacci(terms));

console.log("\nPrinting each term:");
let fibSeries = fibonacci(terms);
fibSeries.forEach((num, index) => {
    console.log(`Term ${index + 1}: ${num}`);
});
```

## Approach

The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

### Algorithm

1. **Handle Edge Cases**:
   - If `n <= 0`, return an empty array
   - If `n === 1`, return `[0]` (the first term)

2. **Initialize the Series**: Start with the first two Fibonacci numbers: `[0, 1]`

3. **Iterative Calculation**:
   - Loop from index 2 to `n-1`
   - Each term is the sum of the two previous terms: `fib[i] = fib[i-1] + fib[i-2]`
   - Continue until the desired number of terms is generated

4. **Return the Series**: Return the complete Fibonacci array

### Time Complexity
- **O(n)**: The loop runs `n-2` times to generate the series.

### Space Complexity
- **O(n)**: An array of size `n` is used to store the Fibonacci series.

### Example Output
```
Fibonacci series with 10 terms:
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

Printing each term:
Term 1: 0
Term 2: 1
Term 3: 1
Term 4: 2
Term 5: 3
Term 6: 5
Term 7: 8
Term 8: 13
Term 9: 21
Term 10: 34
```

