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
			errorMessage: undefined,
			location: undefined,
			temp: undefined
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
	componentDidMount: function() {
		var location = this.props.location.query.location;

		if(location && location.length > 0) {
			this.handleSearch(location);
			// reset query in URL after a Search
			window.location.hash = "#/";
		}
	},
	componentWillReceiveProps: function(newProps) {
		var location = newProps.location.query.location;

		if(location && location.length > 0) {
			this.handleSearch(location);
			// reset query in URL after a Search
			window.location.hash = "#/";
		}
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
