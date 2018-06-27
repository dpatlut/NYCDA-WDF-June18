// Create a for loop that will print out pluses starting with 10 of them down to one.

// I want to start with 10 pluses, saved into a string
// let pluses = "++++++++++";

// We want to remove one plus from our string, 10 times
for(let i=0;i<10;i++){
    //remove one plus from our string of 10 pluses
    console.log(pluses);
    pluses = pluses.slice(0, -1);
    // console.log(pluses.slice(i));
  
  }
  
  for(i = 10; i > 0; i-- ) {
      console.log("+".repeat(i));
  }
  
  

  
  
  // Write a conditional that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, let the user know what the variable was and that it was greater than 10.
  
  let num = 20;
  
  if(num<10){
    alert('Number is less than 10');
  }else{
    // alert(`Number is greater than 10, the num is ${num}`);
  
    alert('Number is greater than 10, the num is '+ num);
  }
  
  
  
  
  let temp = 81;
  let airCon = "off"; 
  if (temp > 80 && airCon == "off") { // If the temperature is warmer than 80, and the air conditioner is off, log "turn the ac on!".
      console.log("turn the ac on!");
  } else if (temp > 80 && airCon == "on") { //  If the temperature is warmer than 80 and the ac is on, log "this thing is broken!". 
      console.log("this thing is broken!");
  } else if (temp < 60 && airCon == "on") { // If the temperature is colder than 60 and the air conditioner is on, log "brrr, turn this thing off".
      console.log("brr, turn this thing off")
  } else { // If the temperature is cooler than 80, and the ac is off, log "not worth the electricity. leave it off." 
      console.log("not worth the electricity. leave it off.")
  }
  
  
  // Running Sum Problem
  let prices = [33, 26, 99, 120, 12, 45];
  let sum = 0;
  
  for(let i=0;i<prices.length;i++){
    sum+=prices[i]
    //sum = sum + prices[i]
  }
  
  
  console.log("The sum is: ", sum);
  
  
  var i = 42;
  console.log(i++); // shows 42
  console.log(i); // shows 43
  
  
  i = 42;
  console.log(++i); // shows 43
  console.log(i); // shows 43
  
  
  
  // 99 crows
  for (i = 99; i >= 1; i--) {
    if(i==1){
      console.log("1 crow on the wall. 1 single crow.\nIt fell down and became a wight.\nThere's no one left to defend Westeros now.")
    }else{
      console.log(`${i} crows on the wall. ${i} crows.\n1 fell down and became a wight.\n${i-1} crows on the wall`)
    }
  }
  
  console.log("1 crow on the wall. 1 single crow.\nIt fell down and became a wight.\nThere's no one left to defend Westeros now.")
  
  
  //Counter Problem
  let arr = [5,10,5,2,2,1,653,5,90,5,2,7,9,20,43,92,1,74]
  
      //We created a new object
     let obj = {}
  
     //Looping through our array 
     for(let i = 0; i < arr.length;i++){
        //On each iteration use the tertiery operator to compare if the value exists or not 
         (obj[arr[i]] != undefined) ? obj[arr[i]]++ : obj[arr[i]] = 1
        //Does 5 exist in our obj object
        //Go into our obj object and set the key of that value to be 1
  
     }
   
  
  
  //Basics of ternary
  1>2 ? console.log('True') : console.log('False')
  
  //The equivilant
  if(1>2){
    console.log('true')
  }else{
    console.log('false')
  }
  
  
  //Checking if a value exists in a obj
  let obj = {
    1: "David",
    2: "hello"
  }
  
  let arr = [1,2,3]
  console.log(obj[arr[1]] != undefined)
  
  
  
  //Other solution
  let arr = [1,2,1,2,5]
  let numberAndTimes = {}
  
  //looping through the array
  for (i = 0; i < arr.length; i++) {
    //setting a variable called num to be the current element in our iteration
    let num = arr[i]
  
    if (numberAndTimes.hasOwnProperty(num)) {
      numberAndTimes[num]++
    } else {
      //Becuase the element does not exist. Create it and make its value equal to 1
      numberAndTimes[arr[i]] = 1;
    }
  
  }
  
    for(let key in numberAndTimes){
         console.log(`${key} exists ${numberAndTimes[key]} times`)
     }
  
  
  
  
  
  let arr = [5,10,5,2,2,1,653];
  let count;
  
  for (let i = 0; i < arr.length; i++) {
    count = 0;
  
    if (arr[i] !== undefined) {
      for (let j = i; j < arr.length; j++) {   
        if (arr[i] === arr[j]) {
          count++;
          if (count !== 1) {
            delete arr[j];
          }
        }
      }
  
      console.log(arr[i] + " exists " + count + " times");
    }
  }
  
  let arr = [1,2,1,2,5]
    //puts the array in order
    arr.sort();
    //i is the index we want to see whether it repeats
  for (let i = 0; i < arr.length; i++){
      //counter counts how many times a number shows up
      let counter = 1;
      //k is what we're comparing i to
      for (let k = i + 1; k < arr.length; k++){
        //is there a match?
        if (arr[i] === arr[k]){
          //if yes, we add one to the counter
          counter++;
          //we also are adding to the index of i so that we don't double count
          i++;
        }
      }
  
      //checking grammar
      if (counter > 1){
      console.log(arr[i] + ' exists ' + counter + ' times.');
      }else{
        console.log(arr[i] + ' exists ' + counter + ' time.');
      }
    }
  
  
  // Reverse a string 
  let str = 'youareadeveloper'
  let newString = ''
  
  for(let i = str.length-1;i>=0;i--){
    newString += str[i]
  }
  
  // s.split("").reverse().join("");
  
  
  console.log(newString)
  
  
  
  
  