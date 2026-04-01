# Palindrome Check

## Code

```javascript
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
```

## Approach

A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring case, punctuation, and spaces).

### Algorithm

1. **Convert to String**: Convert the input (whether string or number) to a string for uniform processing.

2. **Process String Input**:
   - Convert to lowercase for case-insensitive comparison
   - Remove all non-alphanumeric characters using regex `/[^a-z0-9]/g`
   - This handles phrases like "A man a plan a canal Panama"

3. **Reverse the String**:
   - Split the string into an array of characters
   - Reverse the array
   - Join the array back into a string

4. **Compare**: Check if the processed string equals its reversed version

### Time Complexity
- **O(n)**: Where n is the length of the string. We process each character once.

### Space Complexity
- **O(n)**: We create additional arrays/strings for splitting, reversing, and joining.

### Example Output
```
Is "racecar" a palindrome? true
Is "hello" a palindrome? false
Is "A man a plan a canal Panama" a palindrome? true
Is 121 a palindrome? true
Is 12345 a palindrome? false
Is 12321 a palindrome? true
```

