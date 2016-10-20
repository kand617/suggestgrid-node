/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 10/20/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var MetadataController = {

    /**
     * Delete a User
     * @param {string} userId    Required parameter: The user id to delete its metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteUser : function(userId, callback){

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
            "user-agent" : "SUGGESTGRID"
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
     * Get Users
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
            "accept" : "application/json",
            "user-agent" : "SUGGESTGRID"
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
     * Post a User
     * @param {Metadata} user    Required parameter: The metadata to be saved. Metadata format has its restrictions.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    postUser : function(user, callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "user-agent" : "SUGGESTGRID"
        };

        //Remove null values
        _APIHelper.cleanObject(user);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(user),
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
     * Delete All Users
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAllUsers : function(callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/users";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "user-agent" : "SUGGESTGRID"
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
     * Delete an Item
     * @param {string} itemId    Required parameter: The item id to delete its metadata.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteItem : function(itemId, callback){

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
            "user-agent" : "SUGGESTGRID"
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
     * Get Items
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
            "accept" : "application/json",
            "user-agent" : "SUGGESTGRID"
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
     * Post an Item
     * @param {Metadata} item    Required parameter: The metadata to be saved. Metadata format has its restrictions.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    postItem : function(item, callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "user-agent" : "SUGGESTGRID"
        };

        //Remove null values
        _APIHelper.cleanObject(item);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(item),
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
     * Delete All Items
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    deleteAllItems : function(callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;

        var _queryBuilder = _baseUri + "/v1/items";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "user-agent" : "SUGGESTGRID"
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
     * Post Bulk Users
     * @param {Array} users Required parameter. Limited to 10 thousand users. Example: [Metadata, Metadata, ...]
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    postBulkUsers : function(users, callback){

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
            "content-type" : "text/plain; charset=utf-8",
            "user-agent" : "SUGGESTGRID"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body :users,
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
            } else if (_response.statusCode == 209) {
                callback({errorMessage: "Some metadata is not uploaded successfully.", errorCode: 209, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Body is missing.", errorCode: 400, errorResponse:_response.body},null,_context);
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
     * Post Bulk Items
     * @param {Array} items Required parameter. Limited to 10 thousand items. Example: [Metadata, Metadata, ...]
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MessageResponse}
     */
    postBulkItems : function(items, callback){

        var body = "";

        items.forEach(function(meta){
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
            "content-type" : "text/plain; charset=utf-8",
            "user-agent" : "SUGGESTGRID"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body :items,
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
            } else if (_response.statusCode == 209) {
                callback({errorMessage: "Some metadata is not uploaded successfully.", errorCode: 209, errorResponse:_response.body},null,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Body is missing.", errorCode: 400, errorResponse:_response.body},null,_context);
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
