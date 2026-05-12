// Objective :- Write and execute basic javascript programs
// using variable, data types, operators, control statements & functions.

// Program using variable :-

// i) store & display values :-

let name = "Sarvesh";
let age = 21;

console.log("Name : ", name);
console.log("Age : ", age);


// ii) Addition using variables :-

let x = 20;
let y = 15;
let sum = x + y;

console.log("Sum is = ", sum);


// Program using data types :-

// i) Demonstration of Data Type :-

// Used for what kind of value a variable is storing.

let num = 18;
let text = "Sarvesh";
let isPass = true;

console.log(num);
console.log(text);
console.log(isPass);


// ii) Checking Data Type :-

let x = 100;
let y = "Sarvesh";

console.log(typeof a);
console.log(typeof b);


// Programs using operators :-

// i) Arithmetic Operator :-

let x = 5;
let y = 3;

console.log("Addition : ", a + b);
console.log("Subs : ", a - b);
console.log("Multi : ", a * b);
console.log("Division : ", a / b);
console.log("Modulus : ", a % b);
console.log("Power : ", a ** b);


// ii) Relational Operator :-

let x = 5;
let y = 10;

console.log(x > y);
console.log(x < y);
console.log(x == y);
console.log(x != y);


// iii) Logical Operator :-

let x = 15;
let y = 7;

console.log(x > 10 && y > 8);
console.log(x > 10 || y < 8);


// iv) Assignment Operator :-

let x = 10;

x += 5;
console.log(x);

x -= 3;
console.log(x);

x *= 2;
console.log(x);


// v) Increment & Decrement :-

let x = 5;

x++;
console.log(x);

x--;
console.log(x);


// Program using control statements :-

// i) if statement :-

let marks = 78;

if (marks >= 75)
{
    console.log("1st Division");
}


// ii) if-else statement :-

let marks = 68;

if (marks >= 75)
{
    console.log("1st Division");
}
else
{
    console.log("2nd Division");
}


// iii) if-else-if statement :-

let marks = 91;

if (marks >= 80)
{
    console.log("1st Division");
}
else if (marks >= 65)
{
    console.log("2nd Division");
}
else
{
    console.log("3rd Division");
}


// iv) Switch case :-

let day = 4;

switch(day)
{
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

    default:
        console.log("Invalid day");
}


// Looping Statement :-

// i) for loop :-

for (let i = 1; i <= 5; i++)
{
    console.log(i);
}


// ii) while loop :-

let i = 1;

while (i <= 5)
{
    console.log(i);
    i++;
}


// iii) do-while loop :-

let i = 1;

do
{
    console.log(i);
    i++;
}
while (i <= 5);


// Jump Statement :-

// i) Break statement :-

for (let i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        break;
    }

    console.log(i);
}


// ii) continue statement :-

for (let i = 1; i <= 5; i++)
{
    if (i == 3)
    {
        continue;
    }

    console.log(i);
}


// Program using functions :-

function add(a, b)
{
    return a + b;
}

console.log(add(5, 3));


// OOPS :-

// 1) Classes :-

class Student
{
    constructor(name, marks)
    {
        this.name = name;
        this.marks = marks;
    }
}

let s1 = new Student("Sarvesh", 85);

console.log(s1.name);
console.log(s1.marks);


// 2) Encapsulation (Data Hiding) :-

class Account
{
    #Pin = 1234;

    getPin()
    {
        return this.#Pin;
    }
}

let a = new Account();

console.log(a.getPin());


// 3) Inheritance (Reuse Code) :-

class Vehicle
{
    start()
    {
        return "Vehicle starts";
    }
}

class Car extends Vehicle
{
}

let c = new Car();

console.log(c.start());


// 4) Polymorphism :-

class Bird
{
    sound()
    {
        return "Bird sound";
    }
}

class Parrot extends Bird
{
    sound()
    {
        return "Parrot talks";
    }
}

let p = new Parrot();

console.log(p.sound());


// 5) Abstraction :-

class Shape
{
    area()
    {
        throw "Area method";
    }
}

class Square extends Shape
{
    area()
    {
        return 4 * 4;
    }
}

let sv = new Square();

console.log(sv.area());


// Pre-Increment : (++x)

let x = 5;

console.log(++x);
console.log(x);


// Post-Increment : (x++)

let x = 5;

console.log(x++);
console.log(x);