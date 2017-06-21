/**
 * Created by Justin Howard on 20/05/2017.
 */
const CHS = require('./lib/CompaniesHouseSearchService');
const CHP = require('./lib/CompaniesHouseProfileService');
const CHG = require('./lib/CompaniesHouseGenericService');

class CompaniesHouseApi{

    constructor(apiKey){
        this.apiKey = apiKey;
    }
    //#### Search Methods ####//
    /**
     * This method performs a request to Companies House to search for a company by ID
     * @param id
     * @returns {Promise}
     */
    searchForCompanyById(id){
        return new Promise(
            (resolve, reject) => {
                new CHS(this.apiKey).searchForCompanyBy(id).then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
            }
        )
    }

    /**
     * This method performs a request to Companies House to search for a company by a generic search term. You can add an optional item count, default is 10
     * @param q
     * @param itemCount? Optional
     * @returns {Promise}
     */
    searchForCompanyByGenericTerm(q){
        return new Promise(
            (resolve, reject) => {
                new CHS(this.apiKey).searchForCompanyByGeneric(q, arguments[1] || 10).then(result => {
                    resolve(result);
                }).catch(err => {
                   reject(err);
                });
            }
        )
    }

    /**
     * This method performs a request to Companies House to search across all indexed items by a generic search term. You can add an optional item count, default is 10
     * @param q
     * @returns {Promise}
     */
    searchAll(q){
        return new Promise(
            (resolve, reject) => {
                new CHS(this.apiKey).searchAllBy(q, arguments[1] || 10).then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                })
            }
        )
    }

    /**
     * This method performs a request to Companies House to search for company officers by a generic search term. You can add an optional item count, default is 10
     * @param q
     * @returns {Promise}
     */
    searchForOfficer(q){
        return new Promise(
            (resolve, reject) => {
                new CHS(this.apiKey).searchForOfficerBy(q, arguments[1] || 10).then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
            }
        )
    }

    /**
     * This method performs a request to Companies House to search for disqualified officers by a generic search term. You can add an optional item count, default is 10
     * @param q
     * @returns {Promise}
     */
    searchForDisqualifiedOfficer(q){
        return new Promise(
            (resolve, reject) => {
                new CHS(this.apiKey).searchForDisqualifiedOfficerBy(q, arguments[1] || 10).then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
            }
        )
    }

    //#### Profile Methods ####//
    /**
     * This method returns the company profile by providing a company number
     * @param companyNumber
     * @return {Promise}
     */
    returnProfileBy(companyNumber){
        return new Promise(
            (resolve, reject) => {
                if (!companyNumber)
                    reject('Please include a company number');
                new CHP(this.apiKey).retrieveCompanyProfileBy(companyNumber).then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
            }
        )
    }

    //#### Generic methods ####//
    getLink(link){
        return new Promise(
            (resolve, reject) => {
                if (!link)
                    reject('Please include a link to GET');
                new CHG(this.apiKey).getLink(link).then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
            }
        )
    }

}

module.exports = CompaniesHouseApi;