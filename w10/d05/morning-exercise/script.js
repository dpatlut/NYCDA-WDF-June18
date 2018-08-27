  
// Create a function in javascript named compare that accepts an array of numbers called numbers and an integer called value. This function should return an array of arrays of size 3 where the first element stores an array of all numbers that are less than value, the second element are all numbers equal to value and the third element are all numbers greater than value.




let compare = (numbers, value) => {
    let storage = [[],[],[]]
  
    numbers.forEach( (singleNumber) => {
      if(singleNumber === value){
        storage[1].push(value)
      }else{
        singleNumber > value ? storage[2].push(singleNumber) : storage[0].push(singleNumber)
      }
    })
  
    return storage
  }
  
  
  let compare = (arr, value) => {
    return [arr.filter(arrNum => arrNum < value), 
    arr.filter(arrNum => arrNum === value),
    arr.filter(arrNum => arrNum > value)];
  }
  
  
  // // compare([10, -30, -45, 4, 21, -30], -30) // [[-45], [-30, -30], [10, 4, 21]]
  
  
  
  
  // Create a function called flatten that accepts an array of arrays named unflattenedArray and returns an array of all numbers within unflattenedArray without any inner arrays.
  
  // flatten([[9], [42, 12, -1], [-9, 1001, 2], [23, 56]]) // [ 9, 42, 12, -1, -9, 1001, 2, 23, 56 ]
  // Note: The array of arrays can be of any length. Assume the arrays of arrays goes only one level deep. Meaning you cannot pass in something like [[-4, 92], [10, [-34, 6]]]
  
  
  function flatten(unflattenedArray) {
      return unflattenedArray.reduce(function(acc, curr) {
         console.log(acc)
          return acc.concat(curr);
      });
  }
  
  
   flatten([[9,2], [42, 12, -1], [-9, 1001, 2], [23, 56]])
  
  const flatten = (unflattenedArray) => [].concat(...unflattenedArray);
  