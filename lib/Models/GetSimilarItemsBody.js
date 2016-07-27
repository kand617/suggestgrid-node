
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 07/27/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetSimilarItemsBody
 *
 * @constructor
 */
GetSimilarItemsBody = function (obj) {
    if(!obj) {
        this.type = null;     
        this.itemId = null;     
        this.size = null;     
        this.fields = null;     
        this.filter = null;     
        this.except = null;     
        //Append to variable dictionary
        this._variableDict['itemId'] = 'item_id';
    } else {
        this.type = obj.type;
        this.itemId = obj.item_id;
        this.size = obj.size;
        this.fields = obj.fields;
        this.filter = obj.filter;
        this.except = obj.except;
        //Append to variable dictionary
        this._variableDict['itemId'] = 'item_id';
    }
};

GetSimilarItemsBody.prototype = new BaseModel();
GetSimilarItemsBody.prototype.constructor = GetSimilarItemsBody;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetSimilarItemsBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string} value 
 */
GetSimilarItemsBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
GetSimilarItemsBody.prototype.getItemId = function() {
    return this.itemId;
};

/**
 * Setter for ItemId
 * 
 * @param {string} value 
 */
GetSimilarItemsBody.prototype.setItemId = function(value) {
    this.itemId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int|null}
 */
GetSimilarItemsBody.prototype.getSize = function() {
    return this.size;
};

/**
 * Setter for Size
 * 
 * @param {int|null} value 
 */
GetSimilarItemsBody.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetSimilarItemsBody.prototype.getFields = function() {
    return this.fields;
};

/**
 * Setter for Fields
 * 
 * @param {array|null} value 
 */
GetSimilarItemsBody.prototype.setFields = function(value) {
    this.fields = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {object|null}
 */
GetSimilarItemsBody.prototype.getFilter = function() {
    return this.filter;
};

/**
 * Setter for Filter
 * 
 * @param {object|null} value 
 */
GetSimilarItemsBody.prototype.setFilter = function(value) {
    this.filter = value;
};

/**
 * These ids will not be included in the response.
 *
 * @return {array|null}
 */
GetSimilarItemsBody.prototype.getExcept = function() {
    return this.except;
};

/**
 * Setter for Except
 * 
 * @param {array|null} value 
 */
GetSimilarItemsBody.prototype.setExcept = function(value) {
    this.except = value;
};


module.exports = GetSimilarItemsBody;