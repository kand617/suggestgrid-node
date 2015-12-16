
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC BETA v2.0 on 12/14/2015
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of SimilarItemsBody
 *
 * @constructor
 */
function SimilarItemsBody() {
    this.size = null;     
    this.except = null;     
}

SimilarItemsBody.prototype = new BaseModel();
SimilarItemsBody.prototype.constructor = BaseModel;

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