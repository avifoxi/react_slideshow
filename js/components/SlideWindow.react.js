var React = require('react');
var SlideShowActions = require('../actions/SlideShowActions');

var SlideWindow = React.createClass({
	render: function(){
		// console.log('print props in SlideWindow');
		// console.log(this.props);
		return (
			<div className="i-have-the-fluex">
				<h2>{this.props.selected.title}</h2>
				<img src={ this.props.selected.image } />
			</div>
		);
	}

});

module.exports = SlideWindow;