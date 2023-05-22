/* 
 ********** Block21 Workshop **********

 Car Factory:

Overview:
The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, and selling of motor vehicles.
There is a world of choice in today's car market, what with more than 400 different models available.
In this workshop, you will be tasked with coding a virtual assembly line to create some different types of vehicles with as many as the same parts as you possibly can.

Project Requirements:

Create file index.js to work in.

Write code that defines a constructor function called Car that creates a new object with the following properties: make, model, and year.

Add a method called getDescription to the Car prototype, which returns a string containing information about the car.

Define the ElectricCar function as a subclass of Car. Include an additional property called range that represents the range of the electric car in miles.

Have the ElectricCar prototype override the getDescription method of the Car prototype with a new implementation that includes information about the range of the electric car.

Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription method is called on the instance. The output will be a string containing the make, model, year, and range of the electric car.


*/



//Write code that defines a constructor function called Car that creates a new object with the following properties: make, model, and year.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

    }

    //Add a method called getDescription to the Car prototype, which returns a string containing information about the car.
    getDescription() {
        const description = `${this.year} ${this.make} ${this.model}`;
        return description;
    }
}

//Define the ElectricCar function as a subclass of Car. Include an additional property called range that represents the range of the electric car in miles.
class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }

    //Have the ElectricCar prototype override the getDescription method of the Car prototype with a new implementation that includes information about the range of the electric car.
    getDescription() {
        return `${super.getDescription()} - Range: ${this.range}`;
    }

}

//Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription method is called on the instance. The output will be a string containing the make, model, year, and range of the electric car.
const car1 = new ElectricCar("Tesla", "Model S", 2019, "300 Miles");
console.log(car1.getDescription());


// const car1 = new car("vw", "jetta", 2021);
// console.log(car1.getDescription())


