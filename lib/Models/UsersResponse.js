
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var Metadata = require('./Metadata');
var BaseModel = require('./BaseModel');
/**
 * Creates an instance of UsersResponse
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
var UsersResponse = function (obj) {
    if(!obj) {
        this.count = null;     
        this.totalCount = null;     
        this.users = null;     
        //Append to variable dictionary
        this._variableDict['totalCount'] = 'total_count';
    } else {
        this.count = (obj.count !== undefined && obj.count !== null)? obj.count : null;
        this.totalCount = (obj.total_count !== undefined && obj.total_count !== null)? obj.total_count : null;
        this.users = (obj.users !== undefined && obj.users !== null)? obj.users.map(function(model){
            return new Metadata(model);
        }) : null;
        //Append to variable dictionary
        this._variableDict['totalCount'] = 'total_count';
    }
};

UsersResponse.prototype = new BaseModel();
UsersResponse.prototype.constructor = UsersResponse;

/**
 * The number of users in the response.
 *
 * @return {long|null}
 */
UsersResponse.prototype.getCount = function() {
    return this.count;
};

/**
 * Setter for Count
 * 
 * @param {long|null} value 
 */
UsersResponse.prototype.setCount = function(value) {
    this.count = value;
};

/**
 * The total number of users available.
 *
 * @return {long|null}
 */
UsersResponse.prototype.getTotalCount = function() {
    return this.totalCount;
};

/**
 * Setter for TotalCount
 * 
 * @param {long|null} value 
 */
UsersResponse.prototype.setTotalCount = function(value) {
    this.totalCount = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
UsersResponse.prototype.getUsers = function() {
    return this.users;
};

/**
 * Setter for Users
 * 
 * @param {array|null} value 
 */
UsersResponse.prototype.setUsers = function(value) {
    this.users = value;
};


module.exports = UsersResponse;
