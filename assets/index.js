var cityList =$("#city-list");
var key = "8dcfe0fcdd0a421ab0189dc0e678b663";
var City
var searchBtn = document.querySelector('.btn-main');
var bnt1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var bnt7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=key"
var topInfo = document.getElementById("top-info");
var forcast = document.getElementById("dayForecast");

// "https://api.openweathermap.org/data/2.5/weather?q=" +cityName+ "&appid=" + key;


function citySearch () {
    searchBtn.valeu = requestUrl;
    searchBtn.textContent = requestUrl;
}

searchBtn.addEventListener("click", citySearch);
console.log(citySearch);


function getApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response){
        return response.json();
        console.log(response);       
    }).then(function (data) {
        console.log(data);
        // city name
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
        // UV idex ????
        var uvIndex = document.createElement("h5")
        uvIndex.textContent = data.main.humidity
        topInfo.appendChild(uvIndex)
    })
}   

