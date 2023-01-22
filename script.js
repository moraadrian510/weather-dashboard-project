setInterval(setTime, 1000);

function setTime() {
var today = dayjs();
 $('#current-weather-header').text(today.format('MMM D, YYYY hh:mm:ss a'));
}

