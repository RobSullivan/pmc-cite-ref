'use strict';
/*eslint-env node*/

exports.response = function(err, data){

	this.data = data;

	if(err){
		return err;
	}
	else{
		return this.data;
	}
}