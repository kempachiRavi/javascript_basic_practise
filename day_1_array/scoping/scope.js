
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


function outer(){
    let b = 10
    // console.log(b)

    if(true){
        console.log(b)
        var b = 200        /// give error 
        console.log(b)
    }
    console.log(b)
}

outer()



