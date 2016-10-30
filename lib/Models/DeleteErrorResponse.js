
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 10/30/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of DeleteErrorResponse
 *
 * @constructor
 */
DeleteErrorResponse = function (obj) {
    if(!obj) {
        this.errorText = null;     
        this.errorDescription = null;     
        this.errorUri = null;     
        this.found = null;     
        this.deleted = null;     
        this.failed = null;     
        //Append to variable dictionary
        this._variableDict['errorText'] = 'error_text';
        this._variableDict['errorDescription'] = 'error_description';
        this._variableDict['errorUri'] = 'error_uri';
    } else {
        this.errorText = obj.error_text;
        this.errorDescription = obj.error_description;
        this.errorUri = obj.error_uri;
        this.found = obj.found;
        this.deleted = obj.deleted;
        this.failed = obj.failed;
        //Append to variable dictionary
        this._variableDict['errorText'] = 'error_text';
        this._variableDict['errorDescription'] = 'error_description';
        this._variableDict['errorUri'] = 'error_uri';
    }
};

DeleteErrorResponse.prototype = new BaseModel();
DeleteErrorResponse.prototype.constructor = DeleteErrorResponse;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
DeleteErrorResponse.prototype.getErrorText = function() {
    return this.errorText;
};

/**
 * Setter for ErrorText
 * 
 * @param {string|null} value 
 */
DeleteErrorResponse.prototype.setErrorText = function(value) {
    this.errorText = value;
};

/**
 * Description of the response.
 *
 * @return {string|null}
 */
DeleteErrorResponse.prototype.getErrorDescription = function() {
    return this.errorDescription;
};

/**
 * Setter for ErrorDescription
 * 
 * @param {string|null} value 
 */
DeleteErrorResponse.prototype.setErrorDescription = function(value) {
    this.errorDescription = value;
};

/**
 * URI of the response for more details.
 *
 * @return {string|null}
 */
DeleteErrorResponse.prototype.getErrorUri = function() {
    return this.errorUri;
};

/**
 * Setter for ErrorUri
 * 
 * @param {string|null} value 
 */
DeleteErrorResponse.prototype.setErrorUri = function(value) {
    this.errorUri = value;
};

/**
 * The number of records found for the delete query.
 *
 * @return {int|null}
 */
DeleteErrorResponse.prototype.getFound = function() {
    return this.found;
};

/**
 * Setter for Found
 * 
 * @param {int|null} value 
 */
DeleteErrorResponse.prototype.setFound = function(value) {
    this.found = value;
};

/**
 * The number of records deleted for the delete query.
 *
 * @return {int|null}
 */
DeleteErrorResponse.prototype.getDeleted = function() {
    return this.deleted;
};

/**
 * Setter for Deleted
 * 
 * @param {int|null} value 
 */
DeleteErrorResponse.prototype.setDeleted = function(value) {
    this.deleted = value;
};

/**
 * The number of records found but not deleted for the delete query.
 *
 * @return {int|null}
 */
DeleteErrorResponse.prototype.getFailed = function() {
    return this.failed;
};

/**
 * Setter for Failed
 * 
 * @param {int|null} value 
 */
DeleteErrorResponse.prototype.setFailed = function(value) {
    this.failed = value;
};


module.exports = DeleteErrorResponse;