'use strict';

module.exports = (function () {
    var AWS = require('aws-sdk');
    return {
        /** @function invokeLambdaFunction */
        /**
         * invoke the lambda function with lambda service object options.
         * API:
         *
         * @param {Object} options - the options passedin to create the lambda service object. It can be null.
         *
         * @param {Object} params - the options passedin to create the lambda service object. It can be null.
         *
         * @param {function} callback - Called when a response from the service is returned e.g. function(err, data) { ... }
         */
        invokeLambdaFunction: function (options, params, callback) {
            if(AWS){
                (new AWS.Lambda(options)).invoke(params, callback);
            }else{
                throw { name : "AWSSDKNotFoundError", message : "AWS SDK is not found"};
            }
        }
    };
}());
