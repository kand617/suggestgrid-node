
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 06/09/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of SimilarItemsBody
 *
 * @constructor
 */
SimilarItemsBody = function (obj) {
    if(!obj) {
        this.type = null;     
        this.itemId = null;     
        this.size = null;     
        this.except = null;     
        //Append to variable dictionary
        this._variableDict['itemId'] = 'item_id';
    } else {
        this.type = obj.type;
        this.itemId = obj.item_id;
        this.size = obj.size;
        this.except = obj.except;
        //Append to variable dictionary
        this._variableDict['itemId'] = 'item_id';
    }
};

SimilarItemsBody.prototype = new BaseModel();
SimilarItemsBody.prototype.constructor = SimilarItemsBody;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
SimilarItemsBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string} value 
 */
SimilarItemsBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
SimilarItemsBody.prototype.getItemId = function() {
    return this.itemId;
};

/**
 * Setter for ItemId
 * 
 * @param {string} value 
 */
SimilarItemsBody.prototype.setItemId = function(value) {
    this.itemId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int|null}
 */
SimilarItemsBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
SimilarItemsBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * These ids will not be included in the response.
 *
 * @return {array|null}
 */
SimilarItemsBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
SimilarItemsBody.prototype.setExcept = function(value) {
    this.except = value;
};


module.exports = SimilarItemsBody;