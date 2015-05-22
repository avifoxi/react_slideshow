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
		console.log(this.state.selectedSlide.image);
	},
	render: function(){
		return (
			<div className="slide-show-app jumbotron">
				<SlideWindow title={this.state.selectedSlide.title} image={this.state.selectedSlide.image} />
				<SlideNav length={this.state.length}  />
			</div>
		);
	}
});

module.exports = SlideShowApp;