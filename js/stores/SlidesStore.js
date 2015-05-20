var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SlideShowConstants = require('../constants/SlideShowConstants');
var _ = require('lodash');

var _slides = {}, _selected = null, _length = null;

function loadSlidesData(data){
	_slides = data;
	_selected = _slides[0];
	_length = _slides.length;
}

function setSelected(index){
	_selected = _slides[index];
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
	},
	addChangeListener: function(callback){
		this.on('change', callback);
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
		default:
			return true;
	}
	SlidesStore.emitChange();
	return true;
});

module.exports = SlidesStore;