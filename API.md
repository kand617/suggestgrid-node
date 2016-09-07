

## Type Methods
Type methods are used for managing SuggestGrid types.
For more information on types, refer to [Types concept documentation](http://www.suggestgrid.com/docs/concepts#types).

### Create a New Type
> `createType(type, body, callback)`

Creates a new implicit or explicit type.

```js
// implicit type is created by default
typeContoller.createType('views', {}, function (error, response) {
  if (error) {
    console.error(error)
  } else {
    console.info("Views type is created");
  }
});
```

```js
typeContoller.createType('views', {rating: "implicit"}, function (error, response) {
  if (error) {
    console.error(error)
  } else {
    console.info("Views type is created");
  }
});
```

```js
typeContoller.createType('views', {rating: "explicit"}, function (error, response) {
  if (error) {
    console.error(error)
  } else {
    console.info("Views type is created");
  }
});
```

#### Parameters
##### URI/Query Parameters

Name | Type |Required| Description
--- | --- | --- | ---
type|string|true|The name of the type to be created.
##### Body Parameters

> TypeRequestBody (`object`)

Name | Type |Required| Description
--- | --- | --- | ---
rating|string|false|Could be "explicit" or "implicit" The default is "implicit".
### Get Properties of a Type
> `getType(type, callback)`

Get the options of a type. Has rating parameter.


```js
  typeContoller.getType('views', function (error, response) {
    console.log(response);
  });
```

#### Parameters
##### URI/Query Parameters

Name | Type |Required| Description
--- | --- | --- | ---
type|string|true|The name of the type to get properties.
### Delete a Type
> `deleteType(type, callback)`

Deletes a type with ALL of its actions and recommendation model.
Do not use this if you will need the type.



```js
  typeContoller.deleteType("views", function (error, response) {
    console.log(response);
  });
```

#### Parameters
##### URI/Query Parameters

Name | Type |Required| Description
--- | --- | --- | ---
type|string|true|The name of the type to be deleted.
### Get All Types
> `getAllTypes(callback)`

Get all type names in an array named types.


```js
  typeContoller.getAllTypes(function (error, response) {
    console.log(response);
  });
```

### Delete All Types
> `deleteAllTypes(callback)`

Deletes ALL types and ALL actions.


```js
  typeContoller.deleteAllTypes(function (error, response) {
    console.log(response);
  });
```



## Action Methods
Action methods are for posting and deleting actions.
For more information on actions, refer to [Actions concept documentation](http://www.suggestgrid.com/docs/concepts#actions).

### Post an Action
> `postAction({type, user_id, item_id, rating})`

Posts an action to the given type in the body.
The body must have user id, item id and type.
Rating is required for actions sent to an explicit type.


```js
actionController.postAction({type: "views", user_id: "20", item_id: "10"}, function (error, response) {
    console.log(response);
});
```

```js
actionController.postAction({type: "views", user_id: "20", item_id: "10", rating: 5}, function (error, response) {
    console.log(response);
});
```

#### Parameters
##### Body Parameters

> Action (`object`)

Name | Type |Required| Description
--- | --- | --- | ---
rating|number|false|The optional rating, if the type is explicit.
user_id|string|true|The user id of the performer of the action.
item_id|string|true|The item id of the item the action is performed on.
type|string|true|The type that the action belongs to.
### Post Bulk Actions
> `postBulkActions(actions, callback)`

Posts bulk actions to SuggestGrid.
The recommended method for posting multiple actions at once.




There's a limit of lines, hence number of actions you can send in one requests. That's default to 10000.

An example for bulk action request is the following:

```js

var actions = [];

actions.push({type: "views", user_id : "100", item_id : "10"});
actions.push({type: "views", user_id : "100", item_id : "11"});
actions.push({type: "views", user_id : "100", item_id : "12"});
actions.push({type: "views", user_id : "100", item_id : "13"});
actions.push({type: "views", user_id : "100", item_id : "14"});
actions.push({type: "views", user_id : "100", item_id : "15"});
actions.push({type: "views", user_id : "101", item_id : "16"});
actions.push({type: "views", user_id : "101", item_id : "17"});
actions.push({type: "views", user_id : "101", item_id : "18"});
actions.push({type: "views", user_id : "101", item_id : "99"});


actionController.postBulkActions(actions, function(error, response) {
  console.log(response);
});

```

Explicit actions can be post as;

```js

var actions = [];

actions.push({type: "views", user_id : "100", item_id : "10", rating: 3});
actions.push({type: "views", user_id : "100", item_id : "11", rating: 23});
actions.push({type: "views", user_id : "100", item_id : "12", rating: 13});
actions.push({type: "views", user_id : "100", item_id : "13", rating: 9});
actions.push({type: "views", user_id : "100", item_id : "14", rating: 1});
actions.push({type: "views", user_id : "100", item_id : "15", rating: 4});
actions.push({type: "views", user_id : "101", item_id : "16", rating: 7});
actions.push({type: "views", user_id : "101", item_id : "17", rating: 12});
actions.push({type: "views", user_id : "101", item_id : "18", rating: 3});
actions.push({type: "views", user_id : "101", item_id : "99", rating: 6});


actionController.postBulkActions(actions, function(error, response) {
  console.log(response);
});

```

#### Parameters
### Get Actions
> `getActions(type, userId, itemId, olderThan, callback)`

Type must be provided. Additionally,

* If both `user_id` and `item_id` are supplied it returns the count of the corresponding actions.
* If only `user_id` is provided, it returns the count of all the action of the given user.
* If only `user_id` is provided, it returns the count of all the action of the given item.
* If only `older_than` is provided, it returns the count of actions older than the given timestamp.
* If a few of these parameters are provided, it returns the count of the intersection of these parameters.
* If none of these are provided, it returns the count of the whole type.



#### Get Actions Count

```js
actionController.getActions('views', null, null, null, function (error, response) {
  console.log(response);
});
```

#### Get Actions Count by Query

You can include any of type, user_id, item_id, and older_than path parameters and SuggestGrid return the count of such actions.

If no type is provided, the total number of actions will be returned.

This method can be particularly useful before deleting actions by query.

```js
actionController.getActions(null, 'u5321', 'i1635', '891628467', function (error, response) {
 console.log(response);
});
```

#### Parameters
##### URI/Query Parameters

Name | Type |Required| Description
--- | --- | --- | ---
type|string||The type of the actions.
user_id|string||The user id of the actions.
item_id|string||The item id of the actions.
older_than|string||Delete all actions of a type older than the given timestamp or time. Valid times are 1s, 1m, 1h, 1d, 1M, 1y, or unix timestamp (like 1443798195). 
### Delete Actions
> `deleteActions(type, userId, itemId, olderThan)`

Type must be provided. Additionally,

* If both user id and item id are supplied the user's actions on the item will be deleted.
* If only user id is provided, all actions of the user will be deleted.
* If only item id is provided, all actions on the item will be deleted.
* If only older than is provided, all actions older than the timestamp or the duration will be deleted.
* If a few of these parameters are provided, delete action will be executed within intersection of these parameters.
* One of these parameters must be provided. In order to delete all actions, delete the type.



#### Delete a User's Actions

```js
actionController.deleteActions('views', '12', null, null, function (error, response) {
  console.log(response);
});
```

#### Delete an Item's Actions

```js
actionController.deleteActions('views', null, '12', null, function (error, response) {
  console.log(response);
});
```

#### Delete Old Actions

In addition to unix timestamps, the method could accept:

  * Seconds. (s) For example: 100s
  * Minutes. (m) For example: 30m
  * Hours. (h) For example: 12h
  * Days. (d) For example: 7d
  * Months. (M) For example: 6M
  * Years. (y) For example: 10y

```js
actionController.deleteActions('views', null, null, '1d', function (error, response) {
  console.log(response);
});
```

#### Delete Actions by Query

You can include any of user_id, item_id, and older_than parameters to the delete query and SuggestGrid would delete the intersection of the given queries accordingly.

For example, if all of user_id, item_id, and older_than are provided, SuggestGrid would delete the actions of the given user on the given item before the given time.

```js
actionController.deleteActions('views', '1', '30', '891628467', function (error, response) {
  console.log(response);
});
```

#### Parameters
##### URI/Query Parameters

Name | Type |Required| Description
--- | --- | --- | ---
type|string||The type of the actions.
user_id|string||The user id of the actions.
item_id|string||The item id of the actions.
older_than|string||Delete all actions of a type older than the given timestamp or time. Valid times are 1s, 1m, 1h, 1d, 1M, 1y, or unix timestamp (like 1443798195). 


## Metadata Methods
Metadata methods are for posting and deleting metadata.
For more information on metadata, refer to [Metadata concept documentation ](http://www.suggestgrid.com/docs/concepts#metadata).

### Post a User
> `postUser(metadata, callback)`

Posts a user metadata.

```js
metadataController.postUser({id: "9394182", age: 28, name: "Avis Horton"}, function(error, response) {
  console.log(response);
});
```

#### Parameters
##### Body Parameters

> Metadata (`object`)

Name | Type |Required| Description
--- | --- | --- | ---
id|string|true|
### Post Bulk Users
> `postBulkUsers(metadata, callback)`

Post user metadata in bulk.
This metadata can be used to filter or to be included in recommendations and similars methods.



There's a limit of lines, hence number of actions you can send in one requests. That's default to 10000.

An example for bulk user request is the following:

```js

var users = []

users.push({id: "9394182", age: 28, name: "Avis Horton"});
users.push({id: "6006895", age: 29, name: "Jami Bishop"});
users.push({id: "6540497", age: 21, name: "Bauer Case"});
users.push({id: "1967970", age: 30, name: "Rosetta Cole"});
users.push({id: "6084106", age: 35, name: "Shaw Simon"});

metadataController.postBulkUsers(users, function(error, response) {
  console.log(response);
});
```

#### Parameters
### Get Users
> `getUsers(callback)`

Get information about users. Only returns count at the moment.


```js
  metadataController.getUsers(function(error, response) {
      console.log(response);
  });
```

### Delete a User
> `deleteUser(userId, callback)`

Delete a user metadata with the given user_id.

```js
metadataController.deleteUser("10", function(error, response) {
  console.log(response);
});
```

#### Parameters
##### URI/Query Parameters

Name | Type |Required| Description
--- | --- | --- | ---
user_id|string|true|The user_id to delete its metadata.
### Delete All Users
> `deleteAllUsers(callback)`

Deletes all user metadata from SuggestGrid.

```js
metadataController.deleteAllUsers(function(error, response) {
  console.log(response);
});
```

### Post an Item
> `postItem(metadata, callback)`

Posts an item metadata.
This metadata can be used to filter or to be included in recommendations and similars methods.


```js
metadataController.postItem({id: "25922342", manufacturer: "Vicon", price: 348}, function(error, response) {
  console.log(response);
});
```

#### Parameters
##### Body Parameters

> Metadata (`object`)

Name | Type |Required| Description
--- | --- | --- | ---
id|string|true|
### Post Bulk Items
> `postBulkItems(metadata, callback)`

Post item metadata in bulk.
This method is recommended for sharing stored data with SuggestGrid.



There's a limit of lines, hence number of actions you can send in one requests. That's default to 10000.

An example for bulk user request is the following:

```js

var items = []

items.push({id: "25922342", manufacturer: "Vicon", price: 348});
items.push({id: "80885987", manufacturer: "Aquamate", price: 771});
items.push({id: "71746854", manufacturer: "Exoplode", price: 310});
items.push({id: "53538832", manufacturer: "Teraprene", price: 832});
items.push({id: "72006635", manufacturer: "Ohmnet", price: 340});

metadataController.postBulkItems(items, function(error, response) {
  console.log(response);
});
```

#### Parameters
### Get Items
> `getItems(callback)`

Get information about items. Only returns count at the moment.


```js
  metadataController.getItems(function(error, response) {
      console.log(response);
  });
```

### Delete an Item
> `deleteItem(itemId, callback)`

Delete an item metadata with the given item_id.

```js
metadataController.deleteItem("10", function(error, response) {
  console.log(response);
});
```

#### Parameters
##### URI/Query Parameters

Name | Type |Required| Description
--- | --- | --- | ---
item_id|string|true|The item_id to delete its metadata.
### Delete All Items
> `deleteAllItems(callback)`

Delete all items metadata.
This method would flush all items metadata on SuggestGrid.


```js
metadataController.deleteAllItems(function(error, response) {
  console.log(response);
});
```



## Recommnedation Methods
Recommnedation methods are for getting recommended items or users responses from SuggestGrid.
For more information on recommendations, refer to [Recommendations concept documentation](http://www.suggestgrid.com/docs/concepts#recommendations).

### Get Recommended Users
> `getRecommendedUsers(body, callback)`

Recommend users for the given body parameters.

examples:

```js
recommendationController.getRecommendedUsers({type: 'view', item_id: "42"}, function(error, response) {
  console.log(response.users); // [{id:"451"},{id:"456"}]
});
```

```js
recommendationController.getRecommendedUsers({type: 'view', item_ids: ["42", "532", "841"]}, function(error, response) {
  console.log(response.users); // [{id:"121"},{id:"33"},{id:"12"},{id:"32"},{id:"49"},{id:"11"},{id:"23"},{id:"54"},{id:"62"},{id:"29"}]
});
```

```js
recommendationController.getRecommendedUsers({type: 'view', item_ids: ["42", "532", "841"], similar_user_id: "100", except: ["100"], size: 5}, function(error, response) {
  console.log(response.users); // [{id:"1"},{id:"84"},{id:"9"},{id:"32"},{id:"45"}]
});
```


```js
recommendationController.getRecommendedUsers({type: 'view', item_id: "42", size: 5, fields: ["name"], filter: { less_equal: {age: 60}}}, function(error, response) {
  console.log(response.users); // [{id:"11",name:"Robert"},{id:"848",name:"Mike"},{id:"2",name:"Jennifer"}]
});
```

You can read [filters](/docs/concepts#filters-parameter) and [fields](/docs/concepts#fields-parameter) documentations for further reference.

#### Parameters
##### Body Parameters

> GetRecommendedUsersBody (`object`)

Name | Type |Required| Description
--- | --- | --- | ---
except|array|false|These ids will not be included in the response. 
size|integer|false|
item_ids|array|false|
types|string|false|
filter||false|
fields|array|false|
type|string|false|
item_id|string|false|
similar_user_id|string|false|
### Get Recommended Items
> `getRecommendedItems(body, callback)`

Recommend items for the given body parameters.

examples:

```js
recommendationController.getRecommendedItems({type: 'view', user_id: "42"}, function(error, response) {
  console.log(response.items); // [{id:"451"},{id:"456"}]
});
```

```js
recommendationController.getRecommendedItems({type: 'view', user_ids: ["42", "532", "841"]}, function(error, response) {
  console.log(response.items); // [{id:"121"},{id:"33"},{id:"12"},{id:"32"},{id:"49"},{id:"11"},{id:"23"},{id:"54"},{id:"62"},{id:"29"}]
});
```

```js
recommendationController.getRecommendedItems({type: 'view', user_ids: ["42", "532", "841"], similar_item_id: "321", size: 3}, function(error, response) {
  console.log(response.items); // [{id:"13"},{id:"65"},{id:"102"}]
});
```

```js
recommendationController.getRecommendedItems({type: 'view', user_id: "42", size: 5, filter: {less_equal: {price: 100}}}, function(error, response) {
  console.log(response.items); // [{id:"930"},{id:"848"},{id:"102"},{id:"303"},{id:"593"}]
});
```

```js
recommendationController.getRecommendedItems({type: 'view', user_id: "42", size: 5, fields : ["category"], filter: { exact: {manufacturer: "Apple"}}}, function(error, response) {
  console.log(response.items); // [{id:"930",category:"notebook"},{id:"848",category:"keyboard"},{id:"102",category:"watch"}]
});
```

You can read [filters](/docs/concepts#filters-parameter) and [fields](/docs/concepts#fields-parameter) documentations for further reference.

#### Parameters
##### Body Parameters

> GetRecommendedItemsBody (`object`)

Name | Type |Required| Description
--- | --- | --- | ---
except|array|false|These ids will not be included in the response. 
size|integer|false|
user_id|string|false|
types|string|false|
filter||false|
fields|array|false|
type|string|false|
similar_item_id|string|false|
user_ids|array|false|


## Similarity Methods
Similarity methods are for getting similar items or users responses from SuggestGrid.
For more information on similars, refer to [Similarities concept documentation](http://www.suggestgrid.com/docs/concepts#similarities).

### Get Similar Users
> `getSimilarUsers(body, callback)`

Get similar users to a user.

examples:

```js
similarityController.getSimilarUsers({type: "views", user_id: "1"}, function(error, response) {
  console.log(response.users); // [{id:"1"},{id:"451"},{id:"456"}]
});
```

```js
similarityController.getSimilarUsers({type: "views", user_id: "1", except: ["1"]}, function(error, response) {
  console.log(response.users); // [{id:"451"},{id:"456"}]
});
```

```js
similarityController.getSimilarUsers({type: "views", user_ids: ["42", "532", "841"], size: 3, fields: ["name"], filter: { less_equal: { age: 20}}, function(error, response) {
  console.log(response.users); // [{id:"400", name:"Jason"},{id:"132", name:"Scarlett"},{id:"503", name:"Amy"}]
});
```

You can read [filters](/docs/concepts#filters-parameter) and [fields](/docs/concepts#fields-parameter) documentations for further reference.

#### Parameters
##### Body Parameters

> GetSimilarUsersBody (`object`)

Name | Type |Required| Description
--- | --- | --- | ---
except|array|false|These ids will not be included in the response. 
size|integer|false|
user_id|string|false|
types|string|false|
filter||false|
fields|array|false|
type|string|false|
user_ids|array|false|
### Get Similar Items
> `getSimilarItems(body, callback)`

Get similar items to an item.

examples:

```js
similarityController.getSimilarItems({type: "views", item_id: "1"}, function(error, response) {
  console.log(response.items); // [{id:"1"},{id:"451"},{id:"456"}]
});
```

```js
similarityController.getSimilarItems({type: "views", item_id: "1", except: ["1"]}, function(error, response) {
  console.log(response.items); // [{id:"451"},{id:"456"}]
});
```

```js
similarityController.getSimilarItems({type: "views", item_ids:  ["3","5","8"], size: 3, fields: ["category"], filter: { greater: { capacity: 60}}, function(error, response) {
  console.log(response.items); // [{id:"451",category:"television"},{id:"656",category:"blu-ray-dvd-players"}]
});
```

You can read [filters](/docs/concepts#filters-parameter) and [fields](/docs/concepts#fields-parameter) documentations for further reference.

#### Parameters
##### Body Parameters

> GetSimilarItemsBody (`object`)

Name | Type |Required| Description
--- | --- | --- | ---
except|array|false|These ids will not be included in the response. 
size|integer|false|
item_ids|array|false|Get similar items to given item ids. Either item id or item ids must be provided. 
types|string|false|
filter||false|
fields|array|false|
type|string|false|
item_id|string|false|Get similar items to given item id. Either item id or item ids must be provided. 
