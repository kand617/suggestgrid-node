
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 07/27/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Metadata
 *
 * @constructor
 */
Metadata = function (obj) {
    if(!obj) {
        this.id = null;     
    } else {
        this.id = obj.id;
    }
};

Metadata.prototype = new BaseModel();
Metadata.prototype.constructor = Metadata;

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Metadata.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {string|null} value 
 */
Metadata.prototype.setId = function(value) {
    this.id = value;
};


module.exports = Metadata;