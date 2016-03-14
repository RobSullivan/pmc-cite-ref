# pmc-cite-ref

Request reference and citation data from PubMed. Return as object.

Designed to be a module to get from npm.

Datastore agnostic. Writing to a database would require extra processing.

elink.js makes the request to eutils/elink. 

response.js is the callback to catch the data or error.

linkset.js extracts the pmids of references or citations.

Example pmid = 24282674

Further resources
https://www.npmjs.com/package/request
http://eslint.org/
https://github.com/MozillaFoundation/mofo-style
http://www.ncbi.nlm.nih.gov/books/NBK1058/
http://www.ncbi.nlm.nih.gov/books/NBK25499/#chapter4

Not using ES6 settings such as backticks for strings but am using camelCase

eslint --config ./node_modules/mofo-style/.eslintrc.yaml