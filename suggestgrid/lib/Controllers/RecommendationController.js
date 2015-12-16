/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC BETA v2.0 on 12/14/2015
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var RecommendationController = {

    /**
     * Predict a users score for an item.
     * @param {string} itemid    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {string} userid    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {PredictionResponse}
     */
    predict : function(itemid, space, type, userid, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_predict/{userid}/{itemid}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "itemid" : itemid,
            "space" : space,
            "type" : type,
            "userid" : userid
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
            method: "GET",
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
                    callback({errorMessage: "Request body is missing.", errorCode: 400, errorResponse:response.body},null,context);
                }else if (response.statusCode == 429) {
                    callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:response.body},null,context);
                }else if (response.statusCode == 555) {
                    callback({errorMessage: "Recommendation model is not found for the given space and type.", errorCode: 555, errorResponse:response.body},null,context);
                }else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:response.body},null,context);
                }else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Recommend users for the given body parameters.
     * @param {RecommendUsersBody} body    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {RecommendUsersResponse}
     */
    recommendUsers : function(body, space, type, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_recommend/_users";
        
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
                    callback({errorMessage: "Request body is missing.", errorCode: 400, errorResponse:response.body},null,context);
                }else if (response.statusCode == 429) {
                    callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:response.body},null,context);
                }else if (response.statusCode == 555) {
                    callback({errorMessage: "Recommendation model is not found for the given space and type.", errorCode: 555, errorResponse:response.body},null,context);
                }else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:response.body},null,context);
                }else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Recommend items for the given body parameters.
     * @param {RecommendItemsBody} body    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {RecommendItemsResponse}
     */
    recommendItems : function(body, space, type, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_recommend/_items";
        
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
                    callback({errorMessage: "Request body is missing.", errorCode: 400, errorResponse:response.body},null,context);
                }else if (response.statusCode == 429) {
                    callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:response.body},null,context);
                }else if (response.statusCode == 555) {
                    callback({errorMessage: "Recommendation model is not found for the given space and type.", errorCode: 555, errorResponse:response.body},null,context);
                }else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:response.body},null,context);
                }else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    }

};

module.exports = RecommendationController;