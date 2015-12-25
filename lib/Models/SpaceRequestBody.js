
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC BETA v2.0 on 12/25/2015
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of SpaceRequestBody
 *
 * @constructor
 */
function SpaceRequestBody() {
    this.fallback = null;     
}

SpaceRequestBody.prototype = new BaseModel();
SpaceRequestBody.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {bool|null}
 */
SpaceRequestBody.prototype.getFallback = function() {
    return this.fallback;
};

/**
 * Setter for Fallback
 * 
 * @param {bool|null} value 
 */
SpaceRequestBody.prototype.setFallback = function(value) {
    this.fallback = value;
};

module.exports = SpaceRequestBody;