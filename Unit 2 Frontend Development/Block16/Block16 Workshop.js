/*

 *************************** Block16 Workshop: Discount Chain ***************************

Overview:
You have been hired by a pharmaceutical startup as a junior developer. Things are busy and they need you to start right away. To encourage customer retention, they have been reworking their checkout system to include two different types of discounts.

Using the following criteria, your first assignment is to create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

Using what we know about functions, pseudocode the prompt and a solution with your partner.
HINT: Despite this prompt being one large question, it can be broken down into three smaller prompts. Break your pseudocode into three smaller prompts.
Each of these small prompts should be addressed as an individual function.
Remember, a function should only do one task.
The returns of these functions should be stored in a variable, allowing other functions to use the result.




Pseudocode: 
//Copy the direction code from the assignment page into the vscode
//Create a function named "totalCostPerRefill" that take an object and returns the total cost per refill. 
//Create a function named "addDiscount" that takes the totalCostPerRefill returned value stored in a variable and checks for the following discounts
    //If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
    //If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
    //At the end, the function will add the discount(s) on total cost per refill and return that value
//Create a function named "printFinalAmount" that takes an object and passes the object to the function above to run them and returns the grand total
    //Run the "addDiscount" and store the output in a variable
    //console print the grand total "(Object.name)'s grand total is ${grandTotal}."

*/


//Copy the direction code from the assignment page into the vscode
const timmy = {
    name: "Timmy",
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    name: "Sarah",
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};

const rocky = {
    name: "Rocky",
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};

//Create a function named "totalCostPerRefill" that take an object and returns the total cost per refill. 
const totalCostPerRefill = (object) => object.pricePerRefill * object.refills;

//Create a function named "addDiscount" that takes the totalCostPerRefill returned value stored in a variable and checks for the following discounts
function addDiscount(object) {
    let totalCost = totalCostPerRefill(object);

    //If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
    if (object.subscription === true) {
        totalCost -= totalCost * 0.25;
    }
    //If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
    if (object.coupon === true) {
        totalCost -= 10;
    }

    //At the end, the function will add the discount(s) on total cost per refill and return that value
    return totalCost;
}

//Create a function named "printFinalAmount" that takes an object and passes the object to the function above to run them and returns the grand total
function printFinalAmount(object) {

    //Run the "addDiscount" and store the output in a variable
    let grandTotal = addDiscount(object);

    //print the grand total and adds a new line
    console.log(`${object.name}'s Grand Total is: ${grandTotal}\n`);
}

//Styling purposes for console output
console.log(""); //adds a new line
console.log("- Block16 Workshop: Discount Chain -\n"); //output: - Block16 Workshop: Discount Chain -

//invoking the printFinalAmount function to run all the functions and prints the grand total including discounts. 
printFinalAmount(timmy); //output: Timmy's Grand Total is: 57.5
printFinalAmount(sarah); //output: Sarah's Grand Total is: 37.5
printFinalAmount(rocky); //output: Rocky's Grand Total is: 112.5

