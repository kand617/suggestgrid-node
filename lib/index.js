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
    CountResponse = require('./Models/CountResponse'),
    ErrorResponse = require('./Models/ErrorResponse'),
    GetTypesResponse = require('./Models/GetTypesResponse'),
    GetTypeResponse = require('./Models/GetTypeResponse'),
    BulkSchemaErrorResponse = require('./Models/BulkSchemaErrorResponse'),
    SchemaErrorResponse = require('./Models/SchemaErrorResponse'),
    MetadataInformationResponse = require('./Models/MetadataInformationResponse'),
    UsersResponse = require('./Models/UsersResponse'),
    ItemsResponse = require('./Models/ItemsResponse');


function initializer(){}

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
initializer.CountResponse = CountResponse;
initializer.ErrorResponse = ErrorResponse;
initializer.GetTypesResponse = GetTypesResponse;
initializer.GetTypeResponse = GetTypeResponse;
initializer.BulkSchemaErrorResponse = BulkSchemaErrorResponse;
initializer.SchemaErrorResponse = SchemaErrorResponse;
initializer.MetadataInformationResponse = MetadataInformationResponse;
initializer.UsersResponse = UsersResponse;
initializer.ItemsResponse = ItemsResponse;

module.exports = initializer;