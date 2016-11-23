/**
  * @module suggestgrid
  *  
  * SuggestGrid is a recommendation and personalization service.
  */

var configuration = require('./configuration'),
    TypeController = require('./Controllers/TypeController'),
    ActionController = require('./Controllers/ActionController'),
    MetadataController = require('./Controllers/MetadataController'),
    RecommendationController = require('./Controllers/RecommendationController'),
    SimilarityController = require('./Controllers/SimilarityController'),
    Action = require('./Models/Action'),
    Metadata = require('./Models/Metadata'),
    TypeRequestBody = require('./Models/TypeRequestBody'),
    GetRecommendedUsersBody = require('./Models/GetRecommendedUsersBody'),
    GetRecommendedItemsBody = require('./Models/GetRecommendedItemsBody'),
    GetSimilarUsersBody = require('./Models/GetSimilarUsersBody'),
    GetSimilarItemsBody = require('./Models/GetSimilarItemsBody'),
    MessageResponse = require('./Models/MessageResponse'),
    ActionsResponse = require('./Models/ActionsResponse'),
    ErrorResponse = require('./Models/ErrorResponse'),
    DetailedErrorResponse = require('./Models/DetailedErrorResponse'),
    LimitExceededErrorResponse = require('./Models/LimitExceededErrorResponse'),
    DeleteErrorResponse = require('./Models/DeleteErrorResponse'),
    DeleteSuccessResponse = require('./Models/DeleteSuccessResponse'),
    GetTypesResponse = require('./Models/GetTypesResponse'),
    GetTypeResponse = require('./Models/GetTypeResponse'),
    BulkSchemaErrorResponse = require('./Models/BulkSchemaErrorResponse'),
    SchemaErrorResponse = require('./Models/SchemaErrorResponse'),
    UsersResponse = require('./Models/UsersResponse'),
    GetUsersResponse = require('./Models/GetUsersResponse'),
    ItemsResponse = require('./Models/ItemsResponse'),
    GetItemsResponse = require('./Models/GetItemsResponse');


function initializer () { }

//Main functional components of suggestgrid
initializer.configuration = configuration;
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
initializer.ErrorResponse = ErrorResponse;
initializer.DetailedErrorResponse = DetailedErrorResponse;
initializer.LimitExceededErrorResponse = LimitExceededErrorResponse;
initializer.DeleteErrorResponse = DeleteErrorResponse;
initializer.DeleteSuccessResponse = DeleteSuccessResponse;
initializer.GetTypesResponse = GetTypesResponse;
initializer.GetTypeResponse = GetTypeResponse;
initializer.BulkSchemaErrorResponse = BulkSchemaErrorResponse;
initializer.SchemaErrorResponse = SchemaErrorResponse;
initializer.UsersResponse = UsersResponse;
initializer.GetUsersResponse = GetUsersResponse;
initializer.ItemsResponse = ItemsResponse;
initializer.GetItemsResponse = GetItemsResponse;

module.exports = initializer;