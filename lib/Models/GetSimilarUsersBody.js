
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 07/12/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetSimilarUsersBody
 *
 * @constructor
 */
GetSimilarUsersBody = function (obj) {
    if(!obj) {
        this.type = null;     
        this.userId = null;     
        this.size = null;     
        this.except = null;     
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
    } else {
        this.type = obj.type;
        this.userId = obj.user_id;
        this.size = obj.size;
        this.except = obj.except;
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
    }
};

GetSimilarUsersBody.prototype = new BaseModel();
GetSimilarUsersBody.prototype.constructor = GetSimilarUsersBody;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetSimilarUsersBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string} value 
 */
GetSimilarUsersBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetSimilarUsersBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {string} value 
 */
GetSimilarUsersBody.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * TODO: Write general description for this method
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
 * These ids will not be included in the response.
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