//Recursion
// // WE WILL NOT BE REQUIRING YOU KNOW THIS BUT...
// //  IT IS PRETTY COOL
// function recursiveSum(array) {
//   if(array.length == 1) {
//     // if its down to the last element then return
//     return array[0]
//   }
  
//   // gets removes the first element of the array
//   let first = array[0]
//   array = array.slice(1)

//   return first + recursiveSum(array)
// }

// // wut D-:
// console.log(recursiveSum([1,2,3,4])) // 10


// arr = [1,2,3]
// console.log(arr)
// arr = arr.slice(1)
// console.log(arr)


// 0,1,1,2,3,5,8,13


let fibonacci = (n) => {
    let fibo = [0, 1];
    
    if(n === 0 ) return 0
    // if (n <= 3) return 1;
  
    for (let i = 2; i <=n; i++ ){
     fibo[i] = fibo[i-1]+fibo[i-2];
    }
  
    //fibo[2] = fibo[2-1] + fibo[2-2]
    //fibo[2] = fibo[1] + fibo[0]
    //fibo[2] = 1 + 0
    //fibo[2] = 1
    //fibo is now [0,1,1]
  
    //fibo[3] = fibo[3-1] + fibo[3-2]  
    //fibo[3] = fibo[2] + fibo[1]
    //fibo[3] = 1 + 1 
    //fibo[3] = 2
    //fibo is now [0,1,1,2]
  
    //fibo[4] = fibo[4-1] + fibo[4-2]  
    //fibo[4] = fibo[3] + fibo[2]
    //fibo[4] = 2 + 1 
    //fibo[4] = 3
    //fibo is now [0,1,1,2,3]
  
    //we return n-1 becuase our array starts at 0 and our counting starts at 1
     console.log(fibo)
     return fibo[n-1];
  }
  
  // fibonacci(6); // should give 5
  
  
  // function fibonacci(n){
  //   var fibo = [0, 1];
    
  //   if(n === 0) return 0
  //   // if (n <= 3) return 1;
  
  //   for (var i = 2; i <=n; i++ ){
  //    fibo[i] = fibo[i-1]+fibo[i-2];
  //   }
  
  
  //  return fibo[n-1];
  // } 
  
  
  let fibonacci = (n) => {
     if(n === 1){
      return 0;
     }else if(n === 2){
       return 1
     }
     else{
      return fibonacci(n-1) + fibonacci (n-2);
    }  
  }
  
  fibonacci(50)
  
  
  
  
  
  
  
  
  
  //Solution with Array
  // let movies_flight = (flight_length, movie_lengths) => {
  //     //define a new array called movie_map. In here I am going to be storing values
  //     let movie_map = [];
  
  //     //Loop through the movie_lengths array
  //     for (let i = 0; i < movie_lengths.length; i++) {
  //       //on each iteration I am going to check if the movie_map array INCLUDES a value that is equal to the flight_length - the current iterations movie length.
  //         if ( movie_map.includes(flight_length - movie_lengths[i]) ){
  //             return true;
  //         }
  //         movie_map[i] = movie_lengths[i]
  //     }
  //     return false;
  // }
  
  // movies_flight(60, [50, 90, 10, 20, 80])
  
  
  
  //Double loop Solution
  // let movieLengths = [94, 89, 84, 85, 38, 23, 48, 60, 54, 62, 38, 89, 23, 41, 43, 72, 45, 32, 53, 13, 61];
  
  // let flightMovies = (flightLength, movieLength) => {
  // 	for (let i = 0; i < movieLengths.length; i++) {
  // 		for (let j = i + 1; j < movieLengths.length; j++) {
  //       if (movieLengths[i] + movieLengths[j] === flightLength) {
  //         return true;
  //       }
  //     }
  // 	} return false;
  // };
  
  // console.log(flightMovies(101, movieLengths));
  
  
  
  // let movieSelectionB = (flightLength, movieLengths) => {
  //   //initiate a loop that loops through the movie lengths
  //   for (a = 0; a < movieLengths.length; a++) {
  //     //using indexof to check if an instance exists of the flightlength - the current movie
  //     if (movieLengths.indexOf((flightLength - movieLengths[a]), a+1) !== -1) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  
  // movieSelectionB(60, [1,2,70,10,50])
  
  
  const moviePair = (flightMinutes, movieLengths) => {
      const dict = {};
  
      for (let i of movieLengths) {
          // if the value is in the dict, then there has been a match
          if (dict[i]) return true
  
          if (dict[flightMinutes-i] === undefined) {
              // if the difference is not in dict, create it
              dict[flightMinutes-i] = i;
          }
      }
  
      // if we got up to here, then it means we went through the whole array and we could't find a pair
      return false;
  }