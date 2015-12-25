
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC BETA v2.0 on 12/24/2015
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of RecommendUsersBody
 *
 * @constructor
 */
function RecommendUsersBody() {
    this.itemid = null;     
    this.itemids = null;     
    this.filter = null;     
    this.size = null;     
    this.similarUserid = null;     
    this.except = null;     
    //Append to variable dictionary
    this._variableDict['similarUserid'] = 'similar_userid';
}

RecommendUsersBody.prototype = new BaseModel();
RecommendUsersBody.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
RecommendUsersBody.prototype.getItemid = function() {
    return this.itemid;
};

/**
 * Setter for Itemid
 * 
 * @param {string|null} value 
 */
RecommendUsersBody.prototype.setItemid = function(value) {
    this.itemid = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
RecommendUsersBody.prototype.getItemids = function() {
    return this.itemids;
};

/**
 * Setter for Itemids
 * 
 * @param {array|null} value 
 */
RecommendUsersBody.prototype.setItemids = function(value) {
    this.itemids = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {mixed|null}
 */
RecommendUsersBody.prototype.getFilter = function() {
    return this.filter;
};

/**
 * Setter for Filter
 * 
 * @param {mixed|null} value 
 */
RecommendUsersBody.prototype.setFilter = function(value) {
    this.filter = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int|null}
 */
RecommendUsersBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
RecommendUsersBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
RecommendUsersBody.prototype.getSimilarUserid = function() {
    return this.similarUserid;
};

/**
 * Setter for SimilarUserid
 * 
 * @param {string|null} value 
 */
RecommendUsersBody.prototype.setSimilarUserid = function(value) {
    this.similarUserid = value;
};

/**
 * These ids will not be included in the response.
 *
 * @return {array|null}
 */
RecommendUsersBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
RecommendUsersBody.prototype.setExcept = function(value) {
    this.except = value;
};

module.exports = RecommendUsersBody;