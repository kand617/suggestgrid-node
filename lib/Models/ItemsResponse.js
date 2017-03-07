
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var Metadata = require('./Metadata');
var BaseModel = require('./BaseModel');
/**
 * Creates an instance of ItemsResponse
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
var ItemsResponse = function (obj) {
    if(!obj) {
        this.count = null;     
        this.totalCount = null;     
        this.items = null;     
        //Append to variable dictionary
        this._variableDict['totalCount'] = 'total_count';
    } else {
        this.count = (obj.count !== undefined && obj.count !== null)? obj.count : null;
        this.totalCount = (obj.total_count !== undefined && obj.total_count !== null)? obj.total_count : null;
        this.items = (obj.items !== undefined && obj.items !== null)? obj.items.map(function(model){
            return new Metadata(model);
        }) : null;
        //Append to variable dictionary
        this._variableDict['totalCount'] = 'total_count';
    }
};

ItemsResponse.prototype = new BaseModel();
ItemsResponse.prototype.constructor = ItemsResponse;

/**
 * The number of items in the response.
 *
 * @return {long|null}
 */
ItemsResponse.prototype.getCount = function() {
    return this.count;
};

/**
 * Setter for Count
 * 
 * @param {long|null} value 
 */
ItemsResponse.prototype.setCount = function(value) {
    this.count = value;
};

/**
 * The total number of items available.
 *
 * @return {long|null}
 */
ItemsResponse.prototype.getTotalCount = function() {
    return this.totalCount;
};

/**
 * Setter for TotalCount
 * 
 * @param {long|null} value 
 */
ItemsResponse.prototype.setTotalCount = function(value) {
    this.totalCount = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
ItemsResponse.prototype.getItems = function() {
    return this.items;
};

/**
 * Setter for Items
 * 
 * @param {array|null} value 
 */
ItemsResponse.prototype.setItems = function(value) {
    this.items = value;
};


module.exports = ItemsResponse;
