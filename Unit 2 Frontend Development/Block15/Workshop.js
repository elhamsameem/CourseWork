/*

     **************** Block15 Workshop: Froyo Survey ****************
    
*/

//Create an object named "customer"
const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
};

console.log(customer);
console.table(customer);


//Jake made mistake filling out survey to bring changes to the folloiwng
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

console.table(customer);

//Delete the following properties in the customer object using the delete keyword.
delete customer.zipCode;
delete customer.favoriteStore;

console.table(customer);

//Add the following key:values to the customer object using dot notation:
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.table(customer);

//In an array, print the keys in your survey. 
const customerArray = Object.keys(customer);

console.log(customerArray);
console.table(customerArray);