/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 03/03/2017
 */

var APIException = require('./APIException');


/**
 * Creates an instance of LimitExceededErrorResponseException
 *
 * @constructor
 * @param	{string}		reason			The message for error cause
 * @param	{HttpContext}	context			HttpContext containing request and response objects
 */
var LimitExceededErrorResponseException = function(reason, context) {
    if (!context) {
        APIException.call(this, reason || null, null);

        /**
         * Message of the response.
         */
        this.errorText = null;

        /**
         * Description of the response.
         */
        this.errorDescription = null;

        /**
         * URI of the response for more details.
         */
        this.errorUri = null;

        /**
         * The quantity used by the account.
         */
        this.used = null;

        /**
         * The limit quantity of the account.
         */
        this.limit = null;

    } else {
        APIException.call(this, reason, context);

        if (context.response.body === undefined || context.response.body === null || context.response.body === "") return;

        var response;
        try {
            response = JSON.parse(context.response.body);
        } catch (e) {
            response = JSON.parse(JSON.stringify(context.response.body));
        }

        /**
         * Message of the response.
         */
        this.errorText = (response.error_text !== null && response.error_text !== undefined)? response.error_text : null;

        /**
         * Description of the response.
         */
        this.errorDescription = (response.error_description !== null && response.error_description !== undefined)? response.error_description : null;

        /**
         * URI of the response for more details.
         */
        this.errorUri = (response.error_uri !== null && response.error_uri !== undefined)? response.error_uri : null;

        /**
         * The quantity used by the account.
         */
        this.used = (response.used !== null && response.used !== undefined)? response.used : null;

        /**
         * The limit quantity of the account.
         */
        this.limit = (response.limit !== null && response.limit !== undefined)? response.limit : null;

    }
};

LimitExceededErrorResponseException.prototype = new APIException();
LimitExceededErrorResponseException.prototype.constructor = LimitExceededErrorResponseException;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
LimitExceededErrorResponseException.prototype.getErrorText = function() {
    return this.errorText;
};

/**
 * Setter for ErrorText
 * 
 * @param {string|null} value 
 */
LimitExceededErrorResponseException.prototype.setErrorText = function(value) {
    this.errorText = value;
};

/**
 * Description of the response.
 *
 * @return {string|null}
 */
LimitExceededErrorResponseException.prototype.getErrorDescription = function() {
    return this.errorDescription;
};

/**
 * Setter for ErrorDescription
 * 
 * @param {string|null} value 
 */
LimitExceededErrorResponseException.prototype.setErrorDescription = function(value) {
    this.errorDescription = value;
};

/**
 * URI of the response for more details.
 *
 * @return {string|null}
 */
LimitExceededErrorResponseException.prototype.getErrorUri = function() {
    return this.errorUri;
};

/**
 * Setter for ErrorUri
 * 
 * @param {string|null} value 
 */
LimitExceededErrorResponseException.prototype.setErrorUri = function(value) {
    this.errorUri = value;
};

/**
 * The quantity used by the account.
 *
 * @return {long|null}
 */
LimitExceededErrorResponseException.prototype.getUsed = function() {
    return this.used;
};

/**
 * Setter for Used
 * 
 * @param {long|null} value 
 */
LimitExceededErrorResponseException.prototype.setUsed = function(value) {
    this.used = value;
};

/**
 * The limit quantity of the account.
 *
 * @return {long|null}
 */
LimitExceededErrorResponseException.prototype.getLimit = function() {
    return this.limit;
};

/**
 * Setter for Limit
 * 
 * @param {long|null} value 
 */
LimitExceededErrorResponseException.prototype.setLimit = function(value) {
    this.limit = value;
};


module.exports = LimitExceededErrorResponseException;
