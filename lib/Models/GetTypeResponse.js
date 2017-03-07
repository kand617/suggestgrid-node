
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require('./BaseModel');
/**
 * Creates an instance of GetTypeResponse
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
var GetTypeResponse = function (obj) {
    if(!obj) {
        this.rating = null;     
    } else {
        this.rating = (obj.rating !== undefined && obj.rating !== null)? obj.rating : null;
    }
};

GetTypeResponse.prototype = new BaseModel();
GetTypeResponse.prototype.constructor = GetTypeResponse;

/**
 * Rating type of the type that is either implicit or explicit.
 *
 * @return {string|null}
 */
GetTypeResponse.prototype.getRating = function() {
    return this.rating;
};

/**
 * Setter for Rating
 * 
 * @param {string|null} value 
 */
GetTypeResponse.prototype.setRating = function(value) {
    this.rating = value;
};


module.exports = GetTypeResponse;
