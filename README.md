# Companies House
An ES6 Node.js library for the [Companies House BETA API](https://developer.companieshouse.gov.uk/api/docs/index.html)
# Installation instructions
Run `npm install --save companies-house-api`
# Usage
First you will need to create an account on companies house and get an API Key

Then you will need to include the library


~~~js
const CHA = require('companies-house-api');
const cha = new CHA('YOUR_API_KEY');

~~~
## Search Methods

~~~js
/**
 * This method performs a request to Companies House to search for a company by ID
 * @param id
 * @returns {Promise}
*/
cha.searchForCompanyById(companyID).then(result => {
	console.log(result);
}).catch(err => {
	console.log(err);
});

/**
 * This method performs a request to Companies House to search for a company by a generic search term. You can add an optional item count by overloading the function with the desired total, default is 10
 * @param q
 * @param itemCount? Optional
 * @returns {Promise}
*/
cha.searchForCompanyByGenericTerm(query).then(result => {
	console.log(result);
}).catch(err => {
	console.log(err);
});

/**
 * This method performs a request to Companies House to search across all indexed items by a generic search term. You can add an optional item count by overloading the function with the desired total, default is 10
 * @param q
 * @returns {Promise}
*/
cha.searchAll(query).then(result => {
	console.log(result);
}).catch(err => {
	console.log(err);
});

/**
 * This method performs a request to Companies House to search for company officers by a generic search term. You can add an optional item count by overloading the function with the desired total, default is 10
 * @param q
 * @returns {Promise}
*/
cha.searchForOfficer(query).then(result => {
	console.log(result);
}).catch(err => {
	console.log(err);
});

/**
 * This method performs a request to Companies House to search for disqualified officers by a generic search term. You can add an optional item count by overloading the function with the desired total, default is 10
 * @param q
 * @returns {Promise}
*/
cha.searchForDisqualifiedOfficer(query).then(result => {
	console.log(result);
}).catch(err => {
	console.log(err);
});
~~~