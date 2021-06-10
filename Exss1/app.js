// Bai 1. Write a script to ask user about their name, and then say hi to them, say something nice to them if you want

let userInput = prompt("Hi threre, your name please?");
console.log("Hi" + userInput);

// Bai 2. Write a script that ask 2 things from users, their first name and last name, then greet them with their full name

let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
console.log("Hi ${firstName} ${lastName}");

// Bai 3. Write a script that calculates the area of a square

let length = prompt("Enter side length of the square?");
let squareArea = length**2;
console.log("The square area is" + squareArea);

// Bai 4. Write a script that calculates the area of a circle

let radius = prompt("Enter the radius of the circle");
let circleArea = 2*3.14*radius;
console.log("The circle area is" + circleArea);

// Bai 5. Write a script that converts Celsius (0C) into Fahrenheit (0F)

let Celsius = prompt("Enter the temperature in Celsius");
let cToF = Celius*9/5+32;
console.log(Celsius + "(C) =" + cToF + "(F)");

https://drive.google.com/drive/folders/1iavyyvPaPsDCANevjhYEa1duyvdfaPM2