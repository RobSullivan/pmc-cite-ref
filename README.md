# pmc-cite-ref

Gets the references and citations for an article that have been indexed by PubMed.

Aim is to publish as a module on npm so can use in other projects where this data is needed.

So far...

index.js uses async.waterfall to elink.js makes the request to elink. 

elink.js wraps request to ncbi elink database.

linkset.js uses xmldoc to pull out  the pmids of references or citations.

Example pmid = 24282674




Further resources
https://www.npmjs.com/package/request
http://eslint.org/
http://www.ncbi.nlm.nih.gov/books/NBK1058/
http://www.ncbi.nlm.nih.gov/books/NBK25499/#chapter4
