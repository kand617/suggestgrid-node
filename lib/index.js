/**
  * @module suggestgrid
  *  
  * Personalization made Simple
  */

var Configuration = require('./configuration');
var BaseController = require('./Controllers/BaseController');
var TypeController = require('./Controllers/TypeController');
var ActionController = require('./Controllers/ActionController');
var MetadataController = require('./Controllers/MetadataController');
var RecommendationController = require('./Controllers/RecommendationController');
var SimilarityController = require('./Controllers/SimilarityController');
var Action = require('./Models/Action');
var Metadata = require('./Models/Metadata');
var TypeRequestBody = require('./Models/TypeRequestBody');
var GetRecommendedUsersBody = require('./Models/GetRecommendedUsersBody');
var GetRecommendedItemsBody = require('./Models/GetRecommendedItemsBody');
var GetSimilarUsersBody = require('./Models/GetSimilarUsersBody');
var GetSimilarItemsBody = require('./Models/GetSimilarItemsBody');
var MessageResponse = require('./Models/MessageResponse');
var ActionsResponse = require('./Models/ActionsResponse');
var DeleteSuccessResponse = require('./Models/DeleteSuccessResponse');
var GetTypesResponse = require('./Models/GetTypesResponse');
var GetTypeResponse = require('./Models/GetTypeResponse');
var BulkPostResponse = require('./Models/BulkPostResponse');
var BulkPostError = require('./Models/BulkPostError');
var UsersResponse = require('./Models/UsersResponse');
var ItemsResponse = require('./Models/ItemsResponse');
var ErrorResponseException = require('./Exceptions/ErrorResponseException');
var DetailedErrorResponseException = require('./Exceptions/DetailedErrorResponseException');
var LimitExceededErrorResponseException = require('./Exceptions/LimitExceededErrorResponseException');
var DeleteErrorResponseException = require('./Exceptions/DeleteErrorResponseException');
var APIException = require('./Exceptions/APIException');


function initializer () { }

//Main functional components of suggestgrid
initializer.Configuration = Configuration;
initializer.BaseController = BaseController;
initializer.TypeController = TypeController;
initializer.ActionController = ActionController;
initializer.MetadataController = MetadataController;
initializer.RecommendationController = RecommendationController;
initializer.SimilarityController = SimilarityController;

//Main Models of suggestgrid
initializer.Action = Action;
initializer.Metadata = Metadata;
initializer.TypeRequestBody = TypeRequestBody;
initializer.GetRecommendedUsersBody = GetRecommendedUsersBody;
initializer.GetRecommendedItemsBody = GetRecommendedItemsBody;
initializer.GetSimilarUsersBody = GetSimilarUsersBody;
initializer.GetSimilarItemsBody = GetSimilarItemsBody;
initializer.MessageResponse = MessageResponse;
initializer.ActionsResponse = ActionsResponse;
initializer.DeleteSuccessResponse = DeleteSuccessResponse;
initializer.GetTypesResponse = GetTypesResponse;
initializer.GetTypeResponse = GetTypeResponse;
initializer.BulkPostResponse = BulkPostResponse;
initializer.BulkPostError = BulkPostError;
initializer.UsersResponse = UsersResponse;
initializer.ItemsResponse = ItemsResponse;

//Main Exceptions of suggestgrid
initializer.ErrorResponseException = ErrorResponseException;
initializer.DetailedErrorResponseException = DetailedErrorResponseException;
initializer.LimitExceededErrorResponseException = LimitExceededErrorResponseException;
initializer.DeleteErrorResponseException = DeleteErrorResponseException;
initializer.APIException = APIException;

module.exports = initializer;
