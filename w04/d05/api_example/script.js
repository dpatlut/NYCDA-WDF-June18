//Star Wars API Example

let allVehicles = []

class Vehicle {
    constructor(cargo_capacity, name, model) {
        this.cargo_capacity = cargo_capacity;
        this.name = name;
        this.model = model;
    }
}


axios.get('https://swapi.co/api/vehicles/?search=T-16+skyhopper').then((response) => {
    console.log(response.data.results[0])
    let data = response.data.results[0]
    let newVehicle = new Vehicle(data.cargo_capacity, data.name, data.model)
    allVehicles.push(newVehicle);
}).catch((error) => {
    console.log(error)
})


let vehicleSearchCall = (searchValue) => {
    axios.get('https://swapi.co/api/vehicles/?search=' + searchValue).then((response) => {
        console.log(response.data.results[0])
        let data = response.data.results[0]
        let newVehicle = new Vehicle(data.cargo_capacity, data.name, data.model)
        allVehicles.push(newVehicle);

        //Add to the screen
        document.body.insertAdjacentHTML('beforeend', `<h1>${data.name}</h1>`)
        document.body.insertAdjacentHTML('beforeend', `<h1>${data.model}</h1>`)

    }).catch((error) => {
        console.log(error)
    })
}

//Movie API Example


let movieSearch = (searchValue) => {
    axios.get('http://www.omdbapi.com/?s='+ searchValue+ '&apikey=INSERT YOUR API KEY HERE').then((response) => {
        let data = response.data["Search"]
        
        data.forEach( (element) => {
            document.body.insertAdjacentHTML('beforeend', `<h1>${element.Title}</h1>`)
            document.body.insertAdjacentHTML('beforeend', `<h1>${element.Year}</h1>`)
        });

        //Add to the screen

    }).catch((error) => {
        console.log(error)
    })
}




const formsubmit = document.getElementById('form-search');
formsubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchValue = document.getElementById('search').value
    // vehicleSearchCall(searchValue);
    movieSearch(searchValue);
})


//http://www.omdbapi.com/?s=Star+Wars&apikey=6ea921cc