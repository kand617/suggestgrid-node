
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 on 05/02/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of ActionDeleteBody
 *
 * @constructor
 */
function ActionDeleteBody() {
    this.userId = null;     
    this.itemId = null;     
    //Append to variable dictionary
    this._variableDict['userId'] = 'user_id';
    this._variableDict['itemId'] = 'item_id';
}

ActionDeleteBody.prototype = new BaseModel();
ActionDeleteBody.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
ActionDeleteBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {string|null} value 
 */
ActionDeleteBody.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
ActionDeleteBody.prototype.getItemId = function() {
    return this.itemId;
};

/**
 * Setter for ItemId
 * 
 * @param {string|null} value 
 */
ActionDeleteBody.prototype.setItemId = function(value) {
    this.itemId = value;
};

module.exports = ActionDeleteBody;