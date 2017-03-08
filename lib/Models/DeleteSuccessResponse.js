
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require('./BaseModel');
/**
 * Creates an instance of DeleteSuccessResponse
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
var DeleteSuccessResponse = function (obj) {
    if(!obj) {
        this.message = null;     
        this.found = null;     
        this.deleted = null;     
        this.failed = null;     
    } else {
        this.message = (obj.message !== undefined && obj.message !== null)? obj.message : null;
        this.found = (obj.found !== undefined && obj.found !== null)? obj.found : null;
        this.deleted = (obj.deleted !== undefined && obj.deleted !== null)? obj.deleted : null;
        this.failed = (obj.failed !== undefined && obj.failed !== null)? obj.failed : null;
    }
};

DeleteSuccessResponse.prototype = new BaseModel();
DeleteSuccessResponse.prototype.constructor = DeleteSuccessResponse;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
DeleteSuccessResponse.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string|null} value 
 */
DeleteSuccessResponse.prototype.setMessage = function(value) {
    this.message = value;
};

/**
 * The number of records found.
 *
 * @return {long|null}
 */
DeleteSuccessResponse.prototype.getFound = function() {
    return this.found;
};

/**
 * Setter for Found
 * 
 * @param {long|null} value 
 */
DeleteSuccessResponse.prototype.setFound = function(value) {
    this.found = value;
};

/**
 * The number of records deleted.
 *
 * @return {long|null}
 */
DeleteSuccessResponse.prototype.getDeleted = function() {
    return this.deleted;
};

/**
 * Setter for Deleted
 * 
 * @param {long|null} value 
 */
DeleteSuccessResponse.prototype.setDeleted = function(value) {
    this.deleted = value;
};

/**
 * The number of records failed to be deleted.
 *
 * @return {long|null}
 */
DeleteSuccessResponse.prototype.getFailed = function() {
    return this.failed;
};

/**
 * Setter for Failed
 * 
 * @param {long|null} value 
 */
DeleteSuccessResponse.prototype.setFailed = function(value) {
    this.failed = value;
};


module.exports = DeleteSuccessResponse;
