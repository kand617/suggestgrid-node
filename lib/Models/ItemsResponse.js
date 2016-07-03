
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 07/03/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of ItemsResponse
 *
 * @constructor
 */
ItemsResponse = function (obj) {
    if(!obj) {
        this.count = null;     
        this.items = null;     
    } else {
        this.count = obj.count;
        this.items = obj.items.map(function(model){
            return new Metadata(model);
        });
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