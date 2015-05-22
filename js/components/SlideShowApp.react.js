var React = require('react');
var SlidesStore = require('../stores/SlidesStore');
var SlideWindow = require('./SlideWindow.react');
var SlideNav = require('./SlideNav.react');

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
		var self = this;
		SlidesStore.addChangeListener(self._onChange);
		// SlideWindow.addChangeListener(this._one)
	},
	_onChange: function(){
		// console.log('in parent element, register change');
		this.setState(getSlideShowState());
	},
	render: function(){
		return (
			<div className="slide-show-app jumbotron">
				<SlideWindow selected={this.state.selectedSlide} />
				<SlideNav />
			</div>
		);
	}
});

module.exports = SlideShowApp;