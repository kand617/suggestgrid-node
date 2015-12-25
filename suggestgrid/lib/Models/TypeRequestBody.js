
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC BETA v2.0 on 12/24/2015
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of TypeRequestBody
 *
 * @constructor
 */
function TypeRequestBody() {
    this.rating = null;     
}

TypeRequestBody.prototype = new BaseModel();
TypeRequestBody.prototype.constructor = BaseModel;

/**
 * Could be "explicit" or "implicit"
 * The default is "implicit".
 *
 * @return {string|null}
 */
TypeRequestBody.prototype.getRating = function() {
    return this.rating;
};

/**
 * Setter for Rating
 * 
 * @param {string|null} value 
 */
TypeRequestBody.prototype.setRating = function(value) {
    this.rating = value;
};

module.exports = TypeRequestBody;