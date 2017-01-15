var React = require('react');

// var About = React.createClass({
// 	render: function() {
// 		return (
// 		  <h3>About Component</h3>
// 		)
// 	}
// })

// var About = function (props) {

// };

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About React Weather</h1>
				<p>This is my first major app build using React. So far it has been challenging
				but to see the features of React and acutally put them to use has been invaluable
				in getting to know the syntax and figuring out the how's and why's of React.</p>

			<h4>Where I have pushed the app:</h4>
			<ul className="inline-list">
				<li><a href="https://github.com/cjwoodru2/ReactWeatherApp">GitHub Repo</a></li>
				<li><a href="https://arcane-retreat-32131.herokuapp.com">Heroku</a></li>
			</ul>
		</div>
	)
};

module.exports = About;
