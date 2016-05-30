
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 05/30/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of SimilarItemsBody
 *
 * @constructor
 */
SimilarItemsBody = function (obj) {
    if(!obj) {
        this.size = null;     
        this.except = null;     
    } else {
        this.size = obj.size;
        this.except = obj.except;
    }
};

SimilarItemsBody.prototype = new BaseModel();
SimilarItemsBody.prototype.constructor = SimilarItemsBody;

/**
 * TODO: Write general description for this method
 *
 * @return {int|null}
 */
SimilarItemsBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
SimilarItemsBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * These ids will not be included in the response.
 *
 * @return {array|null}
 */
SimilarItemsBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
SimilarItemsBody.prototype.setExcept = function(value) {
    this.except = value;
};


module.exports = SimilarItemsBody;