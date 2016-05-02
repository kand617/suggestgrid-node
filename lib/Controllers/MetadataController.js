/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 on 05/02/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var MetadataController = {

    /**
     * Create an user metadata.
     * @param {Metadata} body    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    createUserMetadata : function(body, space, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/_user";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8"
        };

        //Remove null values
        APIHelper.cleanObject(body);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            body : APIHelper.jsonSerialize(body),
            username: configuration.basicAuthUserName,
            password: configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "Metadata is invalid.", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 429) {
                    callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Delete an user metadata.
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} userId    Required parameter: The user_id to delete its metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAnUserMetadata : function(space, userId, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/_user/{user_id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space,
            "user_id" : userId
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "DELETE",
            headers: headers,
            username: configuration.basicAuthUserName,
            password: configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 429) {
                    callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Delete all user metadatas.
     * @param {string} space    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAllUserMetadata : function(space, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/_user/_all";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "DELETE",
            headers: headers,
            username: configuration.basicAuthUserName,
            password: configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 429) {
                    callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Create an item metadata.
     * @param {Metadata} body    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    createItemMetadata : function(body, space, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/_item";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8"
        };

        //Remove null values
        APIHelper.cleanObject(body);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            body : APIHelper.jsonSerialize(body),
            username: configuration.basicAuthUserName,
            password: configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "Metadata is invalid.", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 429) {
                    callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Delete an item metadata.
     * @param {string} itemId    Required parameter: The item_id to delete its metadata.
     * @param {string} space    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAnItemMetadata : function(itemId, space, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/_item/{item_id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "item_id" : itemId,
            "space" : space
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "DELETE",
            headers: headers,
            username: configuration.basicAuthUserName,
            password: configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 429) {
                    callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Delete all item metadatas of a space.
     * @param {string} space    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAllItemMetadata : function(space, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/_item/_all";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "DELETE",
            headers: headers,
            username: configuration.basicAuthUserName,
            password: configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 429) {
                    callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    }

};

module.exports = MetadataController;