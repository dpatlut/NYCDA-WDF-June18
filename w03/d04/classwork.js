let Student = function(name,grade){
   this.name = name;
   this.grade = grade;

   this.sayName = function(){
     console.log('HELLO MY NAME IS' + this.name)
   }

   this.changeGrade = function(newGrade){
     this.grade = newGrade
   }

   this.complain = function(){
     if(this.grade < 100){
      alert("WHAT THE F*** DAVID");
     }
   }

}

let david = new Student("David", 90)

david.becomeTeacher = function(){
  console.log('I became a teacher')
}

console.log(david)


//Exercises
// Object Literals

// Create an object literal that models each of the following objects with the given properties:

// A Car 
// brand : “ford”
// numOfWheels : 12
// color : “red”

let car = {
  brand: "ford",
  numOfWheels: 12,
  color: 'red'
}

// A Wizard
// universe : “Lord of the Rings”
// powers : [“Regeneration” , “Magic Staff”, “Fire Bolt”]
// age : 106

let wizard = {
  universe: "Lord of the rings",
  powers : ['Regeneration' , 'Magic Staff', 'Fire Bolt'],
  age: 106
}

// A Video Game Level 
// levelOfDifficulty : 5
// isFoggy : true 
// monstersExist : true
	let videoGameLevel = {
    levelOfDifficulty: 5,
    isFoggy: true,
    monstersExist: true
  }
	

// Constructors
// Take one of the following objects you created above and replicate it using a generic constructor function. 
// Instantiate a object literal based off your constructor.  

// Ex : Wizard Gandalf or Video Game Level Lava Map

let Wizard = function(universe, powers, age){
  this.universe = universe;
  this.powers = powers;
  this.age = age;
  this.staff = true;
}

// let gandalf = new Wizard('Lord of the rings', ['fire', 'water'], 108);

gandalf.age = 1;
gandalf.callEagles = function(){
  console.log('THE EAGLES! WON THE SUPERBOWL');
}
gandalf.callEagles()



// Using dot notation change a property value in your object instance.
// Ex : Wizard Gandalf has age 78 and is changed to age 108


// Give your object constructor a useful function, have one of your instance call your new method
// Ex. Wizard can do Fire Attack ( gandalf.fireAttack(); ) 



class Rectangle {

    constructor(height, width, name) {
      this.height = height;
      this.width = width;
      this.name = name;
    }
    
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  let myBox = new Rectangle(100,200, "Davids Box");
  myBox.name
  myBox.material = "Plastic"
  console.log(myBox)
  myBox.calcArea()
  