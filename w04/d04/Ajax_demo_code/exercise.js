// ```Given the following URL : https://api.myjson.com/bins/bygvt containing a JSON object about your favorite GOT character. 
// Create a AJAX call for that url to grab the JSON data and log the result in your console.
// Loop through the aliases array and console log out the results
// Return the value of 'actor' in the 'playedBy' object.
// Append the name of the actor to the dom to a p element with the id of "my-actor"```

axios.get('https://api.myjson.com/bins/bygvt').then((response) => {
    console.log(response);
    let data = response.data
    data.aliases.forEach( (elementAtEachIteration) => {
        console.log(elementAtEachIteration)
    });

    
    let actor = data.playedBy.actor
    console.log(data.playedBy.actor);

    let ptag = document.createElement('p')
    ptag.innerText = actor
    document.body.appendChild(ptag)
})