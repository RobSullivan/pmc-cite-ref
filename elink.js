'use strict';
/* eslint-env node*/

var request = require('request');


function Elink(){
	

	this._options = {
		url: 'http://eutils.ncbi.nlm.nih.gov/entrez/eutils/elink.fcgi?',
		qs : {
			dbfrom : 'pubmed',
			db: 'pubmed',
			id: 0,//24282674
			email: 'robertjsullivan.esq@gmail.com',
			project: 'pmc-cite-ref'
		}
	};
}

Elink.prototype.request = function(err, pmid, cb){
	
	this._options.qs.id = pmid;
	try{
		request(this._options, function(response, body){
			cb(response, body);
		});
	} catch (err){
		return err;
	}
	
};

module.exports = Elink;