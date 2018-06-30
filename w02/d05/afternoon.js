let salary = "1000$";

let x = () => {
  // var salary = undefined
  console.log("Original salary was " + salary);
  let salary = "$5000";
  console.log("My New Salary " + salary);
}

x();


//Named Function expression
//Cant really do this with arrow functions
var foo = function bar() { return 12; };
bar();



//Looping hoisting i
for (var i = 0; i < 10; i++) {
    /* ... */
}
console.log(i);  // what will this output?


//Closure
var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();


//Question One
console.log(1 < 2 < 3);
//true < 3
console.log(3 > 2 > 1);
// true > 1 
//what will this console log?

//Bonus - 500 points
let test = (x) => {
  return (function(y){
    console.log(x)
  })(2)
}

//What will this console log?
test(5)