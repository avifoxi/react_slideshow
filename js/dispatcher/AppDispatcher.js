var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action){
	this.dispatch({
		source: 'VIEW_ACTION',
		action: action
	});
	
}

// AppDispatcher.proveYouExist = function(){
// 	console.log('i exist.');
// }

module.exports = AppDispatcher;