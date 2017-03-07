/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */

var ErrorResponseException = require('../Exceptions/ErrorResponseException');
var DetailedErrorResponseException = require('../Exceptions/DetailedErrorResponseException');
var LimitExceededErrorResponseException = require('../Exceptions/LimitExceededErrorResponseException');
var DeleteErrorResponseException = require('../Exceptions/DeleteErrorResponseException');

var BaseController = {

    /**
     * Global error handling
     * @param	{HttpContext}	context			HttpContext containing request and response objects
	 * @param	{string}		endpName		Name of the endpoint called
     * @return	{function}		callback		Callback function in the form of function(error, response, context)
     */
    validateResponse(context, endpName) {
        var errorObj = {
            errorMessage: "",
            errorCode: "",
            errorResponse: context.response.body
        };
        var returnObj = {
            error: errorObj,
            response: null,
            context: context
        };

        returnObj.error.errorMessage = "HTTP Response Not OK";
        returnObj.error.errorCode = context.response.statusCode;

        return returnObj;
    }
};

module.exports = BaseController;
