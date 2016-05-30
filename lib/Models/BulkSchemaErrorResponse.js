
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 05/30/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of BulkSchemaErrorResponse
 *
 * @constructor
 */
BulkSchemaErrorResponse = function (obj) {
    if(!obj) {
        this.message = null;     
        this.errors = null;     
    } else {
        this.message = obj.message;
        this.errors = obj.errors.map(function(model){
            return new SchemaErrorResponse(model);
        });
    }
};

BulkSchemaErrorResponse.prototype = new BaseModel();
BulkSchemaErrorResponse.prototype.constructor = BulkSchemaErrorResponse;

/**
 * Message of the response.
 *
 * @return {string|null}
 */
BulkSchemaErrorResponse.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string|null} value 
 */
BulkSchemaErrorResponse.prototype.setMessage = function(value) {
    this.message = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
BulkSchemaErrorResponse.prototype.getErrors = function() {
    return this.errors;
};

/**
 * Setter for Errors
 * 
 * @param {array|null} value 
 */
BulkSchemaErrorResponse.prototype.setErrors = function(value) {
    this.errors = value;
};


module.exports = BulkSchemaErrorResponse;