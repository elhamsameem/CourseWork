/*

Guided Practice - Dinner Party
You and your friends go out to eat for dinner at the new JavaScript Pub. You talk, laugh, and reminisce about the old days. As you are in the middle of talking about your high school prom, the waiter brings you the check. Unfortunately, the check is smeared with an array of sauces, making it unreadable. Instead of asking for a reprint, you decide to problem-solve and discover the total for yourself.

You ask your friends what they ate and you received the following information.

You ate a cheeseburger for $12.
Jonah had the $20 steak.
Amy's soup cost $8.
Mateo did not like his mac and cheese for $14.
Cheyenne was impressed by the unlimited soup and salad combo for $16.

Pseudocode:
//Declare an object named dinner
//there are two ways to find the sum of all purchased food prices
    //1- is to use a for in loop to store and add up the value of each key into a varialbe
    //2- is to to store all the object values into a variable which makes it an array then use a loop to store and add up all the values


*/

const dinner = {
    cheeseburger: 12,
    steak: 20,
    soup: 8,
    macAndCheese: 14,
    ultimateSoupAndSaladCombo: 16,
};

// Solution 1
let totalPrice1 = 0;
for (const key in dinner) {
    totalPrice1 += dinner[key];
}
console.log("Solution 1 using for in loop");
console.log(`Total: ${totalPrice1}`);

//Solution 2
const pricesOfPurchasedFood = Object.values(dinner);
let totalPrice2 = 0;

for (let i = 0; i < pricesOfPurchasedFood.length; i++) {
    totalPrice2 += pricesOfPurchasedFood[i];
}

console.log("Solution 2 using array");
console.log(`Total: ${totalPrice2}`);

