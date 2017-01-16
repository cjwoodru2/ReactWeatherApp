var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?APPID=6e347d6a45be96e6961dd197c8462ba9&units=imperial" ;
	// api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1111111111
	// 6e347d6a45be96e6961dd197c8462ba9

module.exports = {
	getTemp: function (city) {
		var encodedLocation= encodeURIComponent(city);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res) {
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message)
			} else {
				return res.data.main.temp;
			}
		}, function() {
  throw new Error('Unable to fetch weather.');
});
	}
}
