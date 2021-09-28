var cityList =$("#city-list");
var key = "8dcfe0fcdd0a421ab0189dc0e678b663";
var cityName = document.getElementById("cityname")
var searchBtn = document.querySelector('.btn-main');
// var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=" + key
var topInfo = document.getElementById("top-info");
var forcast = document.getElementById("dayForecast");
var userForm = document.getElementById("user-form");
var generalBtn = document.querySelector(".generalBtn");



function citySearch (event) {
    event.preventDefault()
    var city = cityName.value
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=" + key;
    getApi(requestUrl);
    afterclick = document.createElement("button")
    afterclick.textContent = city
    generalBtn.appendChild(afterclick);
}

userForm.addEventListener("submit", citySearch);
// console.log(citySearch);


function getApi(requestUrl) {
    topInfo.textContent = ""
    fetch(requestUrl)
        .then(function (response){
        return response.json();
        console.log(response);       
    }).then(function (data) {
       renderTopInfo(data) 
       renderForcast(data)
    
    })
}   

function historyBtn(event){
    // console.log(event.target);
    var city = event.target.textContent
    // console.log(city);
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=" + key;
    getApi(requestUrl);
}


generalBtn.addEventListener("click", historyBtn);
console.log(historyBtn);



function renderTopInfo (data) {

    var cityName = document.createElement("h1")
        cityName.textContent = data.name
        topInfo.appendChild(cityName)
        // temp
        var temperature = document.createElement("h5")
        temperature.textContent = data.main.temp
        topInfo.appendChild(temperature)
        // Wind speed
        var wind = document.createElement("h5")
        wind.textContent = data.wind.speed
        topInfo.appendChild(wind)
        // Humidity
        var humidity = document.createElement("h5")
        humidity.textContent = data.main.humidity
        topInfo.appendChild(humidity)

}

function renderForcast(data){
    console.log(data);
    var day1 = document.getElementById("day1");
    var firstDay = document.createElement("h2")
    firstDay.textContent = ".."
    day1.appendChild(firstDay)

    var day2 = document.getElementById("day2");
    var secondDay = document.createElement("h2")
    secondDay.textContent = ".."
    day2.appendChild(secondDay)
}

// for (var i = 0; i < 5; i++)

