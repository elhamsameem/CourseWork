/* 
Guided Practice

Example 1:
Use if/else statements to create a JavaScript file that checks if a given value is even or odd. Complete the following steps:

Pseudocode the solution, writing your logic down in the IDE.
Turn your pseudocode into JavaScript logic.
Make checks with console.log.
Test with VS Code’s debugger.
Test with the browser debugger.
Write your solution in an alternative manner (ternary or single line if/else statements). 



Pseudocode: 

- Take an number as input
- Check if the number is divisible by 2
- if the number is divisible by 2, it is even
- if the number is not divisible by 2, it is odd
- Output the result in console
*/


const number = 5;

console.log(number % 2 === 0 ? `${number} is Even` : `${number} is Odd`);
