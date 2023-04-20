// /*
//     Pseudocode:
//     - Make a Block07 folder for this project
//     - Make a .html file to add visuals and run the code and make a .js file to write the functuality part of the code such as arithmetics and popups
//     - In .html file give a name to the title inside the <head> tag
//     - In .html file create a section inside the main seciton to add the input tags for user and button tag
//     - In .html file in the button tag use onclick attribute to call a function from .js file. 
//     - The .js file must have two alert messages. In .js file, create the first alert (popup) message for the user when the html file is opened.
//     - In .js file, create three variables and use arithmetic operations to assign values to them. The values should represent the lock combination. 
//     - In .js file, create the second alert popup message for user providing the combination for the vault with a message
//     - Declare a funtion to get values from .html page and checks for the combination using if else statement. 
// */


// // Creating a string variable to store the message inside it
// let popup = "You have received this message because you have been chosen to open an important vault. Click 'OK' to continue";

// // // First alert message for the user
// alert(popup);

// // first variable, must be 10
// let num1 = 47 - 37; 

// // Second variable, must be 40
// let num2 = 8 * 5;

// // third varialbe, must be 39
// let num3 = 2457 / 63;

// // second alert message for the user providing the vault combination
// alert("Here is the secret combination: " + num1 +" - "+ num2 +" - "+ num3 + "\nDon't forget to write it down");

// // Function to get values from html page and check the combination to open the vault
// function combvalidation()
// {
//     // getting values from html page
//     let c1 = document.getElementById("a").value;
//     let c2 = document.getElementById("b").value;
//     let c3 = document.getElementById("c").value;

//     // using if condition to compare vault combination
//     if (num1 == c1 && num2 == c2 && num3 == c3) 
//     {
//         alert("Vault Opened!");
//     } 
//     else 
//     {
//         alert("You failed to open the vault! \nThe combination does not match");
//     }
// }