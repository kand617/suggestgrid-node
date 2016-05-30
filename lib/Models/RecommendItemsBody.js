
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 05/30/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of RecommendItemsBody
 *
 * @constructor
 */
RecommendItemsBody = function (obj) {
    if(!obj) {
        this.userId = null;     
        this.userIds = null;     
        this.filter = null;     
        this.size = null;     
        this.similarItemId = null;     
        this.except = null;     
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['userIds'] = 'user_ids';
        this._variableDict['similarItemId'] = 'similar_item_id';
    } else {
        this.userId = obj.user_id;
        this.userIds = obj.user_ids;
        this.filter = obj.filter;
        this.size = obj.size;
        this.similarItemId = obj.similar_item_id;
        this.except = obj.except;
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['userIds'] = 'user_ids';
        this._variableDict['similarItemId'] = 'similar_item_id';
    }
};

RecommendItemsBody.prototype = new BaseModel();
RecommendItemsBody.prototype.constructor = RecommendItemsBody;

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
RecommendItemsBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {string|null} value 
 */
RecommendItemsBody.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
RecommendItemsBody.prototype.getUserIds = function() {
    return this.userIds;
};

/**
 * Setter for UserIds
 * 
 * @param {array|null} value 
 */
RecommendItemsBody.prototype.setUserIds = function(value) {
    this.userIds = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {object|null}
 */
RecommendItemsBody.prototype.getFilter = function() {
    return this.filter;
};

/**
 * Setter for Filter
 * 
 * @param {object|null} value 
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
RecommendItemsBody.prototype.getSimilarItemId = function() {
    return this.similarItemId;
};

/**
 * Setter for SimilarItemId
 * 
 * @param {string|null} value 
 */
RecommendItemsBody.prototype.setSimilarItemId = function(value) {
    this.similarItemId = value;
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