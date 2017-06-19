/**
 * Copyright (c) 2017, Will Evans.
 * Licensed under the MIT License.
 */
const axios = require('axios');

class CompaniesHouseGenericService {

    constructor(apiKey){
        this.apiKey = apiKey;
    }

    /**
     * This method calls the companies house API to return data for a specific link e.g one returned in Company Profile
     * @param link
     * @return {Promise}
     */
    getLink(link){
        return new Promise(
            (resolve, reject) => {
                axios({
                    method:'get',
                    url: `https://api.companieshouse.gov.uk${link}`,
                    auth: {
                        username: this.apiKey,
                        password: ''
                    }
                }).then(result => {
                    switch (result.status){
                        case 200:
                            resolve(result.data);
                            break;
                        case 404:
                            reject('Sorry that link does not exist');
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

module.exports = CompaniesHouseGenericService;
