// document.addEventListener("DOMContentLoaded", (event) => {
//     alert("The page is loaded!")
//   });


// document.getElementById('container').innerText
// document.getElementById('container').innerText = "<h1>Hello</h1>"

// let newClassName = "woofTwo"
// document.getElementById('dogImage').setAttribute('class', newClassName)

//Create the elements
let body = document.body
let newSectionTag = document.createElement('section');
let newArticleWrapper = document.createElement('article')
let articleHeader = document.createElement('h1')

newArticleWrapper.setAttribute('class', 'newPost');
articleHeader.setAttribute('class', 'articleHeader');
newArticleWrapper.innerText = "THIS IS MY NEW POST";
articleHeader.innerText = "THIS IS MY ARTICLE HEADER"

newArticleWrapper.appendChild(articleHeader);
newSectionTag.appendChild(newArticleWrapper);

body.appendChild(newSectionTag);


//Event Bubbling Issue
let parent = document.getElementById('section');
let divchild = document.getElementById('div-child');
let pchild = document.getElementById('p-child');

parent.addEventListener('click', (event)=>{
    alert('This is the parent event listener')
})

divchild.addEventListener('click', (event)=>{
    alert('This is the div child event listener')
    event.stopPropagation();
})

pchild.addEventListener('click', (event)=>{
    alert('This is the p child event listener')
    //Prevent Bubble
    // event.stopPropagation();
})

let mySection = document.getElementById('eventdemo');
mySection.addEventListener('click', (event) => {
    console.log(event)
    console.log(event.target);
    event.target.innerText = "CHANGE ME PLS"
})

//Event Bubbling Example Practical Example
// let parent = document.getElementById('section');

// parent.addEventListener('click', (event) => {
//     event.target.style.backgroundColor = 'yellow';
//     alert("target = " + event.target.tagName + ", this=" + this.tagName);
//     event.target.style.backgroundColor = ''
// });


// this code only runs when the document is finished loading
// document.addEventListener("DOMContentLoaded", (event) => {
//     let firstLink = document.getElementById("link-1")
//     let paragraph = document.getElementById("paragraph")
  
//     // adds an event listener to the anchor
//     firstLink.addEventListener("click", (e) => {
//         console.log(e);
//       // event represents the event that just took place
//       // prevents default behavior of anchors which is to jump to a different page
//       event.preventDefault()
  
//       // this will occur when the button above is clicked
//       alert("I clicked this button")
//     })



  
//     // loops thru the last two anchors
//     for(let i = 1; i < paragraph.children.length - 1; ++i) {
//       // adds event listeners to the last two anchors
//       paragraph.children[i].addEventListener("click", (event) => {
//         // gets element that was clicked on
//         let currentElement = element.target
  
//         // prevents default anchor behavior
//         event.preventDefault()
  
//         // alerts the content of the current anchor
//         alert(currentElement.innerHTML)
//       })
//     }
//   })