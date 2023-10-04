//how to create an empty array


// ans: In JavaScript, we can create an array in different ways. Let us see different ways to create an array. 
//It is very common to use const instead of let to declare an array variable. If you ar using const it
// means you do not use that variable name again.

const arrr = []
console.log(arrr)

// how to create arrays with values

// const ravi = [12,23,45,55,66,77,77,77,]
const pandu = ["eaafa", "pandu", "gandu"]
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
//const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
//const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// now how to print array list and its length
console.log('numbers:', numbers)
console.log("number length:", numbers.length)
// console.log("fruits", fruits)
// console.log("fruit length", fruits.length)



/// ptr: arrays can have values of different datatypes
const diff_values = [
    'ravi',
    250,
    true,
    {country: 'finland', city: ' pagaop'},
    {skills:['html','css','js','react']}

    ]

    console.log(diff_values)


//  ccreating an array using split

let ravi = 'ravipratapsingh'
const charactersinravi = ravi.split('')
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charactersinravi)
console.log(charsInJavaScript)


let pr = "pradeepsinghpal"
const cracters = pr.split("")
console.log(cracters)
console.log(cracters.length)


/// Accessing array items using index

const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']
console.log(animalProducts[0])
console.log(animalProducts[1])
console.log(animalProducts[2])
console.log(animalProducts[3])

let lastindex = animalProducts.length-1
console.log(animalProducts[lastindex])


// eg:2
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ] // List of countries

  console.log(countries.length)// to print the legth of an arrray 
  console.log(countries)// to print the list of whole array
  console.log(countries[0])// to print the first index
  console.log(countries[6])
  let lastin = countries.length-1
  console.log(countries[lastin])



  /// modifiying array element
  //  An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.
  const numb = [1,2,3,4,5]

  numb[0] = 10   // changing 1 at index 0 to 10
  numb[1] = 20   // changing 2 at index 1 to 20

  console.log(numb)



  /// Methos to manipulate array
  // There are different methods to manipulate an array.
  // These are some of the available methods to deal with arrays:
  //Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

  ///fill: Fill all the array elements with a static value
const arr = Array() // creates an an empty array
console.log(arr)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

// to fill those arrays
const eightXValues = Array(8).fill('x')
const eight0values = Array(8).fill(0)
console.log(eight0values)
console.log(eightXValues)


///Concatenating array using concat
//eg:1
const first = [1,2,3]
const second = [4,5,6]
const third = first.concat(second)
console.log(third)


//eg: 2
const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruits.concat(vegetables)                // concatenate the two arrays

console.log(fruitsAndVegetables)

///Adding item to an array using push
//Push: adding item in the end. To add item to the end of an existing array we use the push method.

fruits.push('kivi')
console.log(fruits)

///Removing the end element using pop 
//pop: Removing item in the end.

fruits.pop()
console.log(fruits)


///Removing an element from the beginning
//shift: Removing one array element in the beginning of the array.
fruits.shift()
console.log(fruits)

///Add an element from the beginning
//unshift: Adding array element in the beginning of the array.
fruits.unshift('lolipop')
console.log(fruits)

///Reversing array order
//reverse: reverse the order of an array.
fruits.reverse()
console.log(fruits)

///Sorting elements in array
//sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
fruits.sort()
console.log(fruits)



///Array of arrays
//Array can store different data types including an array itself. Let us create an array of arrays
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 5]

// const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
// console.log(arrayOfArray[0]) // [1, 2, 3]
const arrOfArr = [[1,2,3],[1,4,9]]
console.log(arrOfArr)

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]


 // hello my name is ravi