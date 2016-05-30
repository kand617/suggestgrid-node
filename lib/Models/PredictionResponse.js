
/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io ) on 05/30/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of PredictionResponse
 *
 * @constructor
 */
PredictionResponse = function (obj) {
    if(!obj) {
        this.prediction = null;     
    } else {
        this.prediction = obj.prediction;
    }
};

PredictionResponse.prototype = new BaseModel();
PredictionResponse.prototype.constructor = PredictionResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {double|null}
 */
PredictionResponse.prototype.getPrediction = function() {
    return this.prediction;
};

/**
 * Setter for Prediction
 * 
 * @param {double|null} value 
 */
PredictionResponse.prototype.setPrediction = function(value) {
    this.prediction = value;
};


module.exports = PredictionResponse;