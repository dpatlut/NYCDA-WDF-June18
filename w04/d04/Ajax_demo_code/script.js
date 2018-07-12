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
axios.get("https://api.jsonbin.io/b/5b478839a5a2f34ea6b4867e").then((response) => {
    console.log(response)
  })


//Combining our knowledge of OOP with our ajax calls

// individual class person
// class Person {
//     constructor(firstName, lastName, age, gender) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.gender = gender
//     }
//   }

//   //Create new person from our AJAX call
//   axios.get("https://jsonbin.io/5b478839a5a2f34ea6b4867e").then((response) => {
//    let data  = response.data 
//    let david = new Person(
//         data["first-name"],
//         data["last-name"],
//         data["age"],
//         data["gender"]
//     )

//     //Add david to the dom
//     let h1 = document.createElement("h1");
//     h1.innerText = david.name
//     document.body.appendChild(h1);
//   })