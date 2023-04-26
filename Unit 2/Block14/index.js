/* 



Block14 Workshop

----------------------------------------------------------------------------------------------------------------------------


*/

//for styling
console.log("");
console.log("********** Block14 Workshops **********");
console.log("");
console.log("");




/*

Only Odds

Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from the original array. 
If there is only one odd number in the array, return an array with that single value.


Pseudocode:
- Create a function that uses the inputs from original input array and check to find odd numbers and then stores the odd number in another array
- Create an array that stores all the odd numbers from original array
- Create a for loop to loop through each index of the original array
- Create a condition for modulo to check for odd numbers
- If the number is odd then store the value to another array
- console.log the output of the odd numbers array
*/


console.log("-- Only Odds-- ");
console.log("");


function checkOddNumbers(inputs) {
  const oddNumbers = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] % 2 !== 0) {
      oddNumbers.push(inputs[i]);
    }
  }

  console.log(oddNumbers);
}

checkOddNumbers([2, 4, 6, 8, 11, 20, 15, 22]);
checkOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
checkOddNumbers([70, 42, 55, 81, 21, 91, 34]);
checkOddNumbers([2, 4, 6, 8, 10, 11, 12]);


//styling
console.log("");
console.log("----------------------------------------------------------------------------------");
console.log("");
console.log("");



/*

--------------------------------------------------------------------------------------------------------------------------------


Vowel versus Consonant

Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.
"a", "e", "i", "o", and "u" are considered vowels. 
Every other letter is considered a consonant.
Hint: Define two variables that keep track of the number of consonants and vowels.

Pseudocode:
// Create a function that checkes for vowels in a string
// Inside the function, create two variables to stroe the vowels and consonants count
// Inside the function, make a loop that loops for each index of the string
// In the loop make a condition that if the string has vowels then increase the vowels count 
// Else, increase the consonants count
*/

console.log("-- Vowel VS Consonant-- ");
console.log("");


function checkVowelsAndConsonants(string) {
  let vowels = 0;
  let consonants = 0;

  for (i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
      vowels++;
    } else {
      consonants++;
    }
  }

  console.log(`"${string}" has ${consonants} Consonants and ${vowels} Vowels.`);

}

checkVowelsAndConsonants("Hello");
checkVowelsAndConsonants("ukelele");
checkVowelsAndConsonants("awesome");
checkVowelsAndConsonants("onomonopia");
checkVowelsAndConsonants("textbook");


//styling
console.log("");
console.log("----------------------------------------------------------------------------------");
console.log("");
console.log("");



/*
--------------------------------------------------------------------------------------------------------------------------------


Reverse Array

With a for loop, create a JavaScript code that creates a new array in reverse order.


Pseudocode:
// Create a function that take an array
// Create an array to store the revers value of original array
// Create a "for loop" to loop through each indix of the original array
// push each index of the original array to the reverse array using .push() method
// Console.log the reverse array

*/


console.log("-- Reverse Array -- ");
console.log("");


function reverse(arr) {
  const reverseArr = [];
  for (let i = 0; i < arr.length; i++) {
    reverseArr.unshift(arr[i]);
  }
  console.log(reverseArr);
}

reverse([1, 2, 3]);
reverse([1, 3, 5, 7, 9, 11]);
reverse([20, 50, 30, 60, 200]);
reverse([1, -1, 2, -3, 5, -8, 13]); // will not show in a single line due to console width




//styling
console.log("");
console.log("----------------------------------------------------------------------------------");
console.log("");
console.log("");


/*
--------------------------------------------------------------------------------------------------------------------------------


FizzBuzz

Create a JavaScript code that prints each number from 1 to 100 on a new line.
For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


Pseudocode:
// Create a "for loop" to start printing from 1 to 100
// If the number is divided by 3 and 5 and the remainder is 0, print FizzBuzz instead of the number
// if the number is devided by 3 and remainder is 0, print Fizz
// if the number is divided by 5 and remainder is 0, print Buzz
// Else, print the number. 
*/


console.log("-- FizzBuzz -- ");
console.log("");


for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


console.log("");
console.log("----------------------------------------------------------------------------------");
console.log("");
console.log("");
