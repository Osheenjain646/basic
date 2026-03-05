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
