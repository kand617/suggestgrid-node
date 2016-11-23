
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 11/23/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetItemsResponse
 *
 * @constructor
 */
GetItemsResponse = function (obj) {
    if(!obj) {
        this.count = null;     
        this.totalCount = null;     
        this.items = null;     
        //Append to variable dictionary
        this._variableDict['totalCount'] = 'total_count';
    } else {
        this.count = obj.count;
        this.totalCount = obj.total_count;
        this.items = obj.items.map(function(model){
            return new Metadata(model);
        });
        //Append to variable dictionary
        this._variableDict['totalCount'] = 'total_count';
    }
};

GetItemsResponse.prototype = new BaseModel();
GetItemsResponse.prototype.constructor = GetItemsResponse;

/**
 * The number of items in the response.
 *
 * @return {long|null}
 */
GetItemsResponse.prototype.getCount = function() {
    return this.count;
};

/**
 * Setter for Count
 * 
 * @param {long|null} value 
 */
GetItemsResponse.prototype.setCount = function(value) {
    this.count = value;
};

/**
 * The total number of items.
 *
 * @return {long|null}
 */
GetItemsResponse.prototype.getTotalCount = function() {
    return this.totalCount;
};

/**
 * Setter for TotalCount
 * 
 * @param {long|null} value 
 */
GetItemsResponse.prototype.setTotalCount = function(value) {
    this.totalCount = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetItemsResponse.prototype.getItems = function() {
    return this.items;
};

/**
 * Setter for Items
 * 
 * @param {array|null} value 
 */
GetItemsResponse.prototype.setItems = function(value) {
    this.items = value;
};


module.exports = GetItemsResponse;