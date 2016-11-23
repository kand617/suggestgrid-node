
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 11/23/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetUsersResponse
 *
 * @constructor
 */
GetUsersResponse = function (obj) {
    if(!obj) {
        this.count = null;     
        this.totalCount = null;     
        this.users = null;     
        //Append to variable dictionary
        this._variableDict['totalCount'] = 'total_count';
    } else {
        this.count = obj.count;
        this.totalCount = obj.total_count;
        this.users = obj.users.map(function(model){
            return new Metadata(model);
        });
        //Append to variable dictionary
        this._variableDict['totalCount'] = 'total_count';
    }
};

GetUsersResponse.prototype = new BaseModel();
GetUsersResponse.prototype.constructor = GetUsersResponse;

/**
 * The number of users in the response.
 *
 * @return {long|null}
 */
GetUsersResponse.prototype.getCount = function() {
    return this.count;
};

/**
 * Setter for Count
 * 
 * @param {long|null} value 
 */
GetUsersResponse.prototype.setCount = function(value) {
    this.count = value;
};

/**
 * The total number of users.
 *
 * @return {long|null}
 */
GetUsersResponse.prototype.getTotalCount = function() {
    return this.totalCount;
};

/**
 * Setter for TotalCount
 * 
 * @param {long|null} value 
 */
GetUsersResponse.prototype.setTotalCount = function(value) {
    this.totalCount = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetUsersResponse.prototype.getUsers = function() {
    return this.users;
};

/**
 * Setter for Users
 * 
 * @param {array|null} value 
 */
GetUsersResponse.prototype.setUsers = function(value) {
    this.users = value;
};


module.exports = GetUsersResponse;