
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC BETA v2.0 on 12/14/2015
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of ItemsModel
 *
 * @constructor
 */
function ItemsModel() {
    this.items = null;     
}

ItemsModel.prototype = new BaseModel();
ItemsModel.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
ItemsModel.prototype.getItems = function() {
    return this.items;
};

/**
 * Setter for Items
 * 
 * @param {array|null} value 
 */
ItemsModel.prototype.setItems = function(value) {
    this.items = value;
};

module.exports = ItemsModel;