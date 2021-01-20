var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

request.send();

request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let lat = data[i].latlng[0];
        let lang = data[i].latlng[1];
        let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lang + "&appid=09e72d67ba64b3ce2c7389bdaae3ec80"
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.send();
        request.onload = function() {
            var data = JSON.parse(this.response);
            console.log(data.weather);
            console.log(data.main.temp)
        }
    }
}