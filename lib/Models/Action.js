
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 10/20/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Action
 *
 * @constructor
 */
Action = function (obj) {
    if(!obj) {
        this.type = null;     
        this.userId = null;     
        this.itemId = null;     
        this.rating = null;     
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
        this._variableDict['itemId'] = 'item_id';
    } else {
        this.type = obj.type;
        this.userId = obj.user_id;
        this.itemId = obj.item_id;
        this.rating = obj.rating;
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


module.exports = Action;