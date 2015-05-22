console.log('wa?');

var React = require('react');
var SlidesData = require('./SlidesData');
var FauxServerAPI = require('./utils/FauxServerAPI');
var SlideShowActions = require('./actions/SlideShowActions');

var SlideShowApp = require('./components/SlideShowApp.react');
//// test in console
// var AppDispatcher = require('./dispatcher/AppDispatcher');

////

SlidesData.init();

FauxServerAPI.getSlidesData();



React.render(<SlideShowApp />, document.getElementById('slideShow-app'));
// console.log(localStorage.getItem('slides'));

module.exports.faker = faker = require('faker');
// module.exports.appDispatcher = appDispatcher = require('./dispatcher/AppDispatcher');

// console.log('post dispatcher call?');
// window.slide_show_actions = SlideShowActions;