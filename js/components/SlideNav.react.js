var React = require('react');
var SlideShowActions = require('../actions/SlideShowActions');

var SlideNav = React.createClass({
	render: function(){
		return (
			<nav>
				<button onClick={this.backASlide} >back</button>
				<button onClick={this.forwardASlide} >forward</button>
			</nav>
		);
	}, 
	backASlide: function(){
		SlideShowActions.prevSlide();
	},
	forwardASlide: function(){
		SlideShowActions.nextSlide();
	}

});

module.exports = SlideNav;