/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 on 05/02/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var ActionController = {

    /**
     * Create an action.
     * @param {Action} body    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    createAction : function(body, space, type, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_action";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space,
            "type" : type
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
                    callback({errorMessage: "Required `user_id` or `item_id` parameters are missing from the request body.", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 402) {
                    callback({errorMessage: "Action limit exceeded.", errorCode: 402, errorResponse:response.body},null,context);
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
     * Deletes actions.
     * @param {ActionDeleteBody} body    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAction : function(body, space, type, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_action";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space,
            "type" : type
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
            method: "DELETE",
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
                    callback({errorMessage: "Required `user_id` or `item_id` parameters are missing from the request body.", errorCode: 400, errorResponse:response.body},null,context);
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
     * Delete all actions of a type.
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAllActions : function(space, type, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_action/_all";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space,
            "type" : type
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
     * Delete all actions of a type older than the given timestamp or time.
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} time    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteOlderActions : function(space, time, type, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_action/_older_than/{time}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space,
            "time" : time,
            "type" : type
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
                if (response.statusCode == 400) {
                    callback({errorMessage: "The given timestamp is in the future.", errorCode: 400, errorResponse:response.body},null,context);
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
        
    }

};

module.exports = ActionController;