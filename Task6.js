/// Task 1 — Student Result Analyzer
function studentResult(name, department, mark1, mark2, mark3, mark4, mark5) 
{
    let total = mark1 + mark2 + mark3 + mark4 + mark5;
    let average = total / 5;
    let result;
    if (mark1 >= 35 && mark2 >= 35 && mark3 >= 35 && mark4 >= 35 && mark5 >= 35)
         {
        result = "Pass";
    } 
    else {
        result = "Fail";
    }
    let grade;
    if (result === "Fail") {
        grade = "Fail";
    } 
    else if (average >= 90) {
        grade = "A";
    } 
    else if (average >= 75) {
        grade = "B";
    }
     else if (average >= 60) {
        grade = "C";
    } 
    else if (average >= 50) {
        grade = "D";
    } 
    else {
        grade = "Fail";
    }
    console.log("Student Result ");
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}

studentResult("Ajithkumar", "Computer Science", 90, 85, 88, 92, 80);

//Task 2 — Employee Salary Calculator
let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};
function calculateSalary(employee) {
    let basicSalary = employee.salary;
    let bonus = 0;
    if (employee.experience >= 5) {
        bonus = basicSalary * 0.15;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }
    let finalSalary = basicSalary + bonus;
    console.log("Employee Salary");
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}
calculateSalary(employee);

 //Task 3 — Product Filter System
let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];
// 1. Products above ₹2,000
let above2000 = products.filter(function(product) {
    return product.price > 2000;
});
console.log("Products above ₹2000:", above2000);
// 2. Only electronics
let electronics = products.filter(function(product) {
    return product.category === "electronics";
});
console.log("Electronics:", electronics);

// 3. First product below ₹1,000
let below1000 = products.find(function(product) {
    return product.price < 1000;
});
console.log("First product below ₹1000:", below1000);
// 4. Total price
let totalPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);
console.log("Total Price:", totalPrice);
// 5. Any product above ₹50,000
let expensiveProduct = products.some(function(product) {
    return product.price > 50000;
});
console.log("Any product above ₹50000:", expensiveProduct);
// 6. Every product above ₹500
let allAbove500 = products.every(function(product) {
    return product.price > 500;
});
console.log("Every product above ₹500:", allAbove500);

 //Task 4 — Employee Management
let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Priya",
        role: "UI Designer",
        salary: 45000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "Tester",
        salary: 35000
    },
    {
        id: 105,
        name: "Ajithkumar",
        role: "Full Stack Developer",
        salary: 65000
    },
    {
        id: 106,
        name: "Divya",
        role: "HR",
        salary: 42000
    }
];


// 1. Display all employee names
let employeeNames = employees.map(function(employee) {
    return employee.name;
});

console.log("Employee Names:", employeeNames);


// 2. Employees earning above ₹40,000
let above40000 = employees.filter(function(employee) {
    return employee.salary > 40000;
});

console.log("Employees above ₹40000:", above40000);


// 3. Find employee with ID 103
let employee103 = employees.find(function(employee) {
    return employee.id === 103;
});

console.log("Employee ID 103:", employee103);


// 4. Calculate total salary
let totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalSalary);


// 5. Find highest-paid employee
let highestPaid = employees.reduce(function(highest, employee) {

    if (employee.salary > highest.salary) {
        return employee;
    } else {
        return highest;
    }

});

console.log("Highest Paid:", highestPaid);


// 6. Sort highest salary to lowest
let sortedEmployees = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Salary High to Low:", sortedEmployees);


// 7. New array containing only names
let namesOnly = employees.map(function(employee) {
    return employee.name;
});

console.log("Names Only:", namesOnly);

//Task 5 — Shopping Cart
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {
    
    // Calculate item total
    let total = cart.reduce(function(sum, item) {

        let itemTotal = item.price * item.quantity;

        console.log(item.name, "Item Total:", itemTotal);

        return sum + itemTotal;

    }, 0);

    let discount = 0;

    if (total > 50000) {
        discount = total * 0.10;
    }

    let finalAmount = total - discount;

    console.log("Shopping Cart");
    console.log("Total Cart Value:", total);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);
}

// Task 6 — Student Search System
let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];
// 1. Display all student names
let studentNames = students.map(function(student) {
    return student.name;
});
console.log("Student Names:", studentNames);
// 2. Students who scored above 80
let above80 = students.filter(function(student) {
    return student.mark > 80;
});
console.log("Students above 80:", above80);
// 3. Find Priya
let priya = students.find(function(student) {
    return student.name === "Priya";
});
console.log("Priya:", priya);
// 4. Calculate average mark
let totalMarks = students.reduce(function(total, student) {
    return total + student.mark;
}, 0);
let averageMark = totalMarks / students.length;
console.log("Average Mark:", averageMark);
// 5. Check whether anyone failed
let failed = students.some(function(student) {
    return student.mark < 50;
});
console.log("Anyone failed:", failed);
// 6. Check everyone scored above 40
let everyoneAbove40 = students.every(function(student) {
    return student.mark > 40;
});
console.log("Everyone above 40:", everyoneAbove40);
// 7. Sort students by marks
let sortedStudents = [...students].sort(function(a, b) {
    return b.mark - a.mark;
});
console.log("Students sorted by marks:", sortedStudents);


//Task 7 — Array Transformation Challenge
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// 1. Numbers × 2
let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log("Numbers × 2:", doubled);


// 2. Even numbers
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);


// 3. Numbers greater than 15
let greaterThan15 = numbers.filter(function(number) {
    return number > 15;
});

console.log("Greater than 15:", greaterThan15);


// 4. First number greater than 20
let firstGreater20 = numbers.find(function(number) {
    return number > 20;
});

console.log("First number greater than 20:", firstGreater20);


// 5. Total
let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log("Total:", total);


// 6. Any number greater than 40
let anyGreater40 = numbers.some(function(number) {
    return number > 40;
});

console.log("Any number greater than 40:", anyGreater40);


// 7. Every number positive
let allPositive = numbers.every(function(number) {
    return number > 0;
});

console.log("Every number positive:", allPositive);


// 8. Highest to lowest
let descending = [...numbers].sort(function(a, b) {
    return b - a;
});

console.log("Highest to Lowest:", descending);

//Task 8 — String Analyzer

For this task, we use prompt().

let sentence = prompt("Enter a sentence:");


// 1. Total characters
console.log("Total Characters:", sentence.length);


// 2. Uppercase
console.log("Uppercase:", sentence.toUpperCase());


// 3. Lowercase
console.log("Lowercase:", sentence.toLowerCase());


// 4. Contains JavaScript
console.log(
    "Contains JavaScript:",
    sentence.includes("JavaScript")
);


// 5. First character
console.log("First Character:", sentence.slice(0, 1));


// 6. Last character
console.log("Last Character:", sentence.slice(-1));


// 7. Number of words
let words = sentence.trim().split(" ");

console.log("Number of Words:", words.length);


// 8. Replace JavaScript with Python
let replacedSentence = sentence.replace("JavaScript", "Python");

console.log("Replaced Sentence:", replacedSentence);


// 9. Convert sentence into array
let sentenceArray = sentence.split(" ");

console.log("Sentence Array:", sentenceArray);

// Final Mini Project — Employee Dashboard

This combines almost everything you've learned.

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Display all employees
console.log("ALL EMPLOYEES");

employees.forEach(function(employee) {
    console.log(employee);
});


// 2. Search employee by name
let searchName = "Arun";

let searchedEmployee = employees.find(function(employee) {
    return employee.name === searchName;
});

console.log("SEARCH RESULT ");
console.log(searchedEmployee);


// 3. Department Filter
let departmentEmployees = employees.filter(function(employee) {
    return employee.department === "IT";
});

console.log("IT EMPLOYEES ");
console.log(departmentEmployees);


// 4. Salary Filter
let highSalaryEmployees = employees.filter(function(employee) {
    return employee.salary > 50000;
});

console.log("SALARY ABOVE ₹50000 ");
console.log(highSalaryEmployees);


// 5. Total company salary
let totalCompanySalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Company Salary:", totalCompanySalary);


// 6. Highest salary
let highestSalaryEmployee = employees.reduce(function(highest, employee) {

    if (employee.salary > highest.salary) {
        return employee;
    } else {
        return highest;
    }

});

console.log("Highest Salary Employee:", highestSalaryEmployee);


// 7. Employees with more than 3 years experience
let experiencedEmployees = employees.filter(function(employee) {
    return employee.experience > 3;
});

console.log("EXPERIENCE ABOVE 3 YEARS ");
console.log(experiencedEmployees);


// 8. Low to High salary
let salaryLowToHigh = [...employees].sort(function(a, b) {
    return a.salary - b.salary;
});

console.log(" SALARY LOW TO HIGH ");
console.log(salaryLowToHigh);


// High to Low salary
let salaryHighToLow = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log(" SALARY HIGH TO LOW ");
console.log(salaryHighToLow);


// 9. Statistics
let averageSalary = totalCompanySalary / employees.length;

console.log("STATISTICS");
console.log("Total Employees:", employees.length);
console.log("Total Salary: ₹" + totalCompanySalary);
console.log("Highest Salary: ₹" + highestSalaryEmployee.salary);
console.log("Average Salary: ₹" + Math.round(averageSalary));
