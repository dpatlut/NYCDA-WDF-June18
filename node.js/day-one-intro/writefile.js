// Find all the things you can do here : https://nodejs.org/api/

//One of the first things you can do with Node is access the file sturcture of your computer

// Exercise: Command Line Message
// Write a command line app that takes two arguments.
// The first argument is the name of a file and the second argument is the text to write into that file.


//What is REQUIRE doing here?
// https://www.w3schools.com/nodejs/nodejs_modules.asp
const fs = require('fs');

//ARGV RETURNS
//https://nodejs.org/docs/latest/api/process.html
var fileName = process.argv[2];
var text = process.argv[3];

//File System Module: https://nodejs.org/api/fs.html
//run `node writefile.js word.txt thisistextIamwritingtothefile`
fs.writeFile(fileName, text, (err) => {
  if (err) {
    console.log(err);
  } else{
    console.log("itworked")
  };
});
