/**
 * Created by Justin on 20/05/2017.
 */
const axios = require('axios');

class CompaniesHouseSearchService {

    constructor(apiKey){
        this.apiKey = apiKey;
    }

    /**
     * This method queries the Companies House API for a specific ID. Returns a single company
     * @param id
     * @returns {Promise}
     */
    searchForCompanyBy(id){
        return new Promise(
            (resolve, reject) => {
                axios({
                    method:'get',
                    url: 'https://api.companieshouse.gov.uk/search/companies',
                    params: {
                        q: id,
                        items_per_page: 1
                    },
                    auth:{
                        username: this.apiKey,
                        password: ''
                    }
                }).then(result => {
                    result.data.items.length > 0 ? resolve(result.data.items[0]) : reject('Sorry no results match your search');
                }).catch(err => {
                    reject(err);
                });
            }
        );
    }

    /**
     * This method queries the Companies House API for a generic query. Returns an array of companies which you can limit.
     * @param query
     * @param itemCount
     * @returns {Promise}
     */
    searchForCompanyByGeneric(query, itemCount){
        return new Promise(
            (resolve, reject) => {
                axios({
                    method:'get',
                    url: 'https://api.companieshouse.gov.uk/search/companies',
                    params: {
                        q: query,
                        items_per_page: itemCount
                    },
                    auth:{
                        username: this.apiKey,
                        password: ''
                    }
                }).then(result => {
                    resolve(result.data.items);
                }).catch(err => {
                    reject(err);
                });
            }
        );
    }

    /**
     * This method searches across all indexed information
     * @param query
     * @param itemCount
     * @returns {Promise}
     */
    searchAllBy(query, itemCount){
        return new Promise(
            (resolve, reject) => {
                axios({
                    method:'get',
                    url: 'https://api.companieshouse.gov.uk/search',
                    params: {
                        q: query,
                        items_per_page: itemCount
                    },
                    auth:{
                        username: this.apiKey,
                        password: ''
                    }
                }).then(result => {
                    resolve(result.data.items);
                }).catch(err => {
                    reject(err);
                });
            }
        );
    }

    /**
     * This method searches for officers by a generic query.
     * @param query
     * @param itemCount
     * @returns {Promise}
     */
    searchForOfficerBy(query, itemCount){
        return new Promise(
            (resolve, reject) => {
                axios({
                    method:'get',
                    url: 'https://api.companieshouse.gov.uk/search/officers',
                    params: {
                        q: query,
                        items_per_page: itemCount
                    },
                    auth:{
                        username: this.apiKey,
                        password: ''
                    }
                }).then(result => {
                    result.data.items.length > 0 ? resolve(result.data.items) : reject('Sorry no results match your search');
                }).catch(err => {
                    reject(err);
                });
            }
        )
    }

    /**
     * This method searches for disqualified officers by generic query
     * @param query
     * @param itemCount
     * @returns {Promise}
     */
    searchForDisqualifiedOfficerBy(query, itemCount){
        return new Promise(
            (resolve, reject) => {
                axios({
                    method:'get',
                    url: 'https://api.companieshouse.gov.uk/search/disqualified-officers',
                    params: {
                        q: query,
                        items_per_page: itemCount
                    },
                    auth:{
                        username: this.apiKey,
                        password: ''
                    }
                }).then(result => {
                    result.data.items.length > 0 ? resolve(result.data.items) : reject('Sorry no results match your search');
                }).catch(err => {
                    reject(err);
                });
            }
        )
    }

}

module.exports = CompaniesHouseSearchService;
