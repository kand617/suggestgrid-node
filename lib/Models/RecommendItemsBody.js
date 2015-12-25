
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC BETA v2.0 on 12/25/2015
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of RecommendItemsBody
 *
 * @constructor
 */
function RecommendItemsBody() {
    this.userid = null;     
    this.userids = null;     
    this.filter = null;     
    this.size = null;     
    this.similarItemid = null;     
    this.except = null;     
    //Append to variable dictionary
    this._variableDict['similarItemid'] = 'similar_itemid';
}

RecommendItemsBody.prototype = new BaseModel();
RecommendItemsBody.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
RecommendItemsBody.prototype.getUserid = function() {
    return this.userid;
};

/**
 * Setter for Userid
 * 
 * @param {string|null} value 
 */
RecommendItemsBody.prototype.setUserid = function(value) {
    this.userid = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
RecommendItemsBody.prototype.getUserids = function() {
    return this.userids;
};

/**
 * Setter for Userids
 * 
 * @param {array|null} value 
 */
RecommendItemsBody.prototype.setUserids = function(value) {
    this.userids = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {mixed|null}
 */
RecommendItemsBody.prototype.getFilter = function() {
    return this.filter;
};

/**
 * Setter for Filter
 * 
 * @param {mixed|null} value 
 */
RecommendItemsBody.prototype.setFilter = function(value) {
    this.filter = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int|null}
 */
RecommendItemsBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
RecommendItemsBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
RecommendItemsBody.prototype.getSimilarItemid = function() {
    return this.similarItemid;
};

/**
 * Setter for SimilarItemid
 * 
 * @param {string|null} value 
 */
RecommendItemsBody.prototype.setSimilarItemid = function(value) {
    this.similarItemid = value;
};

/**
 * These ids will not be included in the response.
 *
 * @return {array|null}
 */
RecommendItemsBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
RecommendItemsBody.prototype.setExcept = function(value) {
    this.except = value;
};

module.exports = RecommendItemsBody;