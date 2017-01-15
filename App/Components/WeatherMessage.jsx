var React = require('react');

// NOTE: Below uses ES6 destructuring -
// Instead of passing props and destructing below just use it in
// the pass
var WeatherMessage = ({temp, city}) => {
	return (
		<h3 className="text-center">It is currently {temp} in {city}</h3>
	)
}


module.exports = WeatherMessage;
