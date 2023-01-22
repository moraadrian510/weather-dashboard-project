!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');





setInterval(setTime, 1000);

function setTime() {
var today = dayjs();
 $('#current-weather-header').text(today.format('MMM D, YYYY hh:mm:ss a'));
}

