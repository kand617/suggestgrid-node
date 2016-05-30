
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 05/30/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of ActionsQuery
 *
 * @constructor
 */
ActionsQuery = function (obj) {
    if(!obj) {
        this.time = null;     
        this.userId = null;     
        this.itemId = null;     
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['itemId'] = 'item_id';
    } else {
        this.time = obj.time;
        this.userId = obj.user_id;
        this.itemId = obj.item_id;
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['itemId'] = 'item_id';
    }
};

ActionsQuery.prototype = new BaseModel();
ActionsQuery.prototype.constructor = ActionsQuery;

/**
 * Delete all actions of a type older than the given timestamp or time.
 * Valid times are 1s, 1m, 1h, 1d, 1M, 1y, or unix timestamp (like 1443798195).
 *
 * @return {string|null}
 */
ActionsQuery.prototype.getTime = function() {
    return this.time;
};

/**
 * Setter for Time
 * 
 * @param {string|null} value 
 */
ActionsQuery.prototype.setTime = function(value) {
    this.time = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
ActionsQuery.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {string|null} value 
 */
ActionsQuery.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
ActionsQuery.prototype.getItemId = function() {
    return this.itemId;
};

/**
 * Setter for ItemId
 * 
 * @param {string|null} value 
 */
ActionsQuery.prototype.setItemId = function(value) {
    this.itemId = value;
};


module.exports = ActionsQuery;