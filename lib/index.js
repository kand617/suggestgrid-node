/**
  * @module suggestgrid
  *  
  * SuggestGrid is an recommendation and personalization service.
  */

var configuration = require('./configuration'),
    ActionController = require('./Controllers/ActionController'),
    BulkController = require('./Controllers/BulkController'),
    MetadataController = require('./Controllers/MetadataController'),
    RecommendationController = require('./Controllers/RecommendationController'),
    SimilarityController = require('./Controllers/SimilarityController'),
    StateController = require('./Controllers/StateController'),
    Action = require('./Models/Action'),
    ActionDeleteBody = require('./Models/ActionDeleteBody'),
    ActionsModel = require('./Models/ActionsModel'),
    Metadata = require('./Models/Metadata'),
    UsersModel = require('./Models/UsersModel'),
    ItemsModel = require('./Models/ItemsModel'),
    SpaceRequestBody = require('./Models/SpaceRequestBody'),
    TypeRequestBody = require('./Models/TypeRequestBody'),
    RecommendUsersBody = require('./Models/RecommendUsersBody'),
    RecommendItemsBody = require('./Models/RecommendItemsBody'),
    SimilarUsersBody = require('./Models/SimilarUsersBody'),
    SimilarItemsBody = require('./Models/SimilarItemsBody');


function initializer(){}

//Main functional components of suggestgrid
initializer.configuration = configuration;
initializer.ActionController = ActionController;
initializer.BulkController = BulkController;
initializer.MetadataController = MetadataController;
initializer.RecommendationController = RecommendationController;
initializer.SimilarityController = SimilarityController;
initializer.StateController = StateController;

//Main Models of suggestgrid
initializer.Action = Action;
initializer.ActionDeleteBody = ActionDeleteBody;
initializer.ActionsModel = ActionsModel;
initializer.Metadata = Metadata;
initializer.UsersModel = UsersModel;
initializer.ItemsModel = ItemsModel;
initializer.SpaceRequestBody = SpaceRequestBody;
initializer.TypeRequestBody = TypeRequestBody;
initializer.RecommendUsersBody = RecommendUsersBody;
initializer.RecommendItemsBody = RecommendItemsBody;
initializer.SimilarUsersBody = SimilarUsersBody;
initializer.SimilarItemsBody = SimilarItemsBody;

module.exports = initializer;