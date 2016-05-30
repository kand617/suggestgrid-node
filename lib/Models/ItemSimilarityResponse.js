
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 05/30/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of ItemSimilarityResponse
 *
 * @constructor
 */
ItemSimilarityResponse = function (obj) {
    if(!obj) {
        this.similarity = null;     
    } else {
        this.similarity = obj.similarity;
    }
};

ItemSimilarityResponse.prototype = new BaseModel();
ItemSimilarityResponse.prototype.constructor = ItemSimilarityResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {double|null}
 */
ItemSimilarityResponse.prototype.getSimilarity = function() {
    return this.similarity;
};

/**
 * Setter for Similarity
 * 
 * @param {double|null} value 
 */
ItemSimilarityResponse.prototype.setSimilarity = function(value) {
    this.similarity = value;
};


module.exports = ItemSimilarityResponse;