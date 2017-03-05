
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require('./BaseModel');

/**
 * Creates an instance of BulkPostError
 *
 * @constructor
 */
var BulkPostError = function (obj) {
    if(!obj) {
        this.message = null;     
        this.value = null;     
        this.error = null;     
    } else {
        this.message = (obj.message !== undefined && obj.message !== null)? obj.message : null;
        this.value = (obj.value !== undefined && obj.value !== null)? obj.value : null;
        this.error = (obj.error !== undefined && obj.error !== null)? obj.error : null;
    }
};

BulkPostError.prototype = new BaseModel();
BulkPostError.prototype.constructor = BulkPostError;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
BulkPostError.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string|null} value 
 */
BulkPostError.prototype.setMessage = function(value) {
    this.message = value;
};

/**
 * The cause of the error.
 *
 * @return {object|null}
 */
BulkPostError.prototype.getValue = function() {
    return this.value;
};

/**
 * Setter for Value
 * 
 * @param {object|null} value 
 */
BulkPostError.prototype.setValue = function(value) {
    this.value = value;
};

/**
 * Programatic description of the error.
 *
 * @return {object|null}
 */
BulkPostError.prototype.getError = function() {
    return this.error;
};

/**
 * Setter for Error
 * 
 * @param {object|null} value 
 */
BulkPostError.prototype.setError = function(value) {
    this.error = value;
};


module.exports = BulkPostError;
