
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC BETA v2.0 on 12/14/2015
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of SimilarUsersBody
 *
 * @constructor
 */
function SimilarUsersBody() {
    this.size = null;     
    this.except = null;     
}

SimilarUsersBody.prototype = new BaseModel();
SimilarUsersBody.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {int|null}
 */
SimilarUsersBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
SimilarUsersBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * These ids will not be included in the response.
 *
 * @return {array|null}
 */
SimilarUsersBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
SimilarUsersBody.prototype.setExcept = function(value) {
    this.except = value;
};

module.exports = SimilarUsersBody;