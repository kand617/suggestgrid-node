/**
 * suggestgrid
 *
 * This file was automatically generated for SuggestGrid by APIMATIC v2.0 ( https://apimatic.io )
 */

var Configuration = {
    //The base Uri for API calls
    BASEURI : "https://example.com/api",

    //The username to use with basic authentication
    //TODO: Replace the BasicAuthUserName with an appropriate value
    basicAuthUserName : "TODO: Replace",

    //The password to use with basic authentication
    //TODO: Replace the BasicAuthPassword with an appropriate value
    basicAuthPassword : "TODO: Replace"

};

// The constructor function
module.exports = function configure(suggestgridUrl) {
    var url = require('url')
    var sgUrl = url.parse(suggestgridUrl)

    var auth = sgUrl.auth.split(':')
    var user = auth[0]
    var pass = auth[1]
    var baseUri = sgUrl.protocol + "//" + sgUrl.host + sgUrl.path

    console.log("baseUri is: " + baseUri)

    Configuration.basicAuthUserName = user
    Configuration.basicAuthPassword = pass
    Configuration.BASEURI = baseUri
}
