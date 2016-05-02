
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 on 05/02/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UsersModel
 *
 * @constructor
 */
function UsersModel() {
    this.users = null;     
}

UsersModel.prototype = new BaseModel();
UsersModel.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
UsersModel.prototype.getUsers = function() {
    return this.users;
};

/**
 * Setter for Users
 * 
 * @param {array|null} value 
 */
UsersModel.prototype.setUsers = function(value) {
    this.users = value;
};

module.exports = UsersModel;