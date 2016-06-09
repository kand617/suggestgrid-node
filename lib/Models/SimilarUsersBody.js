
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 06/09/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of SimilarUsersBody
 *
 * @constructor
 */
SimilarUsersBody = function (obj) {
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

SimilarUsersBody.prototype = new BaseModel();
SimilarUsersBody.prototype.constructor = SimilarUsersBody;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
SimilarUsersBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string} value 
 */
SimilarUsersBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
SimilarUsersBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {string} value 
 */
SimilarUsersBody.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int|null}
 */
SimilarUsersBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
SimilarUsersBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * These ids will not be included in the response.
 *
 * @return {array|null}
 */
SimilarUsersBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
SimilarUsersBody.prototype.setExcept = function(value) {
    this.except = value;
};


module.exports = SimilarUsersBody;