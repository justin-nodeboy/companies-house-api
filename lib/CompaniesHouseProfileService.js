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
                    url: 'https://api.companieshouse.gov.uk/company',
                    params: {
                        company_number: companyNumber
                    },
                    auth:{
                        username: this.apiKey,
                        password: ''
                    }
                }).then(result => {
                    switch (result.status){
                        case 200:
                            resolve(result);
                            break;
                        case 404:
                            reject('Sorry no results match that company number');
                            break;
                        default:
                            reject('Sorry something has gone wrong');
                    }
                }).catch(err => {
                    reject(err);
                });
            }
        )
    }

}

module.exports = CompaniesHouseProfileService;
