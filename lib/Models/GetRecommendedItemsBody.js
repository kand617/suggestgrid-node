
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 07/12/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetRecommendedItemsBody
 *
 * @constructor
 */
GetRecommendedItemsBody = function (obj) {
    if(!obj) {
        this.type = null;     
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
        this.type = obj.type;
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

GetRecommendedItemsBody.prototype = new BaseModel();
GetRecommendedItemsBody.prototype.constructor = GetRecommendedItemsBody;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetRecommendedItemsBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string} value 
 */
GetRecommendedItemsBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
GetRecommendedItemsBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {string|null} value 
 */
GetRecommendedItemsBody.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetRecommendedItemsBody.prototype.getUserIds = function() {
    return this.userIds;
};

/**
 * Setter for UserIds
 * 
 * @param {array|null} value 
 */
GetRecommendedItemsBody.prototype.setUserIds = function(value) {
    this.userIds = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {object|null}
 */
GetRecommendedItemsBody.prototype.getFilter = function() {
    return this.filter;
};

/**
 * Setter for Filter
 * 
 * @param {object|null} value 
 */
GetRecommendedItemsBody.prototype.setFilter = function(value) {
    this.filter = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int|null}
 */
GetRecommendedItemsBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
GetRecommendedItemsBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
GetRecommendedItemsBody.prototype.getSimilarItemId = function() {
    return this.similarItemId;
};

/**
 * Setter for SimilarItemId
 * 
 * @param {string|null} value 
 */
GetRecommendedItemsBody.prototype.setSimilarItemId = function(value) {
    this.similarItemId = value;
};

/**
 * These ids will not be included in the response.
 *
 * @return {array|null}
 */
GetRecommendedItemsBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
GetRecommendedItemsBody.prototype.setExcept = function(value) {
    this.except = value;
};


module.exports = GetRecommendedItemsBody;