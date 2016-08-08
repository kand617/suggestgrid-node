
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 08/08/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetTypesResponse
 *
 * @constructor
 */
GetTypesResponse = function (obj) {
    if(!obj) {
        this.types = null;     
        this.status = null;     
    } else {
        this.types = obj.types;
        this.status = obj.status;
    }
};

GetTypesResponse.prototype = new BaseModel();
GetTypesResponse.prototype.constructor = GetTypesResponse;

/**
 * The list of type names
 *
 * @return {array|null}
 */
GetTypesResponse.prototype.getTypes = function() {
    return this.types;
};

/**
 * Setter for Types
 * 
 * @param {array|null} value 
 */
GetTypesResponse.prototype.setTypes = function(value) {
    this.types = value;
};

/**
 * Status code of the response. It is not 2XX.
 *
 * @return {int|null}
 */
GetTypesResponse.prototype.getStatus = function() {
    return this.status;
};

/**
 * Setter for Status
 * 
 * @param {int|null} value 
 */
GetTypesResponse.prototype.setStatus = function(value) {
    this.status = value;
};


module.exports = GetTypesResponse;