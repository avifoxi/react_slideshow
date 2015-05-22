var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SlideShowConstants = require('../constants/SlideShowConstants');
var _ = require('lodash');

var _slides = {}, _selected = null, _length = null;

function loadSlidesData(data){
	_slides = data;
	_currentIndex = 0;
	_selected = _slides[_currentIndex];
	_length = _slides.length;
}

function setSelected(index){
	_selected = _slides[index];
}

function nextSlide(){
	// console.log('inside SlidesStore');
	if (_currentIndex < _length - 1){
		// console.log('inside if statemtnet puls index');
		
		_selected = _slides[_currentIndex++];
		// console.log(_currentIndex);
	}
}

var SlidesStore = _.assign({}, EventEmitter.prototype, {
	getSlides: function(){
		return _slides;
	},
	getSelected: function(){
		return _selected;
	},
	getLength: function(){
		return _length;
	},
	emitChange: function(){
		this.emit('change');
		// console.log('SlidesStore emitting change');
	},
	addChangeListener: function(callback){
		this.on('change', callback);
		// console.log('broadasing to all liseners');
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}

});

AppDispatcher.register(function(payload){
	var action = payload.action;
	var text; // why? 

	switch(action.actionType){
		case SlideShowConstants.RECEIVE_SLIDES:
			loadSlidesData(action.data);
			break;
		case SlideShowConstants.SET_SLIDE:
			setSelected(action.data);
			break
		case SlideShowConstants.NEXT_SLIDE:
			console.log('in SlidesStore dispatch registration')
			nextSlide();
			break
		default:
			return true;
	}
	// console.log('immdediately before call to emit');
	SlidesStore.emitChange();
	return true;
});

module.exports = SlidesStore;