
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require('./BaseModel');
/**
 * Creates an instance of GetRecommendedItemsBody
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
var GetRecommendedItemsBody = function (obj) {
    if(!obj) {
        this.type = null;     
        this.types = null;     
        this.userId = null;     
        this.userIds = null;     
        this.from = null;     
        this.size = null;     
        this.similarItemId = null;     
        this.similarItemIds = null;     
        this.fields = null;     
        this.filter = null;     
        this.except = null;     
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['userIds'] = 'user_ids';
        this._variableDict['similarItemId'] = 'similar_item_id';
        this._variableDict['similarItemIds'] = 'similar_item_ids';
    } else {
        this.type = (obj.type !== undefined && obj.type !== null)? obj.type : null;
        this.types = (obj.types !== undefined && obj.types !== null)? obj.types : null;
        this.userId = (obj.user_id !== undefined && obj.user_id !== null)? obj.user_id : null;
        this.userIds = (obj.user_ids !== undefined && obj.user_ids !== null)? obj.user_ids : null;
        this.from = (obj.from !== undefined && obj.from !== null)? obj.from : null;
        this.size = (obj.size !== undefined && obj.size !== null)? obj.size : null;
        this.similarItemId = (obj.similar_item_id !== undefined && obj.similar_item_id !== null)? obj.similar_item_id : null;
        this.similarItemIds = (obj.similar_item_ids !== undefined && obj.similar_item_ids !== null)? obj.similar_item_ids : null;
        this.fields = (obj.fields !== undefined && obj.fields !== null)? obj.fields : null;
        this.filter = (obj.filter !== undefined && obj.filter !== null)? obj.filter : null;
        this.except = (obj.except !== undefined && obj.except !== null)? obj.except : null;
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['userIds'] = 'user_ids';
        this._variableDict['similarItemId'] = 'similar_item_id';
        this._variableDict['similarItemIds'] = 'similar_item_ids';
    }
};

GetRecommendedItemsBody.prototype = new BaseModel();
GetRecommendedItemsBody.prototype.constructor = GetRecommendedItemsBody;

/**
 * The type of the query.
 *
 * @return {string|null}
 */
GetRecommendedItemsBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string|null} value 
 */
GetRecommendedItemsBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * The types of the query. Exactly one of type or types parameters must be provided.
 *
 * @return {string|null}
 */
GetRecommendedItemsBody.prototype.getTypes = function() {
    return this.types;
};

/**
 * Setter for Types
 * 
 * @param {string|null} value 
 */
GetRecommendedItemsBody.prototype.setTypes = function(value) {
    this.types = value;
};

/**
 * The user id of the query.
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
 * The user ids of the query. Exactly one of user id or user ids parameters must be provided.
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
 * The number of most recommended items to be skipped.
 *
 * @return {int|null}
 */
GetRecommendedItemsBody.prototype.getFrom = function() {
    return this.from;
};

/**
 * Setter for From
 * 
 * @param {int|null} value 
 */
GetRecommendedItemsBody.prototype.setFrom = function(value) {
    this.from = value;
};

/**
 * The number of items asked to return in the response. Defaults to 10. Must be between 1 and 10.000 inclusive.
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
 * Similar item that the response should be similar to.
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
 * Similar items that the response should be similar to.
 * At most one of similar item and similar items parameters can be provided.
 *
 * @return {array|null}
 */
GetRecommendedItemsBody.prototype.getSimilarItemIds = function() {
    return this.similarItemIds;
};

/**
 * Setter for SimilarItemIds
 * 
 * @param {array|null} value 
 */
GetRecommendedItemsBody.prototype.setSimilarItemIds = function(value) {
    this.similarItemIds = value;
};

/**
 * The metadata fields to be included in returned item objects.
 *
 * @return {array|null}
 */
GetRecommendedItemsBody.prototype.getFields = function() {
    return this.fields;
};

/**
 * Setter for Fields
 * 
 * @param {array|null} value 
 */
GetRecommendedItemsBody.prototype.setFields = function(value) {
    this.fields = value;
};

/**
 * Contraints on the returned users or items.
 * Filter structure is defined in [the filter parameter documentation](http://www.suggestgrid.com/docs/advanced-features#filters-parameter).
 *
 * @return {dictionary|null}
 */
GetRecommendedItemsBody.prototype.getFilter = function() {
    return this.filter;
};

/**
 * Setter for Filter
 * 
 * @param {dictionary|null} value 
 */
GetRecommendedItemsBody.prototype.setFilter = function(value) {
    this.filter = value;
};

/**
 * These item ids that will not be included in the response.
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
