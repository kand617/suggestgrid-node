
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require('./BaseModel');
/**
 * Creates an instance of GetSimilarUsersBody
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
var GetSimilarUsersBody = function (obj) {
    if(!obj) {
        this.type = null;     
        this.types = null;     
        this.userId = null;     
        this.userIds = null;     
        this.from = null;     
        this.size = null;     
        this.fields = null;     
        this.filter = null;     
        this.except = null;     
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['userIds'] = 'user_ids';
    } else {
        this.type = (obj.type !== undefined && obj.type !== null)? obj.type : null;
        this.types = (obj.types !== undefined && obj.types !== null)? obj.types : null;
        this.userId = (obj.user_id !== undefined && obj.user_id !== null)? obj.user_id : null;
        this.userIds = (obj.user_ids !== undefined && obj.user_ids !== null)? obj.user_ids : null;
        this.from = (obj.from !== undefined && obj.from !== null)? obj.from : null;
        this.size = (obj.size !== undefined && obj.size !== null)? obj.size : null;
        this.fields = (obj.fields !== undefined && obj.fields !== null)? obj.fields : null;
        this.filter = (obj.filter !== undefined && obj.filter !== null)? obj.filter : null;
        this.except = (obj.except !== undefined && obj.except !== null)? obj.except : null;
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['userIds'] = 'user_ids';
    }
};

GetSimilarUsersBody.prototype = new BaseModel();
GetSimilarUsersBody.prototype.constructor = GetSimilarUsersBody;

/**
 * The type of the query.
 *
 * @return {string|null}
 */
GetSimilarUsersBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string|null} value 
 */
GetSimilarUsersBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * The types of the query. Exactly one of type or types parameters must be provided.
 *
 * @return {string|null}
 */
GetSimilarUsersBody.prototype.getTypes = function() {
    return this.types;
};

/**
 * Setter for Types
 * 
 * @param {string|null} value 
 */
GetSimilarUsersBody.prototype.setTypes = function(value) {
    this.types = value;
};

/**
 * The user id of the query.
 *
 * @return {string|null}
 */
GetSimilarUsersBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {string|null} value 
 */
GetSimilarUsersBody.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * The user ids of the query. Exactly one of user id or user ids parameters must be provided.
 *
 * @return {array|null}
 */
GetSimilarUsersBody.prototype.getUserIds = function() {
    return this.userIds;
};

/**
 * Setter for UserIds
 * 
 * @param {array|null} value 
 */
GetSimilarUsersBody.prototype.setUserIds = function(value) {
    this.userIds = value;
};

/**
 * The number of most similar users to be skipped from the response. Defaults to 0.
 *
 * @return {int|null}
 */
GetSimilarUsersBody.prototype.getFrom = function() {
    return this.from;
};

/**
 * Setter for From
 * 
 * @param {int|null} value 
 */
GetSimilarUsersBody.prototype.setFrom = function(value) {
    this.from = value;
};

/**
 * The number of users asked to return in the response. Defaults to 10. Must be between 1 and 10.000 inclusive.
 *
 * @return {int|null}
 */
GetSimilarUsersBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
GetSimilarUsersBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * The metadata fields to be included in returned user objects.
 *
 * @return {array|null}
 */
GetSimilarUsersBody.prototype.getFields = function() {
    return this.fields;
};

/**
 * Setter for Fields
 * 
 * @param {array|null} value 
 */
GetSimilarUsersBody.prototype.setFields = function(value) {
    this.fields = value;
};

/**
 * Contraints on the returned users or items.
 * Filter structure is defined in [the filter parameter documentation](http://www.suggestgrid.com/docs/advanced-features#filters-parameter).
 *
 * @return {dictionary|null}
 */
GetSimilarUsersBody.prototype.getFilter = function() {
    return this.filter;
};

/**
 * Setter for Filter
 * 
 * @param {dictionary|null} value 
 */
GetSimilarUsersBody.prototype.setFilter = function(value) {
    this.filter = value;
};

/**
 * These user ids that will not be included in the response.
 *
 * @return {array|null}
 */
GetSimilarUsersBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
GetSimilarUsersBody.prototype.setExcept = function(value) {
    this.except = value;
};


module.exports = GetSimilarUsersBody;
