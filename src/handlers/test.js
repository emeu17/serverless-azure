'use strict';

module.exports.initialTest = async function (context, req) {
    context.log('Request to test route.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: 'This is a test route on Azure!',
    };
};
