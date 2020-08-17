const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=08afdbba194305b668e64b03239cdb7b&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service");
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degress out.");
//     }
// })


//Geocoding
//Address -> lat/long -> weather

const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2xhcmsiLCJhIjoiY2tkeW54ZjdvMWp6ajJzbnNrYTJtcG9yNiJ9.4g7A6Mai6r1T-o9rGVT7Qg&limit=1'

request({ url: geocodingUrl, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to mapbox api");
    } else if (!response.body.features) {
        console.log("Location not found. Try a different search term.");
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(response.body.features[0].center);
    }
})