# Triangle Pattern

## Code

```javascript
// Triangle Pattern
// Prints various triangle patterns

function starTriangle(rows) {
    console.log("\nPattern 2: Right-angled triangle with stars");
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern);
    }
}

starTriangle(5);
```

## Approach

This program prints a right-angled triangle pattern using stars. The number of rows determines the height of the triangle.

### Algorithm

1. **Outer Loop (rows)**: 
   - Loop from 1 to `rows` (inclusive)
   - Each iteration represents one row of the triangle

2. **Inner Loop (columns)**:
   - For each row `i`, loop from 1 to `i` (inclusive)
   - Each iteration adds a star to the pattern string

3. **Build and Print**:
   - Create an empty string `pattern` for each row
   - Append "* " for each column in that row
   - Print the completed pattern

### How It Works

For `rows = 5`:

- Row 1: i = 1 → j runs 1 time → "* "
- Row 2: i = 2 → j runs 2 times → "* * "
- Row 3: i = 3 → j runs 3 times → "* * * "
- Row 4: i = 4 → j runs 4 times → "* * * * "
- Row 5: i = 5 → j runs 5 times → "* * * * * "

### Time Complexity
- **O(n²)**: The outer loop runs n times, and the inner loop runs a total of 1+2+3+...+n = n(n+1)/2 times.

### Space Complexity
- **O(n)**: The pattern string grows with each row, requiring O(n) space for the longest row.

### Example Output
```
Pattern 2: Right-angled triangle with stars
* 
* * 
* * * 
* * * * 
* * * * * 
```

