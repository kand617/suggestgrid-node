
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetTypesResponse
 *
 * @constructor
 */
var GetTypesResponse = function (obj) {
    if(!obj) {
        this.types = null;     
    } else {
        this.types = (obj.types !== undefined && obj.types !== null)? obj.types : null;
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


module.exports = GetTypesResponse;
