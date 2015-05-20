var SlideShowActions = require('../actions/SlideShowActions');

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
  getSlidesData: function() {
    var data = JSON.parse(localStorage.getItem('slides'));
    SlideShowActions.receiveSlides(data);
  }

};