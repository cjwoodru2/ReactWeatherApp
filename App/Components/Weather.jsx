var React 				= require('react'),
	WeatherForm 		= require('WeatherForm'),
	WeatherMessage 	= require('WeatherMessage'),
	openWeatherMap	= require('openWeatherMap'),
	ErrorModal			= require("ErrorModal");

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(city) {
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(city).then(function(temp) {
			that.setState({
				city: city,
				temp: temp,
				isLoading: false
			})
		}, function (e) {
			console.log(e);
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});

	},
	render: function() {
		var {isLoading, temp, city, errorMessage} = this.state;

		function renderMessage () {
			if(isLoading) {
				return <h3 className="text-center">Loading weather...</h3>
			} else if (temp && location) {
				return <WeatherMessage temp={temp} city={city} />;
			}
		}
		function renderError () {
			if(typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (
			<div>
		 		<h1 className="text-center page-title">Get Weather</h1>
		 		<WeatherForm onSearch={this.handleSearch} />
		 		{renderMessage()}
				{renderError()}

			</div>
		)
	}
});

module.exports = Weather;
