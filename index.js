/**
 * Created by Justin on 20/05/2017.
 */
const CHS = require('./lib/CompaniesHouseSearchService');

class CompaniesHouseApi{

    constructor(apiKey){
        this.apiKey = apiKey;
    }

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

}

module.exports = CompaniesHouseApi;