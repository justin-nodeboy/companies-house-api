/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
const axios = require('axios');

class CompaniesHouseProfileService {

    constructor(apiKey){
        this.apiKey = apiKey;
    }

    /**
     * This method calls the companies house API to return data for a specific company profile
     * @param companyNumber
     * @return {Promise}
     */
    retrieveCompanyProfileBy(companyNumber){
        return new Promise(
            (resolve, reject) => {
                axios({
                    method:'get',
                    url: `https://api.companieshouse.gov.uk/company/${companyNumber}`,
                    auth: {
                        username: this.apiKey,
                        password: ''
                    }
                }).then(result => {
                    switch (result.status){
                        case 200:
                            return resolve(result.data);
                        default:
                            return reject('Sorry something has gone wrong');
                    }
                }).catch(err => {
                    if (err.response && err.response.status === 404) {
                        return reject('Sorry no results match that company number');
                    }
                    return reject(err);
                });
            }
        );
    }

}

module.exports = CompaniesHouseProfileService;
