var cityList =$("#city-list");
var key = "8dcfe0fcdd0a421ab0189dc0e678b663";
var cityName = document.getElementById("cityname")
var searchBtn = document.querySelector('.btn-main');
// var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=" + key
var topInfo = document.getElementById("top-info");
var forcast = document.getElementById("dayForecast");
var userForm = document.getElementById("user-form");
var generalBtn = document.querySelector(".generalBtn");
// var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");


function citySearch (event) {
    event.preventDefault()
    var city = cityName.value
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=metric&appid=" + key;
    getApi(requestUrl);
    getForecastData(city);
    afterclick = document.createElement("button");
    afterclick.setAttribute("class", "btn btn-secondary col-12 my-2");
    afterclick.textContent = city
    generalBtn.appendChild(afterclick);
}

userForm.addEventListener("submit", citySearch);
// console.log(citySearch);
function renderForcast(data){
    var dayForecast = document.getElementById("dayForecast");
    dayForecast.innerHTML = ""

    for (var i = 0; i < data.list.length; i += 8) {

        console.log(data.list[i]);
        // class="" id="day1"
        var day = document.createElement("div")
        day.setAttribute("class", "col forecast bg-primary text-white ml-3 mb-3 rounded mt-2")
        day.setAttribute("id", "day1")


        var temp = document.createElement("h6")
        temp.textContent = "Temp: " + data.list[i].main.temp + " ℃"
        
        var wind = document.createElement("h6")
        wind.textContent = "Speed: " + data.list[i].wind.speed + "MPH"

        var humidity = document.createElement("h6")
        humidity.textContent = "Humidity" + data.list[i].main.humidity + "%"

        day.appendChild(temp)
        day.appendChild(wind)
        day.appendChild(humidity)
        dayForecast.appendChild(day)

    }

   

    
}
function getForecastData(city) {
    // forcast.textContent = requestUrl ??????
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" +city+ "&units=metric&appid=" + key;
    fetch(requestUrl)
    .then(function (response){
            
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        renderForcast(data)
    })
}

function getApi(requestUrl) {
    topInfo.textContent = ""
    fetch(requestUrl)
        .then(function (response){
        return response.json();
        console.log(response);       
    }).then(function (data) {
       renderTopInfo(data) 
    //    renderForcast(data)
    
    })
}   

function historyBtn(event){
    // console.log(event.target);
    var city = event.target.textContent
    // console.log(city);
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=metric&appid=" + key;
    getApi(requestUrl);
}


generalBtn.addEventListener("click", historyBtn);
console.log(historyBtn);



function renderTopInfo (data) {

    var cityName = document.createElement("h1")
        cityName.textContent = data.name 
        topInfo.appendChild(cityName)
        // temp
        var temperature = document.createElement("h6")
        temperature.textContent = "Temp: " + data.main.temp + " ℃"
        topInfo.appendChild(temperature);
        // Wind speed
        var wind = document.createElement("h6") 
        wind.textContent = "Wind: " + data.wind.speed + " MPH"
        topInfo.appendChild(wind)
        // Humidity
        var humidity = document.createElement("h6")
        humidity.textContent = "Humidity: " + data.main.humidity + " %"
        topInfo.appendChild(humidity)                       



function getForecastData(city) {
    // forcast.textContent = requestUrl ??????
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" +city+ "&appid=" + key;
    fetch(requestUrl)
    .then(function (response){
            
        return response.json();
    })
    .then(function (data) {
        renderForcast(data)
    })
}

searchBtn.addEventListener("click", getForecastData)


// for (var i = 0; i < 5; i++)

// var lat = response.data.coord.lat;
//         var lon = response.data.coord.lon;
//         var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + lat + "&lon=" + lon + "&appid=" + key + "&cnt=1";
//         var UVIndex = document.createElement("span");
//             UVIndex.setAttribute("class","badge badge-danger");
//             UVIndex.textContent = response.data[0].value;
//             currentUVEl.textContent = "UV Index: ";
//             currentUVEl.append(UVIndex);
}