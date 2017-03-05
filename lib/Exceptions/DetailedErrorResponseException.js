/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 03/03/2017
 */

var APIException = require('./APIException');


/**
 * Creates an instance of DetailedErrorResponseException
 *
 * @constructor
 * @param	{string}		reason			The message for error cause
 * @param	{HttpContext}	context			HttpContext containing request and response objects
 */
var DetailedErrorResponseException = function(reason, context) {
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
         * Specific details of the response.
         */
        this.errorDetails = null;

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
         * Specific details of the response.
         */
        this.errorDetails = (response.error_details !== null && response.error_details !== undefined)? response.error_details : null;

    }
};

DetailedErrorResponseException.prototype = new APIException();
DetailedErrorResponseException.prototype.constructor = DetailedErrorResponseException;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
DetailedErrorResponseException.prototype.getErrorText = function() {
    return this.errorText;
};

/**
 * Setter for ErrorText
 * 
 * @param {string|null} value 
 */
DetailedErrorResponseException.prototype.setErrorText = function(value) {
    this.errorText = value;
};

/**
 * Description of the response.
 *
 * @return {string|null}
 */
DetailedErrorResponseException.prototype.getErrorDescription = function() {
    return this.errorDescription;
};

/**
 * Setter for ErrorDescription
 * 
 * @param {string|null} value 
 */
DetailedErrorResponseException.prototype.setErrorDescription = function(value) {
    this.errorDescription = value;
};

/**
 * URI of the response for more details.
 *
 * @return {string|null}
 */
DetailedErrorResponseException.prototype.getErrorUri = function() {
    return this.errorUri;
};

/**
 * Setter for ErrorUri
 * 
 * @param {string|null} value 
 */
DetailedErrorResponseException.prototype.setErrorUri = function(value) {
    this.errorUri = value;
};

/**
 * Specific details of the response.
 *
 * @return {string|null}
 */
DetailedErrorResponseException.prototype.getErrorDetails = function() {
    return this.errorDetails;
};

/**
 * Setter for ErrorDetails
 * 
 * @param {string|null} value 
 */
DetailedErrorResponseException.prototype.setErrorDetails = function(value) {
    this.errorDetails = value;
};


module.exports = DetailedErrorResponseException;
