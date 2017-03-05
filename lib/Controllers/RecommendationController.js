/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */

var _request = require('../Http/Client/RequestClient');
var _configuration = require('../configuration');
var _APIHelper = require('../APIHelper');
var _BaseController = require('./BaseController');
var _ErrorResponseException = require('../Exceptions/ErrorResponseException');
var _UsersResponse = require('../Models/UsersResponse');
var _ItemsResponse = require('../Models/ItemsResponse');


var RecommendationController = {

    /**
     * Get Recommended Users
     * @param {GetRecommendedUsersBody} query    Required parameter: The query for recommended users.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {UsersResponse}
     */
    getRecommendedUsers: function (query, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/recommend/users";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "SUGGESTGRID"
        };

        //Remove null values
        _APIHelper.cleanObject(query);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(query),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "getRecommendedUsers");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _UsersResponse(parsed);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 400) {
                callback({errorMessage: "Request body is invalid.", errorCode: 400, errorResponse: new _ErrorResponseException("Request body is invalid.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 422) {
                callback({errorMessage: "Required parameters are missing.", errorCode: 422, errorResponse: new _ErrorResponseException("Required parameters are missing.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse: new _ErrorResponseException("Too many requests.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 0) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 0, errorResponse: new _ErrorResponseException("Unexpected internal error.", _context)}, null, _context);
                return;
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getRecommendedUsers");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get Recommended Items
     * @param {GetRecommendedItemsBody} query    Required parameter: The query for recommended items.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ItemsResponse}
     */
    getRecommendedItems: function (query, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/recommend/items";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "SUGGESTGRID"
        };

        //Remove null values
        _APIHelper.cleanObject(query);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(query),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "getRecommendedItems");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _ItemsResponse(parsed);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 400) {
                callback({errorMessage: "Request body is invalid.", errorCode: 400, errorResponse: new _ErrorResponseException("Request body is invalid.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 422) {
                callback({errorMessage: "Required parameters are missing.", errorCode: 422, errorResponse: new _ErrorResponseException("Required parameters are missing.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse: new _ErrorResponseException("Too many requests.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 0) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 0, errorResponse: new _ErrorResponseException("Unexpected internal error.", _context)}, null, _context);
                return;
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getRecommendedItems");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = RecommendationController;
