var React = require('react');

var WeatherForm = React.createClass({
	render: function() {
		return (
			<div>
				<form>
					<input type="text" ref="city" placeholder="Your city"></input>
					<button>Submit</button>
				</form>
			</div>	
		);
	}
})
	

module.exports = WeatherForm;