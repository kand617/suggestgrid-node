
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC BETA v2.0 on 12/24/2015
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Action
 *
 * @constructor
 */
function Action() {
    this.userid = null;     
    this.itemid = null;     
    this.rating = null;     
}

Action.prototype = new BaseModel();
Action.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Action.prototype.getUserid = function() {
    return this.userid;
};

/**
 * Setter for Userid
 * 
 * @param {string} value 
 */
Action.prototype.setUserid = function(value) {
    this.userid = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Action.prototype.getItemid = function() {
    return this.itemid;
};

/**
 * Setter for Itemid
 * 
 * @param {string} value 
 */
Action.prototype.setItemid = function(value) {
    this.itemid = value;
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