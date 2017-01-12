var React           = require("react"),
    ReactDOM        = require("react-dom");

var objOne = {
	name: 'Chris',
	location: 'Charlotte'
};

var objTwo = {
	age: 25,
	...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate App</h1>,
  document.getElementById("app")
);
