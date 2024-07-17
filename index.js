//  Leap year checker 

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
let year = 2024;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}


// Ticket pricing

function calculateTicketPrice(age) {
    let ticketPrice;

    if (age <= 12) {
        ticketPrice = 10;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = 15;
    } else {
        ticketPrice = 20;
    }

    return ticketPrice;
}

// Example usage:
let age = 15;
let price = calculateTicketPrice(age);
console.log(`The ticket price for a ${age}-year-old is: $${price}`);


// Fibonacci Sequence

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
let n = 6;  // Generate the 6th Fibonacci number (0-indexed)
console.log(`The ${n+1}th Fibonacci number is: ${fibonacci(n)}`);

//Palindrome checker

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Base case: if length is 0 or 1, it's a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Check first and last characters
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursively check substring without first and last characters
    return isPalindrome(str.slice(1, -1));
}

// Example usage:
let testStr = "A man, a plan, a canal, Panama!";
console.log(`Is "${testStr}" a palindrome? ${isPalindrome(testStr)}`); // Output: true

