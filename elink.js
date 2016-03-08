'use strict';
/* eslint-env node*/

var request = require('request');
var _options = {
			url: 'http://eutils.ncbi.nlm.nih.gov/entrez/eutils/elink.fcgi?',
			qs : {
				dbfrom : 'pubmed',
				db: 'pubmed',
				id: null,
				email: 'robertjsullivan.esq@gmail.com',
				project: 'pmc-cite-ref'
			}

		};


exports.requestElinks = function(pmid, callback){

	this.pmid = pmid;
	_options.qs.id = this.pmid;

	request(_options, function(err, response){

		if (err) {
			callback(err);
		} else {
			callback(err, response);
		}
	});

};
