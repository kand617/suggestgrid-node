
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require('./BaseModel');

/**
 * Creates an instance of Metadata
 *
 * @constructor
 */
var Metadata = function (obj) {
    if(!obj) {
        this.id = null;
    } else {
        for(var key in obj){
            this[key] = obj[key];
        }
    }
};

Metadata.prototype = new BaseModel();
Metadata.prototype.constructor = Metadata;

/**
 * The id of the user or the item that the metadata is associated with.
 * Id parameter is necessary for all metadata.
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
