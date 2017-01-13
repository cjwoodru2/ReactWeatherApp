var React 			= require('react'),
	WeatherForm 	= require('WeatherForm'),
	WeatherMessage 	= require('WeatherMessage'),
	openWeatherMap	= require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false			
		}
	},
	handleSearch: function(city) {
		var that = this;


		
		this.setState({isLoading: true});

		openWeatherMap.getTemp(city).then(function(temp) {
			that.setState({
				city: city,
				temp: temp,
				isLoading: false
			})
		}, function (err) {
			console.log(err);
			that.setState({isLoading: false});
		})

	},
	render: function() {
		var {isLoading, temp, city} = this.state;

		function renderMessage () {
			if(isLoading) {
				return <h3>Loading weather...</h3>
			} else if (temp && location) {
				return <WeatherMessage temp={temp} city={city} />;
			}
		}

		return (
			<div> 
		 		<h2>Weather Component</h2>
		 		<WeatherForm onSearch={this.handleSearch} />
		 		{renderMessage()}

			</div>
		)
	}
});

module.exports = Weather;