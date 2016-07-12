
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 07/12/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetRecommendedUsersBody
 *
 * @constructor
 */
GetRecommendedUsersBody = function (obj) {
    if(!obj) {
        this.type = null;     
        this.itemId = null;     
        this.itemIds = null;     
        this.filter = null;     
        this.size = null;     
        this.similarUserId = null;     
        this.except = null;     
        //Append to variable dictionary
        this._variableDict['itemId'] = 'item_id';
        this._variableDict['itemIds'] = 'item_ids';
        this._variableDict['similarUserId'] = 'similar_user_id';
    } else {
        this.type = obj.type;
        this.itemId = obj.item_id;
        this.itemIds = obj.item_ids;
        this.filter = obj.filter;
        this.size = obj.size;
        this.similarUserId = obj.similar_user_id;
        this.except = obj.except;
        //Append to variable dictionary
        this._variableDict['itemId'] = 'item_id';
        this._variableDict['itemIds'] = 'item_ids';
        this._variableDict['similarUserId'] = 'similar_user_id';
    }
};

GetRecommendedUsersBody.prototype = new BaseModel();
GetRecommendedUsersBody.prototype.constructor = GetRecommendedUsersBody;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetRecommendedUsersBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string} value 
 */
GetRecommendedUsersBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
GetRecommendedUsersBody.prototype.getItemId = function() {
    return this.itemId;
};

/**
 * Setter for ItemId
 * 
 * @param {string|null} value 
 */
GetRecommendedUsersBody.prototype.setItemId = function(value) {
    this.itemId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetRecommendedUsersBody.prototype.getItemIds = function() {
    return this.itemIds;
};

/**
 * Setter for ItemIds
 * 
 * @param {array|null} value 
 */
GetRecommendedUsersBody.prototype.setItemIds = function(value) {
    this.itemIds = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {object|null}
 */
GetRecommendedUsersBody.prototype.getFilter = function() {
    return this.filter;
};

/**
 * Setter for Filter
 * 
 * @param {object|null} value 
 */
GetRecommendedUsersBody.prototype.setFilter = function(value) {
    this.filter = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int|null}
 */
GetRecommendedUsersBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
GetRecommendedUsersBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
GetRecommendedUsersBody.prototype.getSimilarUserId = function() {
    return this.similarUserId;
};

/**
 * Setter for SimilarUserId
 * 
 * @param {string|null} value 
 */
GetRecommendedUsersBody.prototype.setSimilarUserId = function(value) {
    this.similarUserId = value;
};

/**
 * These ids will not be included in the response.
 *
 * @return {array|null}
 */
GetRecommendedUsersBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
GetRecommendedUsersBody.prototype.setExcept = function(value) {
    this.except = value;
};


module.exports = GetRecommendedUsersBody;