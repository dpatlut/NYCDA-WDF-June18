//JQuery Example - Wont work without url
// $.ajax({
//     url: "SOME URL HERE", 
//     success: (result) => {
//         $("#div1").html(result);
//     }
// });


//Axios Example - Wont work until you put a url 
// axios.get("SOME URL HERE").then((response) => {
//   console.log(response)
// })

//Example data we will be working with:
//JSON Objects - Just like regular objects
//Javascript object notation

// {
//     "first-name" : "David",
//     "last-name" : "Patlut",
//     "age": 70,
//     "gender": "male"
// }

//URLS with JSON data
//Person one: https://api.jsonbin.io/b/5b478839a5a2f34ea6b4867e
//Person two: https://jsonbin.io/5b47885fdd2c022ecda1e7d3 
//All people: https://jsonbin.io/5b47888c4d5ea95c8ba39f13 


//Example call for this data
// axios.get("https://api.jsonbin.io/b/5b478839a5a2f34ea6b4867e").then((response) => {
//     console.log(response.data)
//   }).then(()=>{
//       console.log('THis happens after my axios call finishes and returns the first then callback')
//   })
  
  
//   .catch(function (error) {
//     // handle error
//     alert('HEY THIS API ISNT WORKING')
//   })


//Combining our knowledge of OOP with our ajax calls


// class Daycare {
//     constructor() {
//       this.allOfMyChildrenAreHere = []
//     }
  
//     // defines method add to People class
//     // it accepts a Person object and adds it to the end
//     // of the "allOfMyChildrenAreHere" array
//     add(child) {
//       this.allOfMyChildrenAreHere.push(child)
//     }
  
//     get(name) {
//       return this.allOfMyChildrenAreHere.find((element) => {
//         return element.firstName == name
//       })
//     }
//   }

//   let myDaycare = new Daycare()


// class Child {
//     constructor(firstName, lastName, age, gender) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.gender = gender
//     }
//   }

  

//   //Create new person from our AJAX call
// axios.get("https://api.jsonbin.io/b/5b478839a5a2f34ea6b4867e").then((response) => {
//    let data  = response.data 
//    let orlando = new Child(
//         data["first-name"],
//         data["last-name"],
//         data["age"],
//         data["gender"]
//     )

//     let h1 = document.createElement("h1");
//     h1.innerText = orlando.firstName
//     document.body.appendChild(h1);

//     myDaycare.add(orlando)
//     // return orlando
//   })

//   console.log(myDaycare);