var AppDispatcher = require('../dispatcher/AppDispatcher');
var SlideShowConstants = require('../constants/SlideShowConstants');

// AppDispatcher.proveYouExist();

var SlideShowActions = {

	receiveSlides: function(data){
		AppDispatcher.handleAction({
			actionType: SlideShowConstants.RECEIVE_SLIDES,
			data: data
		});
		console.log(data);
	},

	nextSlide: function(){
		console.log('inside actions,. is go?');
		AppDispatcher.handleAction({
			actionType: SlideShowConstants.NEXT_SLIDE,
			data: 'next'
		})
	},
	prevSlide: function(){
		AppDispatcher.handleAction({
			actionType: SlideShowConstants.PREV_SLIDE,
			data: 'bar'
		})
	}, 
	setSlide: function(index){
		AppDispatcher.handleAction({
			actionType: SlideShowConstants.SET_SLIDE,
			data: index
		})
	}
}

module.exports = SlideShowActions;