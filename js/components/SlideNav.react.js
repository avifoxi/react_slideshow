var React = require('react');
var SlideShowActions = require('../actions/SlideShowActions');

var SlideNav = React.createClass({
	render: function(){
		var slideNodes = this.props.data.map(function(comment, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Comment author={comment.author} key={index}>
          {comment.text}
        </Comment>
      );
    });



		return (
			<nav>
				<ul className="pagination">
			    <li>
			      <a href="#" aria-label="Previous" onClick={this.backASlide}>
			        <span aria-hidden="true">&laquo;</span>
			      </a>
			    </li>
			    	{




			    	}
			    <li><a href="#">1</a></li>
			    <li><a href="#">2</a></li>
			    <li><a href="#">3</a></li>
			    <li><a href="#">4</a></li>
			    <li><a href="#">5</a></li>
			    <li>
			      <a href="#" aria-label="Next" onClick={this.forwardASlide}>
			        <span aria-hidden="true">&raquo;</span>
			      </a>
			    </li>
			  </ul>
				
			</nav>
		);
	}, 
	backASlide: function(){
		SlideShowActions.prevSlide();
	},
	forwardASlide: function(){
		SlideShowActions.nextSlide();
	}

});

module.exports = SlideNav;