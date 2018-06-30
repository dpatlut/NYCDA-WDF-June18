//FizzBuzz

let fizzbuzz = () => {
  let x = 0;
  while(x<=100){
    if(x%3===0 && x%5===0){
      console.log('fizzbuzz')
    }else if(x%3===0){
      console.log('fizz')
    }else if(x%5===0){
      console.log('buzz')
    }else{
      console.log(x)
    }
  }
  x++ 
}



let fizzbuzz = () => {
    for (let i=1; i<=15; i++) {
    switch(true) {
  
      case (i%3!=0 && i%5!==0):
      console.log(i);
      break;
  
      case(i%3===0 && i%5===0):
      console.log('FizzBuzz');
      break;
  
      case (i%3===0): 
      console.log('Fizz');
      break;
  
      case(i%5===0):
      console.log('Buzz');
      break;
  
    }
  }
}



//Recursive solution
let countDown = (num) => {
  if (num === 0){
    return num
  }else if(num % 3 === 0 && num % 5 === 0){
     console.log('FizzBuzz ' + num);
  }else if(num % 3 === 0){
    console.log('fizz '+ num);
  }else if(num % 5 === 0){
    console.log('Buzz ' + num);
  }else{
     console.log(num)
  }
  countDown(num-1)
}
countDown(100)
//Challenge: refactor to go from 0 to n rather than n to 0





//Piglatin

let pigLatin = (text) => {
  //trim removes whitespace
  text = text.trim();
  //turns the text into an array based on space
  let oldTextArray = text.split(" ");
  console.log(oldTextArray)
  //init new array
  let newTextArray = [];
  //loop through the old text array
  for (x = 0; x < oldTextArray.length; x++) {
    newTextArray.push(oldTextArray[x].slice(1) + "-" + oldTextArray[x].slice(0,1) + "ay");
  }
  console.log(newTextArray)
  //joins the new array together
  console.log(newTextArray.join(" "));
}

// pigLatin('simple blah')


let pigLatin = (str) =>{
  str = str.toLowerCase()

  let vowel = 'aeiou';
  //check if string has any vowels
  if(vowel.indexOf(arr[0]) > -1){
    return str + 'ay'
  }
  
  if(vowel.indexOf(str[1])!=-1  ){
    return str.slice(1) + str[0] + 'ay'
  }else{
    for(let i = 0; i<= str.length; i++){
      if(vowel.indexOf(str[i]) >-1){
        return str.slice(i) + str.slice(0,i) + 'ay'
      }
    }
  }
}


//palindrome
// Write a JavaScript function that takes in a string and checks if it is a palindrome.

let palinDro = (userInput) =>{
  let smallTxt = userInput
  //reverse a string algo
  let arr = smallTxt.split("").reverse().join("");

  if(smallTxt === arr){
    console.log("congratulations! you found a palindrome!");
  }else{
    console.log("thats not a palindrome...");
  }
}


// palinDro('madam')


let Palindrome = (string) => {
   if(string == string.split("").reverse().join("")) {
       console.log(string + "is a palindrome.");
   } else {
       console.log(string) + "is not a palindrome.");
   }
}


let palindrome = (str) => {
  let revStr = "";
  
  for (let i = str.length - 1; i >= 0; i--){
    revStr += str[i];
  }

  if(str === revStr){
    return true;
  } else {
    return false;
  }
}


//Greatest Common Divisor

let gcd = (a,b) => {
    //declare two new arrays
    let divOneArray = [];
    let divTwoArray = [];

    for(let i=1;i<=a;i++){
      //check if the number is a divisor of a
      if(a%i === 0){
        //push it into the divisor array
        divOneArray.push(i);
      }
    }

    for(let i=1;i<=b;i++){
      //check if the number is a divisor of ab
      if(b%i === 0){
        //push it into the divisor array
        divTwoArray.push(i);
      }
    }

    console.log(divOneArray);
    console.log(divTwoArray);

    //compare array lengths to choose which array we want to loop through
    let smallArray;
    let bigArray;
    //Big array will become the array with more elements
    if(divOneArray.length> divTwoArray.length){
      smallArray = divTwoArray;
      bigArray = divOneArray;
    }else{
      smallArray = divOneArray;
      bigArray = divTwoArray;
    }

    //Loop through the smallArray and check if those values exist inside of the big array and then find the biggest value in the new array we created
    let commonValues = [];

    for(item of smallArray){
      if(bigArray.indexOf(item)> -1){
        commonValues.push(item)
      }
    }

    return commonValues[commonValues.length-1]
}

// gcd(714, 21)





let greatestCommonDivisor = (a,b) => {
  let divisor = 2, 
  greatestDivisor = 1;

  if (a < 2 || b < 2)
     return 1;
  
  while(a >= divisor && b >= divisor){
   if(a %divisor == 0 && b% divisor ==0){
      greatestDivisor = divisor;      
    }
   divisor++;
  }
  return greatestDivisor;
}

greatestCommonDivisor(69,169)




//recursive solution
let greatestCommonDivisor = (a, b) => {
    if(b == 0){
      return a;
    }else{
      console.log('----------------------')
      console.log("A = " + a)
      console.log("B = " + b)
      console.log("A % B = " + a%b)
      console.log('----------------------')
      return greatestCommonDivisor(b, a%b);
    }
  }
  
   greatestCommonDivisor(14,21)
  