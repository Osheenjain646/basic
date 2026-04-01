// numbers from 1 to 10
for (let i=1; i<=10; i++){
    console.log(i);   
}

// numbers from 1 to n
let n =46;
for(let i=1; i<=n; i++){
    console.log(i);
}

// print even numbers 
console.log("Even");

for(let i=1; i<=n; i++){
    if(i%2===0){
        console.log(i);
    }
}

// print odd numbers 
console.log("Odd");

for(let i=1; i<=n; i++){
    if(i%2!==0){
        console.log(i);
    }
}

// print the factorial of the number 
function factorial(n){
    let fact=1;
    for(let i=1; i<=n; i++){
        fact*=i;
    }
    return fact
}

console.log(factorial(10));


// reverse the number 
let m=56531;
let ans =0;
while(m>0){
    ans = ans*10 + m%10;
    m=Math.floor(m/10);
}

console.log(ans);


// multiplication table 
let number = 8;
for(let i=1; i<=10; i++){
    console.log(number*i);
}


// fibonacci 

function fibonacci(n){
    if(n <= 0) {
        return [];
    } else if(n === 1) {
        return [0];
    }
    
    let fib = [0, 1];
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}


let terms = 20;
console.log("Fibonacci series with " + terms + " terms as follows:");
console.log(fibonacci(terms));



