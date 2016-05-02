/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 on 05/02/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var SimilarityController = {

    /**
     * Get similarity of two users.
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {string} userId1    Required parameter: TODO: type description here
     * @param {string} userId2    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {UserSimilarityResponse}
     */
    getUserSimilarity : function(space, type, userId1, userId2, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_similarity/_users/{user_id1}/{user_id2}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space,
            "type" : type,
            "user_id1" : userId1,
            "user_id2" : userId2
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
                } else if (response.statusCode == 555) {
                    callback({errorMessage: "Recommendation model is not found for the given space and type.", errorCode: 555, errorResponse:response.body},null,context);
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
     * Get similarity of two items.
     * @param {string} itemId1    Required parameter: TODO: type description here
     * @param {string} itemId2    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ItemSimilarityResponse}
     */
    getItemSimilarity : function(itemId1, itemId2, space, type, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_similarity/_items/{item_id1}/{item_id2}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "item_id1" : itemId1,
            "item_id2" : itemId2,
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
                } else if (response.statusCode == 555) {
                    callback({errorMessage: "Recommendation model is not found for the given space and type.", errorCode: 555, errorResponse:response.body},null,context);
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
     * Get similar users to an user.
     * @param {SimilarUsersBody} body    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {string} userId    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {UsersResponse}
     */
    getSimilarUsers : function(body, space, type, userId, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_similar/_users/{user_id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "space" : space,
            "type" : type,
            "user_id" : userId
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
                } else if (response.statusCode == 555) {
                    callback({errorMessage: "Recommendation model is not found for the given space and type.", errorCode: 555, errorResponse:response.body},null,context);
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
     * Get similar items to an item.
     * @param {SimilarItemsBody} body    Required parameter: TODO: type description here
     * @param {string} itemId    Required parameter: TODO: type description here
     * @param {string} space    Required parameter: TODO: type description here
     * @param {string} type    Required parameter: TODO: type description here
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ItemsResponse}
     */
    getSimilarItems : function(body, itemId, space, type, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/{space}/{type}/_similar/_items/{item_id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "item_id" : itemId,
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
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    }

};

module.exports = SimilarityController;