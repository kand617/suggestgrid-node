
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var BulkPostError = require('./BulkPostError');
var BaseModel = require('./BaseModel');

/**
 * Creates an instance of BulkPostResponse
 *
 * @constructor
 */
var BulkPostResponse = function (obj) {
    if(!obj) {
        this.message = null;     
        this.errors = null;     
    } else {
        this.message = (obj.message !== undefined && obj.message !== null)? obj.message : null;
        this.errors = (obj.errors !== undefined && obj.errors !== null)? obj.errors.map(function(model){
            return new BulkPostError(model);
        }) : null;
    }
};

BulkPostResponse.prototype = new BaseModel();
BulkPostResponse.prototype.constructor = BulkPostResponse;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
BulkPostResponse.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string|null} value 
 */
BulkPostResponse.prototype.setMessage = function(value) {
    this.message = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
BulkPostResponse.prototype.getErrors = function() {
    return this.errors;
};

/**
 * Setter for Errors
 * 
 * @param {array|null} value 
 */
BulkPostResponse.prototype.setErrors = function(value) {
    this.errors = value;
};


module.exports = BulkPostResponse;
