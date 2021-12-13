
document.addEventListener('DOMContentLoaded', cityWeather)
function weatherDataFetch (city) {
    var key = '57999fc42be802254804f9e211a3bc24';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=57999fc42be802254804f9e211a3bc24')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);

        })
        .catch(function (){

        })

}
function cityWeather(e) {
    weatherDataFetch( 'Tallinn');
}