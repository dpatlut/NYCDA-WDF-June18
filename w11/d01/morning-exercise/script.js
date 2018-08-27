// Use the axios library to get all students from the sei api where the endpoint url is https://sei-api.herokuapp.com/students.

// Loop thru all students returned and create a ul element that houses each student within an li element. Display only their capitalized name within a <strong> tag and what the person is known-for within an <em> tag.


console.log('linked');
let body = document.body;

axios.get('https://sei-api.herokuapp.com/students')
  .then( (response) => {
    // handle success
    // console.log(response)
    let data = response.data;
    console.log(data)
    data.forEach(element => {
        let nameContainer = document.createElement('strong');
        nameContainer.innerText = capitalizeFirstLetter(element.name)
        let knownForContainer = document.createElement('em');
        knownForContainer.innerText = element["known-for"] 
        body.append(nameContainer, knownForContainer);
    });
  })


let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}