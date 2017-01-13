var React = require('react');

// NOTE: Below uses ES6 destructuring -
// Instead of passing props and destructing below just use it in
// the pass
var WeatherMessage = ({temp, city}) => {
	return (
		<p>It is currently {temp} in {city}</p>
	)
}
	

module.exports = WeatherMessage;