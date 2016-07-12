
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 07/12/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of MetadataInformationResponse
 *
 * @constructor
 */
MetadataInformationResponse = function (obj) {
    if(!obj) {
        this.count = null;     
    } else {
        this.count = obj.count;
    }
};

MetadataInformationResponse.prototype = new BaseModel();
MetadataInformationResponse.prototype.constructor = MetadataInformationResponse;

/**
 * The number of users or items with metadata.
 *
 * @return {long|null}
 */
MetadataInformationResponse.prototype.getCount = function() {
    return this.count;
};

/**
 * Setter for Count
 * 
 * @param {long|null} value 
 */
MetadataInformationResponse.prototype.setCount = function(value) {
    this.count = value;
};


module.exports = MetadataInformationResponse;