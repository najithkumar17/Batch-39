//Task 1
// 1. Create three variables
//var studentName = "Ajithkumar";
//let studentAge = 30;
//const collegeName = "Periyar Maniammai College";

// Print all three values
//console.log("Student Name:", studentName);
//console.log("Student Age:", studentAge);
//console.log("College Name:", collegeName);

// 2. Change the var value
//studentName = "Kumar";
//console.log("Changed Student Name:", studentName);

// 3. Change the let value
//studentAge = 28;
//console.log("Changed Student Age:", studentAge);

// 4. Try changing the const value
//collegeName = "XYZ College";
//Error: Assignment to constant variable.

// 5. Try redeclaring the var variable
//var studentName = "Arun";
//console.log("Redeclared Student Name:", studentName);

// 6. Try redeclaring the let variable
// let studentAge = 30;
// Error: Identifier 'studentAge' has already been declared.

//TASK 2  user information
//let name = prompt("Enter your name:");
//let age = prompt("Enter your age:");
//let city = prompt("Enter your city:");

// Print information in the console
//console.log("Name:", name);
//console.log("Age:", age);
//console.log("City:", city);

// Task 3 welcome Message
 //let userName = prompt("Enter your name:");
//alert("Welcome " + userName + "!");

// Task 4 Age Calculator
//let birthYear = prompt("Enter your birth year:");
//let currentYear = 2026;
//let age = currentYear - birthYear;
//console.log("Birth Year:", birthYear);
//console.log("Age:", age);

// Task 5 Identify Data Types
//let text = "Hello";
//let number = 100;
//let decimal = 25.5;
//let trueValue = true;
//let falseValue = false;
//let undefinedValue;
//let nullValue = null;

//console.log("Hello:", typeof text);
//console.log("100:", typeof number);
//console.log("25.5:", typeof decimal);
//console.log("true:", typeof trueValue);
//console.log("false:", typeof falseValue);
//console.log("undefined:", typeof undefinedValue);
//console.log("null:", typeof nullValue);

// Task 6 Student Data
//let student = {
   // Name: "Ajithkumar",
   // Age: 30,
   // city: "Thanjavur",
   // Qualification: "B.Tech Mechanical Engineering",
    //IsStudent: true};

//console.log("Complete Object:", student);
//console.log("Name:", student.Name);
//console.log("Age:", student.Age);
//console.log("Qualification:", student.Qualification);
//console.log("Is Student:", student.IsStudent);

// Task 7 Fruit Array
//let fruits = ["Apple","Mango","Orange","Banana","Grapes","Papaya"];
//console.log("First Fruit:", fruits[0]);
//console.log("Second Fruit:", fruits[1]);
//console.log("Last Fruit:", fruits[fruits.length - 1]);
//console.log("Total Fruits:", fruits.length);

// Task 8 Basic Calculator
// let a = 20;
// let b = 5;
// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.log("Exponentiation:", a ** b);

// Task 9 Shopping Bill
// let shirt = 999;
// let pant = 1499;
// let shoes = 1999;
// let totalPrice = shirt + pant + shoes;
// console.log("Total:", totalPrice);

// Task 10 Simple Marks Calculation
// let tamil = 80;
// let english = 75;
// let maths = 90;
// let totalMarks = tamil + english + maths;
// let averageMarks = totalMarks / 3;
// console.log("Total Marks:", totalMarks);
// console.log("Average Marks:", averageMarks);

// Task 11 Post Increment
// let postIncrementA = 10;
// let postIncrementB = postIncrementA++;
// console.log("Task 11 - a:", postIncrementA);
// console.log("Task 11 - b:", postIncrementB);

// Task 12 Pre Increment
// let preIncrementA = 10;
// let preIncrementB = ++preIncrementA;
// console.log("Task 12 - a:", preIncrementA);
// console.log("Task 12 - b:", preIncrementB);

// Task 13 Post Decrement
//let postDecrementA = 20;
//let postDecrementB = postDecrementA--;
//console.log("Task 13 - a:", postDecrementA);
//console.log("Task 13 - b:", postDecrementB);

// Task 14 Pre Decrement
//let preDecrementA = 20;
//let preDecrementB = --preDecrementA;
//console.log("Task 14 - a:", preDecrementA);
//console.log("Task 14 - b:", preDecrementB);

// Task 15 Find the Final Values
//let a = 5;
//let b = a++;
//let c = ++a;
//let d = b--;
//console.log("Task 15 - a:", a);
//console.log("Task 15 - b:", b);
//console.log("Task 15 - c:", c);
//console.log("Task 15 - d:", d);

// Task 16 Assignment Operators
//let num = 10;
//num += 5;
//console.log("After += 5:", num);
//num -= 2;
//console.log("After -= 2:", num);
//num *= 3;
//console.log("After *= 3:", num);
//num /= 3;
//console.log("After /= 3:", num);
//num %= 4;
//console.log("After %= 4:", num);
//num **= 2;
//console.log("After **= 2:", num);

// Task 17 Mini Student Profile
//Variables
//let Name = "Ajithkumar";
//let Age = 30;
//let City = "Thanjavur";
//let College = "Periyar Maniammai College";
// Array
//let subjects = ["JavaScript","HTML","CSS","Java","SQL"];
// Object
//let studentProfile = {
    //name: Name,
    //age: Age,
    //city: City,
    //subjects: subjects,
    //isStudent: true};

// Print required details

//console.log("Student Name:", studentProfile.name);
//console.log("Student Age:", studentProfile.age);
//console.log("City:", studentProfile.city);
//console.log("First Subject:", studentProfile.subjects[0]);
//console.log(
    //"Last Subject:",
   // studentProfile.subjects[studentProfile.subjects.length - 1]);
//console.log("Total Subjects:", studentProfile.subjects.length);
//console.log("Complete Object:", studentProfile);

// Final Challenge -User + Calculator
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;
let power = num1 ** num2;
console.log("First Number:", num1);
console.log("Second Number:", num2);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Power:", power);