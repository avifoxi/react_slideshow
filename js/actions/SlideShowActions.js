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
		AppDispatcher.handleViewAction({
			actionType: SlideShowConstants.NEXT_SLIDE,
			data: 'bar'
		})
	},
	prevSlide: function(){
		AppDispatcher.handleViewAction({
			actionType: SlideShowConstants.PREV_SLIDE,
			data: 'bar'
		})
	}, 
	setSlide: function(index){
		AppDispatcher.handleViewAction({
			actionType: SlideShowConstants.SET_SLIDE,
			data: index
		})
	}
}

module.exports = SlideShowActions;