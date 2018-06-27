// Function with arguments
function addAndMultiplyByTwo(numberOne, numberTwo) {
    console.log(numberOne)
    console.log(numberTwo)
    return numberOne + numberTwo * 2
  }
  
  addAndMultiplyByTwo = (numberOne, numberTwo) => {
    return numberOne + numberTwo * 2
  }
  
  addAndMultiplyByTwo(5,2);
  //You can call only one of the arguments but the other will be undefined
  addAndMultiplyByTwo(5);
  
  //Function for looping arrays
  function logArrayWithWords(array) {
    for(let i = 0; i < array.length; i++) {
      console.log(`The value of index ${i} is ${array[i]}`)
    }
  }
  
  logArrayWithWords = (array) => {
    for(let i = 0; i < array.length; i++) {
      console.log(`The value of index ${i} is ${array[i]}`)
    }
  }
  
  logArrayWithWords(["D", "A", "V", "E"])
  
  //Function with no params
  function displayMyName() {
    if(10>5){
      return "David Patlut"
    }else{
      return "Blah"
    }
    console.log('Hello World')
  }
  
  let displayMyName = () => {
    if(10>5){
      return "David Patlut"
    }else{
      return "Blah"
    }
    // (10>5) ? "David Patlut" : "Blah"
    console.log('Hello World')
  }
  
  //You can also save the function to a variable
  let x = displayMyName();
  x();
  
  
  
  
  
  //Exercises #1
  
  function nycdaWelcome(name){
    return `Welcome to NYCDA ${name}! Enjoy your stay!`;
  }
  
  // nycdaWelcome('David Patlut');
  // nycdaWelcome('Jazmine');
  
  
  function brokenCalculator(numOne, numTwo){
    return numTwo*3;
  }
  
  // brokenCalculator("", 5);
  
  function lineThemUp(numOne, numTwo, numThree){
    return [numOne, numTwo, numThree];
  }
  
  // lineThemUp(1,2,3);
  
  
  //arrow functions
  //function with one line and params
  let funcName = (params) => params + 2
  // one line no params
  let funcName = () => 2
  
  //multi line function
  let funcName = (params) => {
    let x = 5;
    return params;
  }
  
  // funcName();
  
  
  //Default Params
  let defaultArgs = (argOne, argTwo = 8) => {
    return argOne + argTwo
  }
  
  // defaultArgs(1,1)
  
  //Functions inside functions
  function multiplyByThree(number) {
    return number * 3
  }
  
  function addTwo(number) {
    return number + 2
  }
  
  function addTwoMultiplyByThree(number) {
    return multiplyByThree(addTwo(number))
  }
  
  
  let multiplyByThree = (number) => number*3
  let addTwo = (number) => number+2
  let addTwoMultiplyByThree = (number) => multiplyByThree(addTwo(number))
  
  // addTwoMultiplyByThree(5);
  
  
  
  //Scope
  let name = "david"
  let myAge = 894093
  
  let scopeCheck = () => {
    // name is available in this function
    let myAge = 800;
    return name + "patlut"
  }
  
  let other = () => {
    // console.log(myAge)
    let myAge = 900;
    console.log(myAge)
  }
  
  // console.log(name)
  // scopeCheck() // david patlut
  // console.log(name)
  
  let name = "denisse" // will give you an error because it's already defined in the global scope
  console.log(myAge);
  // other();
  
  
  
  //block level scope
  let blockscope = "This is the og block scope statement"
  
  let test = () => {
    let x = 50;
    if(x>30){
      let blockscope = "This is block scoped"
      console.log(blockscope)
    }else{
      console.log('blah')
      console.log(blockscope)
    }
  
    console.log(blockscope)
  }
  
  // test();
  
  
  //Name collision
  
  function returnName() {
    return "fizal"
  }
  
  //This will take over the name of the original decleration
  function returnName() {
    return "david"
  }
  
  //No longer an issue with ES6
  let returnName = () => {
    console.log('David')
  }
  
  let returnName = () => {
    console.log('Fizal')
  }
  
  
  // // avoid doing this because you can confuse yourself
  // returnName() // fizal
  
  
  
  //Hoisting
  function petName(name) {
    return "My pet's name is " + name
  }
  
  // this works
  petName("Optimus Prime")
  
  
  // this also works - AVOID
  petName("Optimus Prime")
  
  function petName(name) {
    return "My pet's name is " + name
  }
  
  
  //Exercises
  let royalizer = (name,gender) => {
    if(gender === "female"){
      return `Her Majesty ${name}`
    }else if (gender === "male"){
      return `His Majesty ${name}`
    }else{
      return `Thier Majesty ${name}`
    }
  }
  
  // royalizer('David', 'male')
  
  // Door 1 will give the user a brand new car
  // Door 2 will give the user a nycda t-shirt
  // Door 3 will turn into a blackhole and teleport you to antarctica
  
  let magicDoor =(door) => (door==1)? `You won a brand new car` : (door==2) ? `You won a NYCDA shirt` : `You getting teleported to Antartica`
  
  // magicDoor(2);
  
  
  
  
  //Callback functions
  function runCodeOnNumber(specialFunction) {
    let number = 2
  
    return specialFunction(number)
  }
  
  
  runCodeOnNumber(function(number){
    return number + 5
    }) // 7
  
  
  
  let add = (numOne, numTwo) => numOne + numTwo
  
  let doTwoThings = (argOne, argTwo, firstFunc) => {
    return firstFunc(argOne, argTwo)
  }
  doTwoThings(2, 3, add)
  
  
  
  let runCodeOnNumber = (callBackFunction) => {
    let number = 2
    return callBackFunction()
  }
  
  runCodeOnNumber(() => {return "david"})
  


//callback functions

function add(numOne, numTwo) {
  return numOne + numTwo
}

function multiply(numOne, numTwo) {
  return numOne * numTwo
}

function doTwoThings(argument1, argument2, firstFunction, secondFunction) {
  return secondFunction( firstFunction(argument1, argument2), 5)
}



let add = (numOne, numTwo) => numOne + numTwo
let multiply = (numOne, numTwo) => numOne * numTwo

let doTwoThings = (argOne, argTwo, firstFunc, secondFunc) => {


  return secondFunc(firstFunc(argOne, argTwo), 5)

}


doTwoThings(2, 3, add, multiply)


//Closures
function functionWithinAFunction() {
  function logStuff() {
    console.log("Logging stuff")
  }

  return logStuff()
}

functionWithinAFunction()


let closure = () => {
  let closureVar = "David"
  let name = "Global"
  // console.log(logStuffScope);

  let logStuff = () => {
    let logStuffScope = "Patlut"
    let name = "Patlut"
    console.log(name)
  }

  return logStuff();
}

closure();