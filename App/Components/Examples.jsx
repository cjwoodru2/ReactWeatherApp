var React 		= require('react');
var {Link} 		= require("react-router");

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ul>
				<li>
					<Link to="/?location=Charlotte">Charlotte, NC</Link>
				</li>
				<li>
					<Link to="/?location=SaoPaulo">Sao Paulo, SP, BR</Link>
				</li>
			</ul>
		</div>
	)
}

module.exports = Examples;
