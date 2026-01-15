// Function 1: calculateTax
function calculateTax(amount){
    taxValue = amount * 0.10;
    return taxValue;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    word = text.toUpperCase();
    return word;
}

//Function 3: findMaximum
function findMaximum(num1, num2) {
    if(num1> num2){
        return num1;
    } else {
        return num2;
    }
}

//Function 4: isPalindrome
function isPalindrome(word){
    const reversed = word.split(''). reverse().join('');
    return word === reversed;
}

//Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountpercentage){
    return originalPrice - (originalPrice * discountpercentage/100);
}


 // This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

calculateTax(1000)
console.log(taxValue)