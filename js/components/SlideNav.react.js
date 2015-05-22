var React = require('react');
var SlideShowActions = require('../actions/SlideShowActions');

var SlideNav = React.createClass({
	render: function(){
		// console.log('print props in SlideWindow');
		// console.log(this.props);
		return (
			<nav>
				<button onClick={this.backASlide} >back</button>
				<button onClick={this.forwardASlide} >forward</button>
			</nav>
		);
	}, 
	backASlide: function(){
		console.log('backASlide');
		// SlideShowActions.ne;
	},
	forwardASlide: function(){
		console.log('forwardASlide');
		SlideShowActions.nextSlide();
	}

});

module.exports = SlideNav;