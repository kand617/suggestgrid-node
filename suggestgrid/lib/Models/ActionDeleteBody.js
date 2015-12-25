
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC BETA v2.0 on 12/24/2015
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of ActionDeleteBody
 *
 * @constructor
 */
function ActionDeleteBody() {
    this.userid = null;     
    this.itemid = null;     
}

ActionDeleteBody.prototype = new BaseModel();
ActionDeleteBody.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
ActionDeleteBody.prototype.getUserid = function() {
    return this.userid;
};

/**
 * Setter for Userid
 * 
 * @param {string|null} value 
 */
ActionDeleteBody.prototype.setUserid = function(value) {
    this.userid = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
ActionDeleteBody.prototype.getItemid = function() {
    return this.itemid;
};

/**
 * Setter for Itemid
 * 
 * @param {string|null} value 
 */
ActionDeleteBody.prototype.setItemid = function(value) {
    this.itemid = value;
};

module.exports = ActionDeleteBody;