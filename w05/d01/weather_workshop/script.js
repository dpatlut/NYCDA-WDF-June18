//Why Templating
// https://stackoverflow.com/questions/18972330/dom-manipulation-vs-templating



//This is my API key and base URL
const apiKey = "38f56eeaaa62ade10b14f72f9018f3e2";
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&units=imperial`;

//Some DOM elements I need to select
//Main form
const form = document.getElementById('search-form');
//Dropdown menu
const optionSelected = document.getElementById('search-dropdown')
//Main input box
const inputMain = document.getElementById('search-input-main');
//Secondary input box
const altOptionInputHidden = document.getElementById('search-input-secondary')
//Main weather info container
const weatherContainer = document.getElementById('weather-content');
//Main search bar container
const searchBarContainer = document.getElementById('search-form-wrapper')


//handlebars template
let source = document.getElementById("entry-template").innerHTML
let template = Handlebars.compile(source)


//I define this outside the event listener just in case the user does not change it 
let option = optionSelected.options[optionSelected.selectedIndex].text;


optionSelected.addEventListener('change', function(e){
    option = optionSelected.options[optionSelected.selectedIndex].text;
    //ternery operator to toggle block/hidden
    (option !== 'Zip Code') ? (altOptionInputHidden.style.display  = "inline-block") : (altOptionInputHidden.style.display = "none");
})


form.addEventListener('submit', function(e){
    e.preventDefault();

    //https://stackoverflow.com/questions/610336/retrieving-the-text-of-the-selected-option-in-select-element
    //THEElement.options[THEElement.selectedIndex].text
    let queryString = "";
    let mainInput = inputMain.value;

    if(option === 'Zip Code'){
        queryString = `&zip=${mainInput}`
    }else{
        //Careful with country codes, US not USA for country code
        let countryInput = altOptionInputHidden.value
        queryString = `&q=${mainInput},${countryInput}`
    }

    axios.get(`${baseUrl}${queryString}`).then((response) => { 
        let data = response.data
        let weather = {
            temp: data.main.temp,
            minTemp: data.main.temp_min,
            maxTemp: data.main.temp_max,
            humidity: data.main.humidity,
            wind: data.wind.speed
        }
        console.log(weather);

        searchBarContainer.style.animation = 'fadeOut 1s forwards';
        searchBarContainer.style.display = 'none';

        setTimeout(()=>{

            let generatedHandlebarsHTML = template(weather)
            console.log(generatedHandlebarsHTML)
            weatherContainer.innerHTML = generatedHandlebarsHTML

        }, 1000)
    });

})

// let convertTemp = (tempf) => {
//     return (tempf - 32) * (5/9)
// }


Handlebars.registerHelper('convert', function(tempf) {
    let newCTemp = Math.ceil((parseInt(tempf) - 32) * (5/9))
  
    return new Handlebars.SafeString(
        newCTemp + " C"
    );
  });


//Thought Process.
//1. Build out HTML and some basic styles for search bar
//2. Build out submit call with getting data
//3. Fix data by building convert temp function
//4. Build out toggle for dropdown
//5. Build out query string for toggle
//6. Build out template for handlebars + appending/hiding content