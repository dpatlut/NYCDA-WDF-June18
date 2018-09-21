//Select my input message form
const form = $('#inputMessage');

//select my message box with all messages
const messagebox = $('#allmessages');

//get a screen name for the user when the first open the page.
const userInput = prompt('Enter a screen name:');

// our local cache of the messages to add to when a message is sent or recieved .
let clientMessages = [];

//Will Add our messages
let addUserBubble = (username, message) => {
  console.log('Printing my own messages')
  messagebox.append( `
  <div class="message user">
  <p class="message-body">
  ${message}
  </p>
  <img src="https://robohash.org/${username}.png?set=set4?&bgset=bg1" alt="avatar" class="avatar">
  <p class="username">${username}</p>
  </div>
  `) 
}

//Will add other peoples messages
let addOtherPeopleBubble = (username, message) => {
  console.log('Printing other peoples messages')
  messagebox.append(`
  <div class="message">
  <img src="https://robohash.org/${username}.png?set=set4?&bgset=bg1" alt="avatar" class="avatar">
  <p class="message-body">
  ${message} 
  </p>
  <p class="username">${username}</p>
  </div>
  `)
}


//Connect to Firebase. This is a function that is provided via the library
const messages = firebase.database().ref();



//subscribe to any value changes on the whole database.
//this is like an event listener. Use once for one time reading.
//This "value" listener is specific to firebase that it provides

messages.on("value", function(snapshot) {
  messagebox.innerHTML = '';

  // dbMessages is the array from firebase
  //snapshot is a object we get back from firebase
  const dbMessages = snapshot.val();
 
  console.log(dbMessages + "This is my db snapshot with my message objects")

  if(dbMessages){
    //loop the messages and display it on the page
    dbMessages.forEach( (data) => {
      console.log("Since I have new messages, let me print them to the screen")
      if (data.username === userInput) {
        console.log("Printing same user message")
        addUserBubble(data.username,data.message);
      } else {
        console.log("Printing other user message")
        addOtherPeopleBubble(data.username,data.message);
      }

    //in english: if this is the last message and it isn't yours
    //   if(index+1 === dbMessages.length && data.username !== userInput){
    //     //meow
    //     document.querySelector('audio').play()
    //   }

    });
    //update our local messages cache with the db.
    clientMessages = dbMessages;
  }
  //move page to the bottom. 
  window.scrollTo(0,document.body.scrollHeight);
});




form.on('submit', (e) => {

  e.preventDefault();

  //add the user's message to the array 
  clientMessages.push({username: userInput, message: e.target.message.value});

  //then set the remote db to it
  messages.set(clientMessages);

  e.target.message.value = '';
});
