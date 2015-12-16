/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC BETA v2.0 on 12/14/2015
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var SimilarityController = {

    /**
     * TODO: type endpoint description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {string} userid1    Required parameter: TODO: type description here
     * @param {string} userid2    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {UserSimilarityResponse}
     */
    getUserSimilarity : function(space, type, userid1, userid2, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_similarity/_users/{userid1}/{userid2}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space,
            "type" : type,
            "userid1" : userid1,
            "userid2" : userid2
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
                if (response.statusCode == 429) {
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
     * TODO: type endpoint description here
     * @param {string} itemid1    Required parameter: TODO: type description here
     * @param {string} itemid2    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ItemSimilarityResponse}
     */
    getItemSimilarity : function(itemid1, itemid2, space, type, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_similarity/_items/{itemid1}/{itemid2}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "itemid1" : itemid1,
            "itemid2" : itemid2,
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
                if (response.statusCode == 429) {
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
     * TODO: type endpoint description here
     * @param {SimilarUsersBody} body    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {string} userid    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {SimilarUsersResponse}
     */
    getSimilarUsers : function(body, space, type, userid, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_similar/_users/{userid}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space,
            "type" : type,
            "userid" : userid
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
                if (response.statusCode == 429) {
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
     * TODO: type endpoint description here
     * @param {SimilarItemsBody} body    Required parameter: TODO: type description here
     * @param {string} itemid    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {SimilarItemsResponse}
     */
    getSimilarItems : function(body, itemid, space, type, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_similar/_items/{itemid}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "itemid" : itemid,
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
                if (response.statusCode == 429) {
                    callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:response.body},null,context);
                }else if (response.statusCode == 500) {
                    callback({errorMessage: "", errorCode: 500, errorResponse:response.body},null,context);
                }else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    }

};

module.exports = SimilarityController;