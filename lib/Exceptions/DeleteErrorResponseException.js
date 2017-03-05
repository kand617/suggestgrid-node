/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 03/03/2017
 */

var APIException = require('./APIException');


/**
 * Creates an instance of DeleteErrorResponseException
 *
 * @constructor
 * @param	{string}		reason			The message for error cause
 * @param	{HttpContext}	context			HttpContext containing request and response objects
 */
var DeleteErrorResponseException = function(reason, context) {
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
         * The number of records found for the delete query.
         */
        this.found = null;

        /**
         * The number of records deleted for the delete query.
         */
        this.deleted = null;

        /**
         * The number of records found but not deleted for the delete query.
         */
        this.failed = null;

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
         * The number of records found for the delete query.
         */
        this.found = (response.found !== null && response.found !== undefined)? response.found : null;

        /**
         * The number of records deleted for the delete query.
         */
        this.deleted = (response.deleted !== null && response.deleted !== undefined)? response.deleted : null;

        /**
         * The number of records found but not deleted for the delete query.
         */
        this.failed = (response.failed !== null && response.failed !== undefined)? response.failed : null;

    }
};

DeleteErrorResponseException.prototype = new APIException();
DeleteErrorResponseException.prototype.constructor = DeleteErrorResponseException;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
DeleteErrorResponseException.prototype.getErrorText = function() {
    return this.errorText;
};

/**
 * Setter for ErrorText
 * 
 * @param {string|null} value 
 */
DeleteErrorResponseException.prototype.setErrorText = function(value) {
    this.errorText = value;
};

/**
 * Description of the response.
 *
 * @return {string|null}
 */
DeleteErrorResponseException.prototype.getErrorDescription = function() {
    return this.errorDescription;
};

/**
 * Setter for ErrorDescription
 * 
 * @param {string|null} value 
 */
DeleteErrorResponseException.prototype.setErrorDescription = function(value) {
    this.errorDescription = value;
};

/**
 * URI of the response for more details.
 *
 * @return {string|null}
 */
DeleteErrorResponseException.prototype.getErrorUri = function() {
    return this.errorUri;
};

/**
 * Setter for ErrorUri
 * 
 * @param {string|null} value 
 */
DeleteErrorResponseException.prototype.setErrorUri = function(value) {
    this.errorUri = value;
};

/**
 * The number of records found for the delete query.
 *
 * @return {long|null}
 */
DeleteErrorResponseException.prototype.getFound = function() {
    return this.found;
};

/**
 * Setter for Found
 * 
 * @param {long|null} value 
 */
DeleteErrorResponseException.prototype.setFound = function(value) {
    this.found = value;
};

/**
 * The number of records deleted for the delete query.
 *
 * @return {long|null}
 */
DeleteErrorResponseException.prototype.getDeleted = function() {
    return this.deleted;
};

/**
 * Setter for Deleted
 * 
 * @param {long|null} value 
 */
DeleteErrorResponseException.prototype.setDeleted = function(value) {
    this.deleted = value;
};

/**
 * The number of records found but not deleted for the delete query.
 *
 * @return {long|null}
 */
DeleteErrorResponseException.prototype.getFailed = function() {
    return this.failed;
};

/**
 * Setter for Failed
 * 
 * @param {long|null} value 
 */
DeleteErrorResponseException.prototype.setFailed = function(value) {
    this.failed = value;
};


module.exports = DeleteErrorResponseException;
