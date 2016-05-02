
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 on 05/02/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Action
 *
 * @constructor
 */
function Action() {
    this.userId = null;     
    this.itemId = null;     
    this.rating = null;     
    //Append to variable dictionary
    this._variableDict['userId'] = 'user_id';
    this._variableDict['itemId'] = 'item_id';
}

Action.prototype = new BaseModel();
Action.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
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
 * TODO: Write general description for this method
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
 * TODO: Write general description for this method
 *
 * @return {int|null}
 */
Action.prototype.getRating = function() {
    return this.rating;
};

/**
 * Setter for Rating
 * 
 * @param {int|null} value 
 */
Action.prototype.setRating = function(value) {
    this.rating = value;
};

module.exports = Action;