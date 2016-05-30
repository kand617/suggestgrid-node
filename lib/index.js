/**
  * @module suggestgrid
  *  
  * SuggestGrid is an recommendation and personalization service.
  */

var configuration = require('./configuration'),
    ActionController = require('./Controllers/ActionController'),
    MetadataController = require('./Controllers/MetadataController'),
    RecommendationController = require('./Controllers/RecommendationController'),
    SimilarityController = require('./Controllers/SimilarityController'),
    TypeController = require('./Controllers/TypeController'),
    Action = require('./Models/Action'),
    ActionsQuery = require('./Models/ActionsQuery'),
    Metadata = require('./Models/Metadata'),
    TypeRequestBody = require('./Models/TypeRequestBody'),
    RecommendUsersBody = require('./Models/RecommendUsersBody'),
    RecommendItemsBody = require('./Models/RecommendItemsBody'),
    SimilarUsersBody = require('./Models/SimilarUsersBody'),
    SimilarItemsBody = require('./Models/SimilarItemsBody'),
    MessageResponse = require('./Models/MessageResponse'),
    ErrorResponse = require('./Models/ErrorResponse'),
    GetTypesResponse = require('./Models/GetTypesResponse'),
    GetTypeResponse = require('./Models/GetTypeResponse'),
    BulkSchemaErrorResponse = require('./Models/BulkSchemaErrorResponse'),
    SchemaErrorResponse = require('./Models/SchemaErrorResponse'),
    MetadataInformationResponse = require('./Models/MetadataInformationResponse'),
    UsersResponse = require('./Models/UsersResponse'),
    ItemsResponse = require('./Models/ItemsResponse'),
    PredictionResponse = require('./Models/PredictionResponse'),
    UserSimilarityResponse = require('./Models/UserSimilarityResponse'),
    ItemSimilarityResponse = require('./Models/ItemSimilarityResponse');


function initializer(){}

//Main functional components of suggestgrid
initializer.configuration = configuration;
initializer.ActionController = ActionController;
initializer.MetadataController = MetadataController;
initializer.RecommendationController = RecommendationController;
initializer.SimilarityController = SimilarityController;
initializer.TypeController = TypeController;

//Main Models of suggestgrid
initializer.Action = Action;
initializer.ActionsQuery = ActionsQuery;
initializer.Metadata = Metadata;
initializer.TypeRequestBody = TypeRequestBody;
initializer.RecommendUsersBody = RecommendUsersBody;
initializer.RecommendItemsBody = RecommendItemsBody;
initializer.SimilarUsersBody = SimilarUsersBody;
initializer.SimilarItemsBody = SimilarItemsBody;
initializer.MessageResponse = MessageResponse;
initializer.ErrorResponse = ErrorResponse;
initializer.GetTypesResponse = GetTypesResponse;
initializer.GetTypeResponse = GetTypeResponse;
initializer.BulkSchemaErrorResponse = BulkSchemaErrorResponse;
initializer.SchemaErrorResponse = SchemaErrorResponse;
initializer.MetadataInformationResponse = MetadataInformationResponse;
initializer.UsersResponse = UsersResponse;
initializer.ItemsResponse = ItemsResponse;
initializer.PredictionResponse = PredictionResponse;
initializer.UserSimilarityResponse = UserSimilarityResponse;
initializer.ItemSimilarityResponse = ItemSimilarityResponse;

module.exports = initializer;