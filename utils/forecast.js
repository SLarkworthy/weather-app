const request = require('request');

const forecast = (longitude, latitude, callback) => {
const url = `http://api.weatherstack.com/current?access_key=08afdbba194305b668e64b03239cdb7b&query=${latitude},${longitude}&units=f`

request({ url: url, json: true }, (error, response) => {
    if (error) {
        callback("Unable to connect to weather service");
    } else if (response.body.error) {
        callback("Unable to find location")
    } else {
       callback(undefined, (response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degress out."));
    }
})
}

module.exports = forecast