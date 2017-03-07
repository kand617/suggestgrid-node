
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require('./BaseModel');
/**
 * Creates an instance of Action
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
var Action = function (obj) {
    if(!obj) {
        this.type = null;     
        this.userId = null;     
        this.itemId = null;     
        this.rating = null;     
        this.timestamp = null;     
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['itemId'] = 'item_id';
    } else {
        this.type = (obj.type !== undefined && obj.type !== null)? obj.type : null;
        this.userId = (obj.user_id !== undefined && obj.user_id !== null)? obj.user_id : null;
        this.itemId = (obj.item_id !== undefined && obj.item_id !== null)? obj.item_id : null;
        this.rating = (obj.rating !== undefined && obj.rating !== null)? obj.rating : null;
        this.timestamp = (obj.timestamp !== undefined && obj.timestamp !== null)? obj.timestamp : null;
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['itemId'] = 'item_id';
    }
};

Action.prototype = new BaseModel();
Action.prototype.constructor = Action;

/**
 * The type that the action belongs to.
 *
 * @return {string}
 */
Action.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string} value 
 */
Action.prototype.setType = function(value) {
    this.type = value;
};

/**
 * The user id of the performer of the action.
 *
 * @return {string}
 */
Action.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {string} value 
 */
Action.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * The item id of the item the action is performed on.
 *
 * @return {string}
 */
Action.prototype.getItemId = function() {
    return this.itemId;
};

/**
 * Setter for ItemId
 * 
 * @param {string} value 
 */
Action.prototype.setItemId = function(value) {
    this.itemId = value;
};

/**
 * The optional rating given by the user, if the type is explicit.
 *
 * @return {double|null}
 */
Action.prototype.getRating = function() {
    return this.rating;
};

/**
 * Setter for Rating
 * 
 * @param {double|null} value 
 */
Action.prototype.setRating = function(value) {
    this.rating = value;
};

/**
 * The optional UNIX epoch timestamp of the action. Defaults to the current timestamp.
 *
 * @return {long|null}
 */
Action.prototype.getTimestamp = function() {
    return this.timestamp;
};

/**
 * Setter for Timestamp
 * 
 * @param {long|null} value 
 */
Action.prototype.setTimestamp = function(value) {
    this.timestamp = value;
};


module.exports = Action;
