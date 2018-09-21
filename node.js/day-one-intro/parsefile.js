
// Exercise: Zzzzzs
// Using the dict.txt file, make a new file with only the words that start with z 

//We need that FS module again
var fs = require('fs');


//Here we read the file in
fs.readFile('texts/dict.txt', (err, fileContents) => {
    let zWords = [];
    let allWords = fileContents.toString().split('\n');

    for(var i = 0; i < allWords.length; i++){
        if(allWords[i][0] === "z"){
            zWords.push(allWords[i] + '\n')
        }
    }
    
    //Here we write a new file
    fs.writeFile('z.txt', zWords.join("").replace(",", ""), () => {
        console.log('it worked')
    });

});