var React = require('react');

var WeatherMessage = React.createClass({
	render: function() {
		var temp;
		var city;
		return (
			<p>It is currently {temp} in {city}</p>
		);
	}
})
	

module.exports = WeatherMessage;