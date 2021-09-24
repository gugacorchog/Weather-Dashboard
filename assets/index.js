var apiKeys = "8dcfe0fcdd0a421ab0189dc0e678b663";
var city;
var searchBtn = document.querySelector('.btn-main');
var bnt1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var bnt7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var requestUrl = 'api.openweathermap.org/data/2.5/weather?q=Chicago&appid=8dcfe0fcdd0a421ab0189dc0e678b663'

function citySearch () {
    searchBtn.valeu = requestUrl;
    searchBtn.textContent = requestUrl;
}

searchBtn.addEventListener("click", citySearch);
console.log(citySearch);



