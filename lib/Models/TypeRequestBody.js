
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require('./BaseModel');
/**
 * Creates an instance of TypeRequestBody
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
var TypeRequestBody = function (obj) {
    if(!obj) {
        this.rating = null;     
    } else {
        this.rating = (obj.rating !== undefined && obj.rating !== null)? obj.rating : null;
    }
};

TypeRequestBody.prototype = new BaseModel();
TypeRequestBody.prototype.constructor = TypeRequestBody;

/**
 * The rating type of the type. Could be "explicit" or "implicit", where "implicit" is the default.
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
