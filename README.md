# Companies House
An ES6 Node.js library for the [Companies House BETA API](https://developer.companieshouse.gov.uk/api/docs/index.html)
# Installation instructions
Run `npm install --save companies-house-api-es6`
# Usage
First you will need to create an account on companies house and get an API Key

Then you will need to include the library

~~~js
const CHA = require('companies-house-api-es6');
const cha = new CHA('YOUR_API_KEY');
~~~
Here is an example

~~~js
cha.searchForCompanyById(companyID).then(result => {
	console.log(result);
}).catch(err => {
	console.log(err);
});
~~~

For a full list of response formats please visit [Companies House BETA API Docs](https://developer.companieshouse.gov.uk/api/docs/index.html)

## Search Methods

~~~js
searchForCompanyById(id)

//These methods can take an optional second argument which 
//is an integer limit of how many results you want back

searchForCompanyByGenericTerm(query)
searchAll(query)
searchForOfficer(query)
searchForDisqualifiedOfficer(query)
~~~
## Profile Methods

~~~js
returnProfileBy(companyNumber)
~~~