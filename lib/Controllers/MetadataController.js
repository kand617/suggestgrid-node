/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 06/16/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var MetadataController = {

    /**
     * Create a user metadata.
     * @param {Metadata} metadata    Required parameter: Example:
     * @param {string} userId    Required parameter: The user_id to delete its metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    createAUserMetadata : function(metadata, userId, callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users/{user_id}";

        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "user_id" : userId
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8"
        };

        //Remove null values
        _APIHelper.cleanObject(metadata);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "PUT",
            headers: _headers,
            body : _APIHelper.jsonSerialize(metadata),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };

        //Build the response processing.
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new MessageResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Metadata is invalid.", errorCode: 400, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Delete a user metadata.
     * @param {string} userId    Required parameter: The user_id to delete its metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAUserMetadata : function(userId, callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users/{user_id}";

        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "user_id" : userId
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json"
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new MessageResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Get information about users.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MetadataInformationResponse}
     */
    getUsers : function(callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json"
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new MetadataInformationResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Delete all user metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAllUserMetadata : function(callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json"
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new MessageResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Create an item metadata.
     * @param {Metadata} body    Required parameter: Example:
     * @param {string} itemId    Required parameter: The item_id to delete its metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    createAnItemMetadata : function(body, itemId, callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items/{item_id}";

        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "item_id" : itemId
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8"
        };

        //Remove null values
        _APIHelper.cleanObject(body);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "PUT",
            headers: _headers,
            body : _APIHelper.jsonSerialize(body),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };

        //Build the response processing.
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new MessageResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Metadata is invalid.", errorCode: 400, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Delete an item metadata.
     * @param {string} itemId    Required parameter: The item_id to delete its metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAnItemMetadata : function(itemId, callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items/{item_id}";

        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "item_id" : itemId
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json"
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new MessageResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Get information about items.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MetadataInformationResponse}
     */
    getItems : function(callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json"
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new MetadataInformationResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Delete all item metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAllItemMetadata : function(callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json"
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new MessageResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Post bulk user metadata.
    * @param {Array} metas Required parameter: Example: [Action,Action,Action]
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    postBulkUserMetadata : function(metas, type, callback){

        var body = "";

        metas.forEach(function(meta){
           body += JSON.stringify(meta) + "\n";
        });

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users/_bulk";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "text/plain; charset=utf-8"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body :body,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };

        //Build the response processing.
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new MessageResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 207) {
                callback({errorMessage: "Some metadata is not uploaded successfully.", errorCode: 207, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Post bulk item metadata.
    * @param {Array} metas Required parameter: Example: [Action,Action,Action]
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    postBulkItemMetadata : function(metas, type, callback){

        var body = "";

        metas.forEach(function(meta){
           body += JSON.stringify(meta) + "\n";
        });

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items/_bulk";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "text/plain; charset=utf-8"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body :body,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };

        //Build the response processing.
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new MessageResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 207) {
                callback({errorMessage: "Some metadata is not uploaded successfully.", errorCode: 207, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 429) {
                callback({errorMessage: "Too many requests.", errorCode: 429, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected internal error.", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = MetadataController;
