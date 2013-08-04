/*****************************************************************************
 *
 * This file exposes the backend database in a RESTFUL manner  
 *
 *****************************************************************************/

if (Meteor.isServer) {
  Meteor.startup(function () {
    collectionApi = new CollectionAPI({ authToken: '2tokens' });
    collectionApi.addCollection(Items, 'items');
    collectionApi.addCollection(Shelfs, 'shelfs');
    collectionApi.start();
  });
}