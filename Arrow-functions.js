//Arrow functions allow us to write shorter function syntax:
//Functions before 
hey1 = function(){
    return "Hey there 1"
}

//Function now with arrow function
hey2 = () => {
    return "Hey there 2";
}

//can be reduced to
hey3 = () => "Hey there 3";
hey1();
console.log(hey1(),hey2(),hey3());
//If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword
//Arrow Functions Return Value by Default
//works only if function has one statement


// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

// With arrow functions the this keyword always represents the object that defined the arrow function

// Example 1: Arrow Function with No Argument
// If a function doesn't take any argument, then you should use empty parentheses. For example,

let greet = () => console.log('Hello');
greet(); // Hello

// Example 2: Arrow Function with One Argument
// If a function has only one argument, you can omit the parentheses. For example,

let greet = x => console.log(x);
greet('Hello'); // Hello 

// using arrow functions
let x = (x, y) => x * y;

//before
// function expression
let x = function(x, y) {
    return x * y;
 }



//  Example 3: Arrow Function as an Expression
// You can also dynamically create a function and use it as an expression. For example,

let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby





function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        // this is accessible
        console.log(this.age);

        function innerFunc() {

            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }

        innerFunc();

    }
}

let x = new Person();
x.sayName();

//inside regualr fun
//op 25  undef  window




function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();
//Inside an arrow function
//25 25

//ref https://www.programiz.com/javascript/arrow-function
