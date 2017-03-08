
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
 * @param   {Object}  obj    The object passed to constructor
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
 * The id of the metadata of a user or an item.
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
