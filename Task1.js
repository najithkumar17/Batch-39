//JavaScript Basics — 50 Questions

//1.What is a variable in JavaScript?
//A variable is used to store data/value.

//2.What are the three keywords used to create variables?
//var,let and const.
  
//3.Write the syntax to create a variable using var.
//var name = "Ajithkumar";

//4.Write the syntax to create a variable using let.
//let age = "30";

//5.Write the syntax to create a variable using const.
// const pi = 2.17;

//6.What is declaration?
//Declaration means creating a variable without assigning a value.
//let age;

//7.What is initialization?
//Initialization means assigning a value to a variable.
//let age = "30";

//8.What is reassignment?
//Reassignment means changing the value of an existing variable.

//9.What is redeclaration?
//Creating the same variable again using the same keyword.
//Example var x = 10;   var x = 30;

//10.Which keyword allows redeclaration?
// var.

//11.Which keyword allows reassignment?
// var and let.

//12.Which keyword requires initialization when declared?
// const.

//13.Identify the declaration and initialization:let age = 25;
// Declaration: let age and Initialization = 25


//14.What is the value of a?100
//var a = 100;
//console.log(a);
//Answer - 100.

//15.Change the value of this variable to 200:
//let number = 100;
//Answer 
//let number = 100;
//number = 200;
//console.log(number);
//Here, number = 200; is called reassignment because we are changing the existing value of the variable.

//var
//16.What will be the output?
//var a = 10;
//console.log(a);
//Answer : 10.

//17.What will be the output?
//var a = 10;
//a = 20;
//console.log(a);
//Answer : 20.

//18. What will be the output?
//var a = 10;
//var a = 30;
//console.log(a);
//Answer : 30.

//19.Write a var variable named name with the value "John".
//var name = "John";

//20.Create a var variable named price with the value 500.
//var price = "500";

//21.Reassign price from 500 to 1000.
//var price = 500;
//price = 1000;

//22.What will be the output?
//var x = 50;
//x = 100;
//console.log(x);
//Answer - 100.

//23.Can a var variable be reassigned?
//Yes

//24.Can a var variable be redeclared?
//Yes

//25.Write an example of var redeclaration.
//var name = "Ajithkumar";
//var name = "Nagarajan";
//console.log(name);
//output : Nagarajan

//let
//26.Create a let variable named age with the value 25.
// let age = 31;

//27.What will be the output?
//let age = 20;
//age = 30;
//console.log(age);
// Answer - Output : 30

//28.Can a let variable be reassigned?
// Yes.

//29.Can a let variable be redeclared?
//No

//30.Find the error:
//let name = "John";
//let name = "David";
//Answer - Error: name cannot be redeclared using let in the same scope.

//31.Create a let variable called city and assign "Chennai".
//let city = "chennai";

//32.Change the value of city to "Salem".
//let city = "chennai";
//let city = "salem";

//33.What will be the output?
//let x = 10;
//x = 50;
//console.log(x);
//Answer - output : 50.

//34.Write a let variable called salary with the value 25000.
//let salary = 25000;

//35.Reassign salary to 30000.
//let salary = 25000;
//salary = 30000;

//const
//36.Create a const variable called pi with the value 3.14.
//const pi = 3.14;

//37.Can a const variable be reassigned?
//NO

//38.Can a const variable be redeclared?
//No

//39.What is wrong with this code?
//const age;
//age = 25;
//Answer - Const must be initialized when it is declared.

//40.What happens here?
//const price = 500;
//price = 1000;
//Answer - It gives an error because a const variable cannot be reassigned.

//41.Create a const variable called country with the value "India".
//const country = "India";

//42.What will be the output?
//const x = 100;
//console.log(x);
//Answer : Output - 100.

//43.Which keyword should you use if the value should not be reassigned?
//const

//44.What is the difference between let and const?
//let can be reassigned,while const cannot be reassigned.

//45.What is the difference between var and const?
//var can be reassigned and redeclared, while const cannot be reassigned or redeclared.

//Printing & Console
//46.Write JavaScript code to print Hello World using console.log().
//console.log("Hello World");

//47.Write JavaScript code to print the number 500 using console.log().
//console.log(500);

//48.What is the purpose of console.warn()?
//It displays a warning message.

//49.What is the purpose of console.error()?
//It displays an error message.

//50.What is the purpose of each?
//alert() - Displays a popup message.
//prompt() - Asks the user to enter a value.
//confirm() - Asks the user to confirm OK or Cancel.
//document.writeln() - Writes content directly into the webpage.
//console.log() - Prints information in the browser console.
  
  // Task 1: Create variables for student name, age, and mark
let studentName = "Ajith";
let studentAge = 30;
let studentMark = 85;
console.log("Student Name:", studentName);
console.log("Age:", studentAge);
console.log("Mark:", studentMark);

// Task 2: Ask user's name using prompt() and display using alert()
let name = prompt("Enter your name:");
alert("Your name is: " + name);

// Task 3: Ask user's age using prompt() and print using console.log()
let age = prompt("Enter your age:");
console.log("Your age is:", age);


// Task 4: Ask the user a question using confirm()
let result = confirm("Do you like JavaScript?");
console.log("Your answer is:", result);


// Task 5: Ask user's name and display it using document.writeln()
let userName = prompt("Enter your name:");
document.writeln("Hello " + userName);
