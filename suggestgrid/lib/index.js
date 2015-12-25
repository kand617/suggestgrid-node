/**
  * @module suggestgrid
  *  
  * SuggestGrid is an recommendation and personalization service.
  */

var configuration = require('./configuration'),
    APIController = require('./Controllers/APIController');


function initializer(){}

//Main functional components of suggestgrid
initializer.configuration = configuration;
initializer.APIController = APIController;

//Main Models of suggestgrid

module.exports = initializer;