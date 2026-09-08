Variables & Data Types (Questions 1-8)

### Q1: What is the difference between var, let, and const?
let - can change, but cannot re-declare.
var - can change and re-declare.
const - cannot change or re-declare

var name = "Ajith";
name = "Kumar";       // Allowed

let age = 30;
age = 31;             //  Allowed

const city = "Chennai";
city = "Trichy";      //  Error

### Q2: Can you re-declare a variable with var? What about let and const?
Yes, var can be re-declared.
var x = 10;
var x = 20;

console.log(x);
// output - 20

But let cannot:
let y = 10;
let y = 20;  // Error

const also cannot:
const z = 10;
const z = 20;  // Error

### Q3: What is the output of this code?
```javascript
var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
z = 30;

console.log(x, y, z);
```
Answer: Error
The problem is:
z = 30;
Because z is declared using const, it cannot be reassigned.
So the program stops at that line.

### Q4: What is the difference between declaring and initializing a variable?
Declaration means creating a variable.
let age;
Here, age is declared.

Initialization means giving the variable its first value.
let age = 30;
Here, age is declared and initialized.
Simple:
let age;       // Declaration
age = 30;      // Assignment
let city = "Chennai";  // Declaration + Initialization

### Q5: What will be the output?
```javascript
let a;
console.log(a);
```
Output:undefined
Because the variable is declared but no value has been assigned.

### Q6: What is hoisting? Give an example.
Hoisting means JavaScript processes certain declarations before executing the code.
Example:
console.log(x);
var x = 10;
Output:undefined
JavaScript behaves approximately like:
var x;
console.log(x);
x = 10;
 let and const are also hoisted internally, but they cannot be accessed before their declaration.

### Q7: What is the difference between null and undefined?
null - intentionally saying "there is no value."
let y = null;
console.log(y);

Output:null

undefined → a variable has been declared but has no value.
let x;
console.log(x);
Output:undefined

### Q8: What will be the output?
```javascript
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
```
Output:
object
undefined
object
object

Important:typeof null
returns "object" due to a historical JavaScript behavior.


## 📌 Operators (Questions 9-14)
### Q9: What is the difference between == and ===?
== checks value after type conversion.
5 == "5"

Output:true

=== checks both value and data type.
5 === "5"

Output:false

Because:
5   → number
"5" → string

### Q10: What is the difference between ++i and i++?
They both increase the value by 1, but the timing is different.
i++ — Post-increment
let i = 5;
console.log(i++);
console.log(i);

Output:
5
6

It uses the old value first, then increases.
++i — Pre-increment
let i = 5;

console.log(++i);

Output:
6

It increases first, then uses the new value.

### Q11: What will be the output?
```javascript
let x = 10;
let y = "5";
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
```
Output:

105
5
50
2

Addition
10 + "5"
becomes string concatenation:
"105"

Subtraction
10 - "5"
JavaScript converts "5" to number:
5

Same for multiplication and division.

### Q12: What are logical operators? Explain with examples.
There are three main logical operators:
1. AND &&
Both conditions must be true.

console.log(10 > 5 && 20 > 10);
Output:true

2. OR ||
At least one condition must be true.

console.log(10 > 20 || 20 > 10);

Output:true

3. NOT !

Changes true to false and false to true.

console.log(!(10 > 5));

Output:false

### Q13: What will be the output?
```javascript
console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));
```
Output:
true
true
false

Explanation:
5 > 3     → true
10 > 5    → true

true && true → true
5 > 10    → false
10 > 5    → true

false || true → true
5 > 3 → true

!true → false


### Q14: What is the ternary operator? Give an example.
The ternary operator is a short way to write if-else.

Syntax:
condition ? valueIfTrue : valueIfFalse;

Example:
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
Output:Adult

## 📌 Type Casting (Questions 15-17)
### Q15: What is the difference between implicit and explicit type casting?
Implicit type casting
JavaScript automatically converts the type.
let x = "10";
let y = 5;

console.log(x - y);
JavaScript converts "10" to 10.

Output:5

Explicit type casting

We manually convert the type.

let x = "10";
let y = Number(x);

console.log(y);

Output:10

Common conversion functions:

Number()
String()
Boolean()

### Q16: What will be the output?
```javascript
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));
```
Output:
123
NaN
1
0
false
true

Explanation:

Number("123")   → 123
Number("hello") → NaN
Number(true)    → 1
Number(false)   → 0
Boolean(0)      → false
Boolean("hello")→ true

Q17: What is NaN?Give an example.
NaN means Not a Number. It occurs when JavaScript tries to perform an invalid mathematical operation.
Example:
let result = "Hello" * 5;
console.log(result);
Output:NaN

📌 Conditional Statements
Q18: What is the difference between if-else and switch?
if-else is used when we have conditions involving comparisons like >, <, >=, <=, etc.
switch is mainly used to compare one value with multiple fixed cases.

if-else example:
let age = 20;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

switch example:
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}
Q19: What will be the output?
let age = 20;
if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
Since 20 >= 18 is true:
Output:Adult

Q20: What is nested if? Give an example.
A nested if means an if statement inside another if statement.
let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID == true) {
        console.log("You can enter");
    }
}
Output:You can enter

Q21: Write a program to check if a number is even or odd using ternary operator.
let number = 10;
let result = (number % 2 == 0) ? "Even" : "Odd";
console.log(result);
Output:Even
Easy way to understand:
condition ? value_if_true : value_if_false;

📌 Loops
Q22: What is the difference between while and do-while?

while loop:
Checks the condition before executing.
May execute zero times.
let i = 1;
while (i <= 3) {
    console.log(i);
    i++;
}

do-while loop:
Executes the code first.
Checks the condition afterward.
Executes at least once.
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 3);

Main difference:

while	do-while
Condition checked first	Code executes first
May execute 0 times	Executes at least 1 time
Q23: What will be the output?
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

Output:
1
2
3
4
5
Q24: What is the difference between for-of and for-in?
for-of is used to get values from an array/string.
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

Output:
Apple
Banana
Mango

for-in is used to get keys/indexes.
let fruits = ["Apple", "Banana", "Mango"];

for (let index in fruits) {
    console.log(index);
}

Output:
0
1
2

Remember:
for-of → values
for-in → indexes/keys

Q25: Write a program to find sum of numbers from 1 to 100.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

Output:5050

📌 Arrays
Q26: What is the difference between slice and splice?
slice()
slice() is used to copy/extract part of an array.
It does not change the original array.
let arr = [1, 2, 3, 4, 5];
let result = arr.slice(1, 4);

console.log(result);
console.log(arr);

Output:
[2, 3, 4]
[1, 2, 3, 4, 5]
splice()
splice() is used to add, remove, or replace elements.
It changes the original array.
let arr = [1, 2, 3, 4, 5];

arr.splice(1, 2);

console.log(arr);

Output:
[1, 4, 5]

Easy memory trick:

slice  → copy
splice → change original
Q27: What will be the output?
let arr = [1, 2, 3];

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);

Step by step:

Starting:       [1, 2, 3]
push(4):        [1, 2, 3, 4]
pop():          [1, 2, 3]
unshift(0):     [0, 1, 2, 3]
shift():        [1, 2, 3]

Output:
[1, 2, 3]

📌 Functions
Q28: What is the difference between function declaration and function expression?
Function Declaration
function greet() {
    console.log("Hello");
}

greet();

The function is declared using the function keyword.

Function Expression
let greet = function() {
    console.log("Hello");
};

greet();

The function is stored inside a variable.

Main difference:

Function Declaration → function is declared directly
Function Expression   → function is stored in a variable

Q29: What is an arrow function?

An arrow function is a shorter way to write a function.
Normal function:

function add(a, b) {
    return a + b;
}

Arrow function:

let add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

Output:30

For a single expression, you can make it even shorter:

let add = (a, b) => a + b;

console.log(add(10, 20));

Q30: What will be the output?
function greet() {
    return "Hello";
}

let message = greet();

console.log(message);

greet() returns "Hello", and that value is stored in message.
Output:Hello
