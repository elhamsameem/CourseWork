/*

******************* Block17 Workshop: Coffe Menu *******************

Project Requirements/Pseudocode

1. Clean the coffee_data.js file.
    All prices should be numbers.
    All items should be strings.
    Objects and properties should have commas separating them.
    Connect the coffee_data.js file to the index.js file.
2. Return an array of all the drinks on the menu.
3. Return an array of drinks that cost 5 and under.
4. Return an array of drinks that are priced at an even number.
5. Return the total if you were to order one of every drink.
6. Return an array with all the drinks that are seasonal.
7. Return all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

Finished? Submit your coffee_data.js file AND your index.js file for this workshop.
*/

console.log(
  "\n\n\n******************* Block17 Workshop: Coffe Menu ******************* \n\n\n\n"
);


//Connect the coffee_data.js file to the index.js file.
const coffeeMenu = require("./coffee_data");

//print the coffe menu
console.log("The Coffe Menu: ");
console.table(coffeeMenu);
console.log("\n\n"); //add two line


//2. Return an array of all the drinks on the menu.
const allDrinks = coffeeMenu.map(item => item.name);

console.log("Return an array of all the drinks on the menu:");
console.table(allDrinks);
console.log("\n\n"); //add two line


//3. Return an array of drinks that cost 5 and under.
const drinksFiveAndUnder = coffeeMenu.filter(item => item.price <= 5);

console.log("Return an array of drinks that cost 5 and under: ");
console.table(drinksFiveAndUnder);
console.log("\n\n"); //add two line


//4. Return an array of drinks that are priced at an even number.
const evenPricedDrinks = coffeeMenu.filter(item => item.price % 2 === 0);

console.log("Return an array of drinks that are priced at an even number: ");
console.table(evenPricedDrinks);
console.log("\n\n"); //add two line


//5. Return the total if you were to order one of every drink.
const total = coffeeMenu.reduce(function (accumulator, item) {
  accumulator += item.price;

  return accumulator;
}, 0);

console.log("Return the total if you were to order one of every drink: ");
console.log(`Total: ${total}`);
console.log("\n\n"); //add two line


//6. Return an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter(item => item.seasonal);

console.log("Return an array with all the drinks that are seasonal: ");
console.table(seasonalDrinks);
console.log("\n\n"); //add two line


//7. Return all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const seasonalDrinksWithBeans = seasonalDrinks.map(item => item.name += " with imported beans");

console.log(`Return all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans"`);
console.table(seasonalDrinksWithBeans);





