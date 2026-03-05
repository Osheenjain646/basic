// Palindrome Check
// Checks if a string or number is a palindrome

function isPalindrome(input) {
    let str = input.toString();
    
    if (typeof input === 'string') {
        str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    }
    
    let reversed = str.split('').reverse().join('');
    
    return str === reversed;
}

// String 
let word1 = "racecar";
console.log(`Is "${word1}" a palindrome? ${isPalindrome(word1)}`);

let word2 = "hello";
console.log(`Is "${word2}" a palindrome? ${isPalindrome(word2)}`);

let word3 = "A man a plan a canal Panama";
console.log(`Is "${word3}" a palindrome? ${isPalindrome(word3)}`);

// Number 
let num1 = 121;
console.log(`Is ${num1} a palindrome? ${isPalindrome(num1)}`);

let num2 = 12345;
console.log(`Is ${num2} a palindrome? ${isPalindrome(num2)}`);

let num3 = 12321;
console.log(`Is ${num3} a palindrome? ${isPalindrome(num3)}`);
