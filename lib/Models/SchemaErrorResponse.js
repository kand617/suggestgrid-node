
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 10/20/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of SchemaErrorResponse
 *
 * @constructor
 */
SchemaErrorResponse = function (obj) {
    if(!obj) {
        this.message = null;     
        this.value = null;     
        this.error = null;     
    } else {
        this.message = obj.message;
        this.value = obj.value;
        this.error = obj.error;
    }
};

SchemaErrorResponse.prototype = new BaseModel();
SchemaErrorResponse.prototype.constructor = SchemaErrorResponse;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
SchemaErrorResponse.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string|null} value 
 */
SchemaErrorResponse.prototype.setMessage = function(value) {
    this.message = value;
};

/**
 * The cause of the error.
 *
 * @return {object|null}
 */
SchemaErrorResponse.prototype.getValue = function() {
    return this.value;
};

/**
 * Setter for Value
 * 
 * @param {object|null} value 
 */
SchemaErrorResponse.prototype.setValue = function(value) {
    this.value = value;
};

/**
 * Programatic description of the error.
 *
 * @return {object|null}
 */
SchemaErrorResponse.prototype.getError = function() {
    return this.error;
};

/**
 * Setter for Error
 * 
 * @param {object|null} value 
 */
SchemaErrorResponse.prototype.setError = function(value) {
    this.error = value;
};


module.exports = SchemaErrorResponse;