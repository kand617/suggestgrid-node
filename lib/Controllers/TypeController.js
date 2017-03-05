/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */

var _request = require('../Http/Client/RequestClient');
var _configuration = require('../configuration');
var _APIHelper = require('../APIHelper');
var _BaseController = require('./BaseController');
var _LimitExceededErrorResponseException = require('../Exceptions/LimitExceededErrorResponseException');
var _ErrorResponseException = require('../Exceptions/ErrorResponseException');
var _MessageResponse = require('../Models/MessageResponse');
var _GetTypeResponse = require('../Models/GetTypeResponse');
var _GetTypesResponse = require('../Models/GetTypesResponse');


var TypeController = {

    /**
     * Create a New Type
     * @param {string} type    Required parameter: The name of the type.
     * @param {TypeRequestBody|null} settings    Optional parameter: Optional settings for the rating parameter.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    createType: function (type, settings, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/types/{type}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "type": type
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "SUGGESTGRID"
        };

        //Remove null values
        _APIHelper.cleanObject(settings);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "PUT",
            headers: _headers,
            body : _APIHelper.jsonSerialize(settings),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "createType");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _MessageResponse(parsed);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 402) {
                callback({errorMessage: "Type limit reached.", errorCode: 402, errorResponse: new _LimitExceededErrorResponseException("Type limit reached.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 409) {
                callback({errorMessage: "Type already exists.", errorCode: 409, errorResponse: new _ErrorResponseException("Type already exists.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 422) {
                callback({errorMessage: "Rating type is not `implicit` or `explicit`.", errorCode: 422, errorResponse: new _ErrorResponseException("Rating type is not `implicit` or `explicit`.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse: new _ErrorResponseException("Too many requests.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 0) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 0, errorResponse: new _ErrorResponseException("Unexpected internal error.", _context)}, null, _context);
                return;
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createType");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get Properties of a Type
     * @param {string} type    Required parameter: The name of the type to get properties.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetTypeResponse}
     */
    getType: function (type, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/types/{type}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "type": type
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "SUGGESTGRID"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "getType");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _GetTypeResponse(parsed);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 404) {
               callback(null, _response.body, _context);
               return;
            }
             else if (_response.statusCode === 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse: new _ErrorResponseException("Too many requests.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 0) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 0, errorResponse: new _ErrorResponseException("Unexpected internal error.", _context)}, null, _context);
                return;
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getType");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Delete a Type
     * @param {string} type    Required parameter: The name of the type to be deleted.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteType: function (type, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/types/{type}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "type": type
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "SUGGESTGRID"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "DELETE",
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "deleteType");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _MessageResponse(parsed);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 404) {
               callback(null, _response.body, _context);
               return;
            }
             else if (_response.statusCode === 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse: new _ErrorResponseException("Too many requests.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 0) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 0, errorResponse: new _ErrorResponseException("Unexpected internal error.", _context)}, null, _context);
                return;
            } else {
                errorResponse = _BaseController.validateResponse(_context, "deleteType");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Get All Types
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetTypesResponse}
     */
    getAllTypes: function (callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/types";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "SUGGESTGRID"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "getAllTypes");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _GetTypesResponse(parsed);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse: new _ErrorResponseException("Too many requests.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 0) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 0, errorResponse: new _ErrorResponseException("Unexpected internal error.", _context)}, null, _context);
                return;
            } else {
                errorResponse = _BaseController.validateResponse(_context, "getAllTypes");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    },


    /**
     * Delete All Types
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAllTypes: function (callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/v1/types";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "user-agent": "SUGGESTGRID"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "DELETE",
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "deleteAllTypes");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new _MessageResponse(parsed);
                callback(null, parsed, _context);
            } else if (_response.statusCode === 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse: new _ErrorResponseException("Too many requests.", _context)}, null, _context);
                return;
            } else if (_response.statusCode === 0) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 0, errorResponse: new _ErrorResponseException("Unexpected internal error.", _context)}, null, _context);
                return;
            } else {
                errorResponse = _BaseController.validateResponse(_context, "deleteAllTypes");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        }
        
        _request(_options, cb);
    }

};

module.exports = TypeController;
