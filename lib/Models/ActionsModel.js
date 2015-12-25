
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC BETA v2.0 on 12/25/2015
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of ActionsModel
 *
 * @constructor
 */
function ActionsModel() {
    this.actions = null;     
}

ActionsModel.prototype = new BaseModel();
ActionsModel.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
ActionsModel.prototype.getActions = function() {
    return this.actions;
};

/**
 * Setter for Actions
 * 
 * @param {array|null} value 
 */
ActionsModel.prototype.setActions = function(value) {
    this.actions = value;
};

module.exports = ActionsModel;