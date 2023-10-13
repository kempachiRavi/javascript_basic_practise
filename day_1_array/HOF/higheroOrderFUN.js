//   First-class functions:
//defination:A programming language is said to have First-class functions when functions in that language are treated like any other variable. 
//For example, in such a language, a function can be passed as an argument to other functions, 
//can be returned by another function and can be assigned as a value to a variable.


// Assigning a function to a variable 

// const foo = () => {
//     console.log("foobar")
// }

// foo()// Invoke it using the variable

//We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.

// note:  Even if your function was named, you can use the variable name to invoke it. 
//Naming it will be helpful when debugging your code. 
//But it won't affect the way we invoke it.



// Passing a function as an argument

// function sayHello() {  // callback function 
//     return "hello"
// }

// function greeting(hellmessage, name){
//     console.log(hellmessage() + name)
// }

// greeting(sayHello, "javascript");

//We are passing our sayHello() function as an argument to the greeting() function, this explains how we are treating the function as a value.

//note: The function that we pass as an argument to another function is called a callback function. sayHello() is a callback function.


//// Returning a function:
// function sayHello() {
//     return () => {
//       console.log("Hello!");
//     };
//   }

// function sayHe() {
//     return sayHello();
//   }


  //In this example, we are returning a function from another function - We can return a function because functions in JavaScript are treated as values.


  ///Note: A function that returns a function or takes other functions as arguments is called a higher-order function.



  // now let see the use case 

  //1Q  now from a given array you have to skim out number values boolean values string values and to do that you have to create a function 

//   let arr = ["ravi" , 53 , "pandu" , true , 98 , "gandu"]




// function getString(arr){
//     let res = []
//     for(let item of arr){
//         if(typeof(item)==="string"){

//             res.push(item)

//         }
        
//     }
//     return res
// }

// console.log(getString(arr))

// simlarly we have to do it for numbers and boolean 

// function getNumbers(arr){
//     let res = []
//      for(let item of arr){
//         if(typeof(item)=== 'number'){
//             res.push(item)
//         }
//      }
//       return res
// }

// console.log(getNumbers(arr))


// function getBoolean(arr){
//     let res = []

//     for(let item of arr){
//         if(typeof(item) ==="boolean"){
//             res.push(item)
//         }
//     }
//     return res
// }

// console.log(getBoolean(arr))

// so writing this much code is a way to more   we can reduce it using hof 

function getString(item){
     return typeof(item) === 'string';
}


function get( arr , fn){
    let res = [];

    for(let item of arr){
        if(fn(item)){
            res.push(item)
        }
    }
    return res
}

let arr = ["ravi" , 53 , "pandu" , true , 98 , "gandu"]

get(arr, getString)