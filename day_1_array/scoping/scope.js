
// function outer(){
//     var b = 10
//     inner();
//     function inner(){
//         console.log(b)
//     }
// }

// outer()  /// the output will be 10




// example for scoping 

function outer(){
    var b = 10;

    inner()
    function inner(){
        var b = 1000
        console.log(b)
    }
    console.log(b)
}

outer()