
// TASK 1  VARIABLES

console.log("TASK 1");

var name = "Ajithkumar";
let age = 30;
const city = "Thanjavur";
var college = "PMU College";

// Print all values
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("College:", college);

// Change var value
name = "Nagarajan";
console.log("Changed Name:", name);

// Change let value
age = 31;
console.log("Changed Age:", age);

// Try changing const value
// city = "Chennai";
// This gives an error because const cannot be reassigned.

// Try redeclaring var
var name = "Arun";
console.log("Redeclared var:", name);

// Try redeclaring let
// let age = 30;
// This gives an error: Identifier 'age' has already been declared.

// Try redeclaring const
// const city = "Madurai";
// This also gives an error: Identifier 'city' has already been declared.


// TASK 2 — PRINTING STATEMENTS
console.log("TASK 2");

// console.log()
console.log("Hello JavaScript");

// alert()
alert("Welcome to JavaScript");

// confirm()
let answer = confirm("Are you learning JavaScript?");
console.log("Confirm result:", answer);

// prompt()
let userName = prompt("Enter your name:");
console.log("Your name is:", userName);

// document.writeln()
document.writeln("<h2>Task 2: document.writeln() is working</h2>");

// TASK 3 — USER DETAILS
console.log("TASK 3");
let studentName = prompt("Enter your name:");
let studentAge = prompt("Enter your age:");
let studentCity = prompt("Enter your city:");
let qualification = prompt("Enter your qualification:");

console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("City:", studentCity);
console.log("Qualification:", qualification);

// TASK 4 — FIND DATA TYPES
console.log("TASK 4");
let value1 = "JavaScript";
let value2 = 100;
let value3 = 99.5;
let value4 = true;
let value5 = false;
let value6 = undefined;
let value7 = null;

console.log(value1, typeof value1);
console.log(value2, typeof value2);
console.log(value3, typeof value3);
console.log(value4, typeof value4);
console.log(value5, typeof value5);
console.log(value6, typeof value6);
console.log(value7, typeof value7);

// TASK 5 — STUDENT ARRAY
console.log("TASK 5");
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
console.log("First student:", students[0]);
console.log("Second student:", students[1]);
console.log("Last student:", students[students.length - 1]);
console.log("Total students:", students.length);

// TASK 6 — EMPLOYEE OBJECT
console.log("TASK 6");
let employee = {
    name: "Ajith",
    age: 30,
    role: "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking: true,
    qualification: ["B.Tech", "M.Tech"]
};

console.log("Employee Name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First Skill:", employee.skills[0]);
console.log(
    "Last Qualification:",
    employee.qualification[employee.qualification.length - 1]
);
console.log("Working Status:", employee.isWorking);

// TASK 7 — CALCULATOR
console.log("TASK 7");
let a = 20;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// TASK 8 — SHOPPING BILL
console.log("TASK 8");
let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;
let totalPrice = shirt + pant + shoes + bag;
console.log("Shirt:", shirt);
console.log("Pant:", pant);
console.log("Shoes:", shoes);
console.log("Bag:", bag);
console.log("Total Price:", totalPrice);

// TASK 9 — INCREMENT & DECREMENT
console.log("TASK 9");
// A
let a1 = 10;
let b1 = a1++;
console.log( a1);
console.log(b1);

// B
let a2 = 10;
let b2 = ++a2;
console.log( a2);
console.log(b2);

// C
let a3 = 10;
let b3 = a3--;
console.log( a3);
console.log(b3);

// D
let a4 = 10;
let b4 = --a4;
console.log( a4);
console.log(b4);

// TASK 10 — ASSIGNMENT OPERATORS
console.log("TASK 10");
// Each operation starts separately with 10

let num1 = 10;
num1 += 5;
console.log("num += 5:", num1);

let num2 = 10;
num2 -= 3;
console.log("num -= 3:", num2);

let num3 = 10;
num3 *= 2;
console.log("num *= 2:", num3);

let num4 = 10;
num4 /= 4;
console.log("num /= 4:", num4);

let num5 = 10;
num5 %= 3;
console.log("num %= 3:", num5);

let num6 = 10;
num6 **= 2;
console.log("num **= 2:", num6);

// TASK 11 — COMPARISON OPERATORS
console.log("TASK 11");
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");

// TASK 12 — AND
console.log("TASK 12");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// TASK 13 — OR
console.log("TASK 13");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// TASK 14 — NOT
console.log("TASK 14");

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));

// TASK 15 — COMBINATION
console.log("TASK 15 ");

console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");

// TASK 16 — TERNARY VOTING
console.log("TASK 16");

let votingAge = 20;

let votingResult =
    votingAge >= 18 ? "Eligible to vote" : "Not eligible";

console.log(votingResult);

// TASK 17 — TERNARY PASSWORD
console.log("TASK 17");
let password = true;

let loginResult =
    password ? "Login successful" : "Wrong password";

console.log(loginResult);

// TASK 18 — CONCATENATION & TEMPLATE STRING
console.log("TASK 18");

let introName = "Naveen";
let introAge = 25;
let introCity = "Trichy";

// Using +
console.log(
    "My name is " + introName +
    ". I am " + introAge +
    " years old. I live in " + introCity + "."
);

// Using template literal
console.log(
    `My name is ${introName}. I am ${introAge} years old. I live in ${introCity}.`
);

// TASK 19 — STRING CONVERSION
console.log("TASK 19");

let stringValue1 = String(100);
let stringValue2 = String(true);
let stringValue3 = String(undefined);
let stringValue4 = String(null);
let stringValue5 = String([1, 2]);

console.log(stringValue1, typeof stringValue1);
console.log(stringValue2, typeof stringValue2);
console.log(stringValue3, typeof stringValue3);
console.log(stringValue4, typeof stringValue4);
console.log(stringValue5, typeof stringValue5);

// TASK 20 — NUMBER CONVERSION
console.log("TASK 20");

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

// TASK 21 — BOOLEAN CONVERSION

console.log("TASK 21");

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));

// TASK 22 — VOTING ELIGIBILITY

console.log("TASK 22");

let voteAge = Number(prompt("Enter your age:"));

if (voteAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

// TASK 23 — POSITIVE OR NEGATIVE
console.log("TASK 23");

let number = Number(prompt("Enter a number:"));

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// TASK 24 — GRADE SYSTEM

console.log("TASK 24");

let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80 && marks < 90) {
    console.log("B Grade");
} else if (marks >= 70 && marks < 80) {
    console.log("C Grade");
} else if (marks >= 60 && marks < 70) {
    console.log("D Grade");
} else if (marks >= 0 && marks < 60) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}

// TASK 25 — JOB ELIGIBILITY
console.log("TASK 25");

let jobAge = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height:"));
let weight = Number(prompt("Enter your weight:"));

if (jobAge >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("You are not selected: Weight must be 60 or above");
        }

    } else {
        console.log("You are not selected: Height must be 160 or above");
    }

} else {
    console.log("You are not selected: Age must be 18 or above");
}

// TASK 26 — TRAFFIC LIGHT
console.log("TASK 26");

let trafficColor = prompt(
    "Enter traffic light color: red, yellow, or green"
);

switch (trafficColor) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}

// TASK 27 — DAY
console.log("TASK 27");

let day = 1;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

// TASK 28 — FINAL MINI PROJECT
// STUDENT RESULT SYSTEM

console.log("TASK 28");
// Step 1 — Get user details

let finalName = prompt("Enter your name:");
let finalAge = Number(prompt("Enter your age:"));
let finalCity = prompt("Enter your city:");

// Step 2 — Get marks

let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));

// Step 3 — Calculate total and average

let total = tamil + english + maths;
let average = total / 3;

// Step 4 — Check grade

let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

// Step 5 — Check voting

let voting;

if (finalAge >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

// Step 6 — Display result

console.log(`
Name: ${finalName}
Age: ${finalAge}
City: ${finalCity}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);