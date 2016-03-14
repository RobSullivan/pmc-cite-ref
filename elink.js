'use strict';
/* eslint-env node*/

var request = require('request');
const util = require('util');
const stream = require('stream');

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


/*

'The Readable stream interface is the abstraction for a source of data that you are reading from. 
In other words, data comes out of a Readable stream.'

Someone should be able to go elink.request(pmid).pipe(writeable-destination).
eutils is a source of data to read from.

*/

exports.requestElinks = function(pmid, callback){

	this.pmid = pmid; //could also be a list
	_options.qs.id = this.pmid;

	request(_options, function(err, response, body){

		if (err) {
			callback(err);
		} else {
			callback(response, body);
		}
	});

};

exports.request2 = function(pmid){

	this.pmid = pmid; //could also be a list
	_options.qs.id = this.pmid;

	request(_options)
	.on('error', function(err){
		console.log(err);
	})
	.pipe(process.stdout);


};


exports.request = function(pmid, dst){
	this.pmid = pmid; //could also be a list
	_options.qs.id = this.pmid;

	request(_options)
	.on('error', function(err){
		console.log(err);
	})
	.pipe(dst);

}

function ElinkStream(pmid){
	this.pmid = pmid; //could also be a list
	_options.qs.id = this.pmid;
}

util.inherits(ElinkStream, stream.Readable)

var elink = new ElinkStream()

exports.request4 = function(){
	return elink;
}

var options = {
			url: 'http://eutils.ncbi.nlm.nih.gov/entrez/eutils/elink.fcgi?',
			qs : {
				dbfrom : 'pubmed',
				db: 'pubmed',
				id: 24282674,
				email: 'robertjsullivan.esq@gmail.com',
				project: 'pmc-cite-ref'
			}

		};
