/* 
 ********** Block21 Workshop **********

 Car Factory:

Overview:
The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, and selling of motor vehicles.
There is a world of choice in today's car market, what with more than 400 different models available.
In this workshop, you will be tasked with coding a virtual assembly line to create some different types of vehicles with as many as the same parts as you possibly can.

Project Requirements:

1. Create file index.js to work in.

2. Write code that defines a constructor function called "Car" that creates a new object with the following properties: make, model, and year.

3. Add a method called getDescription to the Car prototype, which returns a string containing information about the car.

4. Define the ElectricCar function as a subclass of Car. Include an additional property called range that represents the range of the electric car in miles.

5. Have the ElectricCar prototype override the getDescription method of the Car prototype with a new implementation that includes information about the range of the electric car.

6. Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription method is called on the instance. The output will be a string containing the make, model, year, and range of the electric car.


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
        const description = `Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\n`;    // the "\n" will add a new line
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
        return `${super.getDescription()}Range: ${this.range}`;
    }

}

//Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription method is called on the instance. The output will be a string containing the make, model, year, and range of the electric car.
const teslaModelS = new ElectricCar("Tesla", "S", 2019, "300 Miles");

console.log(teslaModelS.getDescription());
/* 
    Output: 
            Make: Tesla
            Model: S
            Year: 2019
            Range: 300 Miles
*/


