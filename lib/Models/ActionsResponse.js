
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */
var Action = require('./Action');
var BaseModel = require('./BaseModel');
/**
 * Creates an instance of ActionsResponse
 *
 * @constructor
 * @param   {Object}  obj    The object passed to constructor
 */
var ActionsResponse = function (obj) {
    if(!obj) {
        this.count = null;     
        this.totalCount = null;     
        this.actions = null;     
        //Append to variable dictionary
        this._variableDict['totalCount'] = 'total_count';
    } else {
        this.count = (obj.count !== undefined && obj.count !== null)? obj.count : null;
        this.totalCount = (obj.total_count !== undefined && obj.total_count !== null)? obj.total_count : null;
        this.actions = (obj.actions !== undefined && obj.actions !== null)? obj.actions.map(function(model){
            return new Action(model);
        }) : null;
        //Append to variable dictionary
        this._variableDict['totalCount'] = 'total_count';
    }
};

ActionsResponse.prototype = new BaseModel();
ActionsResponse.prototype.constructor = ActionsResponse;

/**
 * The number of actions in the response.
 *
 * @return {long|null}
 */
ActionsResponse.prototype.getCount = function() {
    return this.count;
};

/**
 * Setter for Count
 * 
 * @param {long|null} value 
 */
ActionsResponse.prototype.setCount = function(value) {
    this.count = value;
};

/**
 * The total number of actions.
 *
 * @return {long|null}
 */
ActionsResponse.prototype.getTotalCount = function() {
    return this.totalCount;
};

/**
 * Setter for TotalCount
 * 
 * @param {long|null} value 
 */
ActionsResponse.prototype.setTotalCount = function(value) {
    this.totalCount = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
ActionsResponse.prototype.getActions = function() {
    return this.actions;
};

/**
 * Setter for Actions
 * 
 * @param {array|null} value 
 */
ActionsResponse.prototype.setActions = function(value) {
    this.actions = value;
};


module.exports = ActionsResponse;
