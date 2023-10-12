
// function outer(){
//     var b = 10
//     inner();
//     function inner(){
//         console.log(b)
//     }
// }

// outer()  /// the output will be 10




// example for scoping 

// function outer(){
//     var b = 10;

//     inner()
//     function inner(){
//         var b = 1000         // output  1000,10
//         console.log(b)
//     }
//     console.log(b)
// }

// outer()

//  hoisting example
// console.log(a);
// let a;
// a = 100;
// console.log(a);


// function outer(){
//     var b  = 10
//     {
//         let b = 1000
//         console.log(b)   //// output     1000,10
//     }
//     console.log(b)
// }

// outer()


//  function outer(){
//         var b  = 10
//         {
//             var b = 1000    /// output in case of var   will be 1000,1000
//             console.log(b)   
//         }
//         console.log(b)
//     }
    
//     outer()


// function bahar (){
//     let a = 10
//     andar()
//     function andar(){
//         console.log(a)   /// let aur var dono k case me 
//     }
// }

// bahar()

// advance


// function outer(){
//     var b = 10
//     // console.log(b)

//     if(true){
//         console.log(b)
//         let b = 200        /// give error 
//         console.log(b)
//     }
//     console.log(b)
// }

// outer()


// function outer(){
//     var b = 10
//     console.log(b)

//     if(true){
//         console.log(b)
//         var b = 200        // outoput will be 10,10,200,200
//         console.log(b)
//     }
//     console.log(b)
// }

// outer()


// function outer(){
//     let b = 10
//     // console.log(b)

//     if(true){
//         console.log(b)
//         var b = 200        /// give error 
//         console.log(b)
//     }
//     console.log(b)
// }

// outer()

// function outer(){
//     var b = 10
//     // console.log(b)

//     if(true){
//         console.log(c)
//         let c = 200        /// give reference error cannot access c before initilixing
//         console.log(b)
//     }
//     console.log(b)
// }

// outer()

// function outer(){
//     let b = 10
//     console.log(b)

//     if(true){
//         console.log(b)
//         let b = 200        /// give 10 first then reference error cannot access b before initlization 
//         console.log(b)
//     }
//     console.log(b)
// }

// outer()

// function outer(){
//     let b = 10
//     console.log(b)

//     if(true){
//         console.log(b)
//          b = 200            // output 10,10,200,200
//         console.log(b)
//     }
//     console.log(b)
// }

// outer()

// function outer(){
//     var a = 10
//     console.log(a)       ///  output error  line 129   ReferenceError: a is not defined at scope.js:129:13
//     function inner(){
//         console.log(a)
//         var a = 200;
//         console.log(a)
//     }
//     console.log(a)
// }
// console.log(a)
// outer()


// function outer(){
//     var a = 10
//     console.log(a)       ///  output 10,10   because inner function hasent been called
//     function inner(){
//         console.log(a)
//         var a = 200;
//         console.log(a)
//     }
//     console.log(a)
// }
// // console.log(a)  situation 1 
// outer()

// function outer(){
//     var a = 10
//     console.log(a) 
    
//     inner()      // situatiion 2              
//         function inner(){              ///   output  10,un,200,10
//         console.log(a)
//         var a = 200;
//         console.log(a)
//     }
//     console.log(a)
// }

// outer()



// function outer(){
//     let a = 10
//     console.log(a)

//     inner()
//     function inner(){

//         let a = 100
//         console.log(a)
//     }

//     console.log(a)
// }

// outer()    //////////  out put 10,100,10
