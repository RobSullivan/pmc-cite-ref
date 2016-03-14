'use strict';

var request = require('request');
var libxml = require('libxmljs');
var libparser = new libxml.SaxPushParser();


var expat = require('node-expat');
var exparser = new expat.Parser('UTF-8');


/*

request the xml
pipe the xml to a parser
find the LinkName tag with text pubmed_pubmed_refs/pubmed_pubmed_citedin
then for every Link/Id pmid text value, push it to an array/add to database/csv format
need to keep it related to original pmid
return the array

can pass a cb to a pipe

process.stdin                        //connect streams together with `pipe`
    .pipe(es.split())                  //split stream to break on newlines
    .pipe(es.map(function (data, cb) { //turn this async function into a stream
      cb(null
        , inspect(JSON.parse(data)))   //render it nicely
    }))
    .pipe(process.stdout)


 Libraries tried
 libxmljs https://github.com/polotek/libxmljs/
 node-expat https://github.com/node-xmpp/node-expat
 node-stream

*/




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


//libxml 1

/*
request(options)
	.on('error', function(err){
		console.error(err);
	})
	.pipe(libparser)//dest.end is not a function
*/

//libxml 2
/*
var rr = fs.createReadStream('./libxml-data.xml');

request(options)
	.on('error', function(err){
		console.error(err);
	})
	.pipe(fs.createWriteStream('./libxml-data.xml'))

	rr.on('readable', function(data){

		xml = libxml.parseXmlString(rr.read())
		console.log(xml)

	})
*/

//node-expat

/*
request(options)
	.pipe(exparser)
	.on('startElement', function(name, attrs){
		console.log(name)
	})
	.on('text', function(text){
		console.log(text)
	})
*/

//xml-stream

var XMLStream = require('xml-stream');

request(options)
.on('error', function(err){
	console.error(err)//how to handle no response from ncbi
})
.on('response', function(response){
	var xml = new XMLStream(response);
	xml.collect('Id')

	xml.on('updateElement: LinkName', function(LinkName){
		console.log(util.inspect(LinkName))
		//console.log(LinkName['$text'])
		//console.log(LinkName.Link.Id)
	})
	xml.on('endElement: Id', function(Id){
		console.log(util.inspect(Id))
	})
})





//https://github.com/racker/node-elementtree
/*
var et = require('elementtree')
var util = require('util')
var XML = et.XML
var ElementTree = et.ElementTree
var element = et.Element
var subElement = et.subElement;
var link_names;

var data, etree 

request(options)
.on('error', function(err){
	console.error(err);
})
.pipe(fs.createWriteStream('./node-elementtree.xml'))
.on('finish', function(){
	console.log('file written')
	console.log('...reading file')
	data = fs.readFileSync('./node-elementtree.xml').toString();
	etree = et.parse(data)
	link_names = etree.findall('./LinkSet/LinkSetDb/LinkName/')
	console.log(link_names)
	

})
*/



	


