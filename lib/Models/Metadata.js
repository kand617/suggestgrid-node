
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 on 05/02/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Metadata
 *
 * @constructor
 */
function Metadata() {
    this.id = null;     
}

Metadata.prototype = new BaseModel();
Metadata.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Metadata.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {string} value 
 */
Metadata.prototype.setId = function(value) {
    this.id = value;
};

module.exports = Metadata;