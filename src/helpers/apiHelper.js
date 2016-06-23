/**
* This is a helper method for making async requets to an API
* I want this method to make it possible to make calls like
* [GET, POST, PUT, PATCH, DELETE]
* Given an endpoint, data,
* should return a promise.
*
* Some stuff can already be set here like
* headers, baseurl, this should be set in an config file
* which should be imported here
* think about how to get the x-auth-token, store it and send with every reequest
*
* This uses superagent: http://visionmedia.github.io/superagent/
*/

import request from 'superagent';

export const ApiHelper = {
    get: (url) => {
        return new Promise((resolve, reject) => {
            const req = request.get(url);

            req.end((err, res) => {
                if (err) {
                    reject((res && res.body) || err);
                } else {
                    resolve(res.body);
                }
            });
        });
    },
};
