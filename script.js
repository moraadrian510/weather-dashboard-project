var apiKey = '624172607408572c325d20c8a89e7175'



// gathers weather info for weather widgets.
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');


// sets current time in header
setInterval(setTime, 1000);
vs
function setTime() {
var today = dayjs();
 $('#current-weather-header').text(today.format('MMM D, YYYY hh:mm:ss a'));
}

function getCurrentWeather(city) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        var lon = data.coord.lon 
        var lat = data.coord.lat
        getOneCall(lat, lon)
    })
}

function getOneCall(lat, lon) {
    var url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={minutely,hourly,alerts}&appid=${apiKey}`
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
}

$('#search-btn').click(function(){
    var searchInput = $('#input-search').val()
    console.log(searchInput);
    getCurrentWeather(searchInput)
})