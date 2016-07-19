
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 07/19/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of ErrorResponse
 *
 * @constructor
 */
ErrorResponse = function (obj) {
    if(!obj) {
        this.message = null;     
        this.status = null;     
    } else {
        this.message = obj.message;
        this.status = obj.status;
    }
};

ErrorResponse.prototype = new BaseModel();
ErrorResponse.prototype.constructor = ErrorResponse;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
ErrorResponse.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string|null} value 
 */
ErrorResponse.prototype.setMessage = function(value) {
    this.message = value;
};

/**
 * Status code of the response. It is not 2XX.
 *
 * @return {int|null}
 */
ErrorResponse.prototype.getStatus = function() {
    return this.status;
};

/**
 * Setter for Status
 * 
 * @param {int|null} value 
 */
ErrorResponse.prototype.setStatus = function(value) {
    this.status = value;
};


module.exports = ErrorResponse;