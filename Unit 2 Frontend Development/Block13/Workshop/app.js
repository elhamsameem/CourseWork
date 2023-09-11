/*



                Block13 Workshops
            Please find all 4 workshops below with their pseudocode. 






Workshop 1

Is Truthy

Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

If the value is truthy, print true;
If the value is falsy, print the corresponding result:
"The boolean value false is falsy";
"The null value is falsy";
"undefined is falsy";
"The number 0 is falsy (the only falsy number)";
"The empty string is falsy (the only falsy string)";


Pseudocode:

- In the HTML file create a script tag that contains the following code:
- Make a if/else condition
- If the value is truthy, print true;
- If the value is falsy, print the corresponding result:
- "The boolean value false is falsy";
- "The null value is falsy";
- "undefined is falsy";
- "The number 0 is falsy (the only falsy number)";
- "The empty string is falsy (the only falsy string)";

*/

let value; //replace with any value to test

if (value === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
}
else if (value === "") {
    console.log("The empty string is falsy (the only falsy string)");
}
else if (value === false) {
    console.log("The boolean value false is falsy");
}
else if (value === null) {
    console.log("The null value is falsy");
}
else if (value === undefined) {
    console.log("undefined is falsy");
}
else {
    console.log(true);
}





/* -------------------------------------------------------------------------------

Workshop 2

Number Line

Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
sum + " is larger than 0";
sum + " is greater than 100";

Pseudocode:
- Declare two input variables and one variable to store the sum of both inputs
- Use conditional statements to print out the following comapring the sum of both inputs. 
- If sum is less than -1000 
- if sum is negative number
- if sum is 0
- if sum is greater than 0
- if sum is greater than 100

*/

//declaration of variables
let num1, num2, sum;

//Vaeriable initialization step, replace with any value to test.
num1 = 0;
num2 = 0;

sum = num1 + num2;

if (sum < 0) {
    console.log(sum + " is a negative number");
    if (sum < -1000) {
        console.log(sum + " is less than -1000");
    }
}
else if (sum > 0) {
    console.log(sum + " is greater than 0");
    if (sum > 100) {
        console.log(sum + " is greater than 100");
    }
} else {
    console.log(sum + " is equal to 0");
}






/* -------------------------------------------------------------------------------


Workshop 3

Greater Than Or Equal To 5

Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.



Pseudocode:

- declare two variables
- Use && conditional statement
- if both of the varialbes are equal or greater than 5, print true
- else, false

*/


//Variable declaration
let n1, n2;

//Variable initialization
n1 = 5;
n2 = 5;

//condition  ?  expression1 : expression 2
console.log((n1 && n2) >= 5 ? "True" : "False");






/* -------------------------------------------------------------------------------

Workshop 4

Pair and Compare

Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.


Pseudocode:

- declare four variables
- using || conditional statements, compare the value of the first pair of variables 
- then compare the second pair of varialbes 
- then compare the result of both sets, if one side of the pairs is truthy, print true. 

*/

//Delcaring variables
let a1, a2, b1, b2;

//Initialization of first pair of variables. replace with any value to test. 
a1 = 0;
a2 = false;

//Initialization of second pair of variables. 
b1 = "hourse";
b2 = "hourse";

if (a1 === a2 || b1 === b2) {
    console.log("True");
} else {
    console.log("False");
}
