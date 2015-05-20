var React = require('react');
var SlidesStore = require('../stores/SlidesStore');
var SlideWindow = require('./SlideWindow.react');
// var SlideNav = require('./SlideNav.react');

function getSlideShowState(){
	return {
		slides: SlidesStore.getSlides(),
		selectedSlide: SlidesStore.getSelected(),
		length: SlidesStore.getLength()
	}
}

var SlideShowApp = React.createClass({
	getInitialState: function(){
		return getSlideShowState();
	},
	componentDidMount: function(){
		SlidesStore.addChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState(getSlideShowState());
	},
	render: function(){
		return (
			<div className="slide-show-app jumbotron">
				<SlideWindow selected={this.state.selectedSlide} />
				
			</div>
		);
	}
});

module.exports = SlideShowApp;