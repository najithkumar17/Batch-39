
// TASK 1 — FOR LOOP
// Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// TASK 2 — REVERSE NUMBER
// Print numbers from 10 to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// TASK 3 — EVEN NUMBERS
// Print even numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// TASK 4 — ODD NUMBERS
// Print odd numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// TASK 5 — MULTIPLICATION TABLE
// Get number from user

let number = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// TASK 6 — WHILE LOOP COUNTDOWN

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

// TASK 7 — SUM OF NUMBERS
// 1 + 2 + 3 + ... + 10
// =====================================================

let i = 1;
let sum = 0;

while (i <= 10) {
    sum = sum + i;
    i++;
}

console.log("Sum =", sum);

// TASK 8 — DO WHILE
// Print numbers from 1 to 5

let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 5);
// TASK 9 — DO WHILE UNDERSTANDING

let b = 10;
do {
    console.log(b);
    b++;
} while (b <= 5);

/*
Output:
10

Why?

The do...while loop executes the code at least once
before checking the condition.

Here:
b = 10

The code prints 10 first.

Then:
b becomes 11

Condition:
11 <= 5

This is false.

So the loop stops.
*/

// TASK 10 — FOR...OF STRING

let name = "javascript";
for (let character of name) {
    console.log(character);
}

// TASK 11 — FOR...OF ARRAY

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}

// TASK 12 — STUDENT NAMES

let students = ["Arun", "Priya", "Kumar", "Naveen", "Ajith"];

for (let student of students) {
    console.log("Student: " + student);
}

// TASK 13 — EMPLOYEE OBJECT

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key, employee[key]);
}

// TASK 14 — PRODUCT OBJECT

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}

// TASK 15 — SIMPLE FUNCTION

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();

// TASK 16 — FUNCTION WITH PARAMETER

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");

// TASK 17 — MULTIPLE PARAMETERS

function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("Arun", 22, "IT");

student("Priya", 21, "Computer Science");

student("Naveen", 23, "ECE");

// TASK 18 — ADDITION FUNCTION

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);

// TASK 19 — SALARY

function salary(amount) {
    return amount;
}

let employeeSalary = salary(50000);

console.log("Salary:", employeeSalary);

// TASK 20 — BONUS CALCULATOR

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let totalSalary = bonus(50000, 5000);

console.log("Total Salary:", totalSalary);

// TASK 21 — DEFAULT PARAMETER

function employeeDetails(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Arun");

employeeDetails("Priya", "Designer");

/*
Output:

Name: Arun
Role: Developer

Name: Priya
Role: Designer
*/

// TASK 22 — NAMED FUNCTION

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));

// TASK 23 — ANONYMOUS FUNCTION

let calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 20));

// TASK 24 — ARROW FUNCTION

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 10));

// TASK 25 — SCOPE

function test() {

    if (true) {

        var x = 10;
        let y = 20;
        const z = 30;

        console.log(x);
        console.log(y);
        console.log(z);
    }

    console.log(x);

    // console.log(y);
    // console.log(z);
}

test();

/*
Output:

10
20
30
10

Explanation:

var:
Function scoped.
So x can be accessed outside the if block
but inside the function.

let:
Block scoped.
So y cannot be accessed outside the if block.

const:
Block scoped.
So z cannot be accessed outside the if block.

If you remove the // from y or z,
JavaScript will give a ReferenceError.
*/

// TASK 26 — Predict

console.log(hoistedA);

var hoistedA = 10;

/*
Output:

undefined

Explanation:

var declarations are hoisted.

JavaScript behaves approximately like:

var hoistedA;
console.log(hoistedA);
hoistedA = 10;
*/

// TASK 27 

// console.log(hoistedB);
// let hoistedB = 20;

/*
Output:

ReferenceError

let is hoisted, but it cannot be accessed
before its declaration.

This period is called the Temporal Dead Zone (TDZ).
*/

// TASK 28

// console.log(hoistedC);
// const hoistedC = 30;

/*
Output:

ReferenceError

const also cannot be accessed before declaration.

Difference:

var   -> undefined
let   -> ReferenceError
const -> ReferenceError
*/

// TASK 29 — IIFE

(function() {
    console.log("Welcome to JavaScript");
})();


// IIFE with parameters

(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);

// TASK 30 — CALLBACK / HIGHER-ORDER FUNCTION

function welcomeMessage() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcomeMessage);

/*
welcomeMessage = CALLBACK

execute = HIGHER-ORDER FUNCTION

Why?

execute() accepts another function as a parameter.

The function passed to another function
is called a callback.
*/

// TASK 31 — GENERATOR FUNCTION

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackGenerator = cashback();

for (let value of cashbackGenerator) {
    console.log(value);
}

// TASK 32 — EMPLOYEE MANAGEMENT SYSTEM

// Employee data

let employees = [

    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },

    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },

    {
        name: "Naveen",
        age: 26,
        department: "IT",
        role: "Tester",
        salary: 45000
    },

    {
        name: "Divya",
        age: 23,
        department: "Finance",
        role: "Accountant",
        salary: 38000
    }
];

// 1. FOR...OF
// Print every employee

console.log("===== EMPLOYEE LIST =====");

for (let employee of employees) {

    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);

    console.log("--------------------");
}
// 2. FOR...IN
// Print keys and values

console.log("===== EMPLOYEE KEYS AND VALUES =====");

for (let employee of employees) {

    for (let key in employee) {

        console.log(key, employee[key]);

    }

    console.log("--------------------");
}
// 3. FUNCTION
// Display employee information

function displayEmployee(employee) {

    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);

}
// Call function

console.log("===== DISPLAY FUNCTION =====");

displayEmployee(employees[0]);
displayEmployee(employees[1]);

// 4. FUNCTION PARAMETERS
// Pass employee information to function

function showEmployee(name, age, department, role, salary) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);

}

showEmployee(
    "Arun",
    25,
    "IT",
    "Developer",
    40000
);

// 5. RETURN
// Function returns employee salary

function getSalary(employee) {

    return employee.salary;

}

let salaryResult = getSalary(employees[0]);

console.log("Employee Salary:", salaryResult);

// 6. CONDITION
// Check Salary >= 40000

console.log("===== SALARY CHECK =====");

for (let employee of employees) {

    if (employee.salary >= 40000) {

        console.log(
            employee.name + " has salary >= 40000"
        );

    }

}

// 7. ARROW FUNCTION
// Simple calculation

let addBonus = (salary, bonus) => {
    return salary + bonus;
};

let finalSalary = addBonus(40000, 5000);

console.log("Final Salary:", finalSalary);

// 8. GENERATOR
// Employee Benefits

function* benefits() {

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";

}

let benefitGenerator = benefits();

console.log("===== EMPLOYEE BENEFITS =====");

for (let benefit of benefitGenerator) {

    console.log(benefit);

}