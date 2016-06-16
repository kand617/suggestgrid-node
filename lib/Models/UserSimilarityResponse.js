
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 06/16/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UserSimilarityResponse
 *
 * @constructor
 */
UserSimilarityResponse = function (obj) {
    if(!obj) {
        this.similarity = null;     
    } else {
        this.similarity = obj.similarity;
    }
};

UserSimilarityResponse.prototype = new BaseModel();
UserSimilarityResponse.prototype.constructor = UserSimilarityResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {double|null}
 */
UserSimilarityResponse.prototype.getSimilarity = function() {
    return this.similarity;
};

/**
 * Setter for Similarity
 * 
 * @param {double|null} value 
 */
UserSimilarityResponse.prototype.setSimilarity = function(value) {
    this.similarity = value;
};


module.exports = UserSimilarityResponse;