//   First-class functions:
//defination:A programming language is said to have First-class functions when functions in that language are treated like any other variable. 
//For example, in such a language, a function can be passed as an argument to other functions, 
//can be returned by another function and can be assigned as a value to a variable.


// Assigning a function to a variable 

const foo = () => {
    console.log("foobar")
}

foo()// Invoke it using the variable

//We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.

// note:  Even if your function was named, you can use the variable name to invoke it. 
//Naming it will be helpful when debugging your code. 
//But it won't affect the way we invoke it.



// Passing a function as an argument

function sayHello() {  // callback function 
    return "hello"
}

function greeting(hellmessage, name){
    console.log(hellmessage() + name)
}

greeting(sayHello, "javascript");

//We are passing our sayHello() function as an argument to the greeting() function, this explains how we are treating the function as a value.

//note: The function that we pass as an argument to another function is called a callback function. sayHello() is a callback function.


//// Returning a function:
// function sayHello() {
//     return () => {
//       console.log("Hello!");
//     };
//   }

function sayHe() {
    return sayHello();
  }


  //In this example, we are returning a function from another function - We can return a function because functions in JavaScript are treated as values.


  ///Note: A function that returns a function or takes other functions as arguments is called a higher-order function.