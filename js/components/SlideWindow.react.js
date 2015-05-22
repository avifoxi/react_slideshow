var React = require('react');
var SlideShowActions = require('../actions/SlideShowActions');
var SlidesStore = require('../stores/SlidesStore');


var SlideWindow = React.createClass({
	render: function(){
		// console.log('print props in SlideWindow');
		// console.log(this.props);
		return (
			<div className="i-have-the-fluex">
				<h2>{this.props.title}</h2>
				<img src={ this.props.image } />
			</div>
		);
	}
});

module.exports = SlideWindow;