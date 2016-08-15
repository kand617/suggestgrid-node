
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 08/15/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CountResponse
 *
 * @constructor
 */
CountResponse = function (obj) {
    if(!obj) {
        this.count = null;     
    } else {
        this.count = obj.count;
    }
};

CountResponse.prototype = new BaseModel();
CountResponse.prototype.constructor = CountResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {int|null}
 */
CountResponse.prototype.getCount = function() {
    return this.count;
};

/**
 * Setter for Count
 * 
 * @param {int|null} value 
 */
CountResponse.prototype.setCount = function(value) {
    this.count = value;
};


module.exports = CountResponse;