'use strict';
/* eslint-env node*/


var xmldoc = require('xmldoc');


function Linkset(){

	


}


Linkset.prototype.result = function(err, data, linkType, cb){
	/*
	type is referencences or citations
	
	*/
	
	var xml = new xmldoc.XmlDocument(data);
	var linkSets = xml.childNamed('LinkSet');
	console.log(linkType)


}

module.exports = Linkset;

