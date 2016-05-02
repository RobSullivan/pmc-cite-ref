'use strict';
/* eslint-env node*/

/*

async waterfall of requesting data, processing it and writing to json

*/
var async = require('async');
var Elink = require('./Elink');
var Linkset = require('./Linkset');




module.exports = function pubmedLinks(pmid, linkType){

	
	var elink = new Elink();
	var linkset = new Linkset();

	async.waterfall([
		function(callback){
			elink.request(null, pmid, callback);
		},
		function(response, callback){
			
			var data = response.body;
			linkset.result(null, data, linkType, callback);
		}], 
		function(err, result){
			//console.log('result',result);
		});
	

};