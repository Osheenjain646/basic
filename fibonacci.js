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
