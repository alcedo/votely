/*****************************************************************************
 *
 * Meteor router. Automatically replaces  {{renderPage}} template declaration  
 * based on the route values. 
 * Note: router was added as a package via 'mrt add router' cmd
 *
 *****************************************************************************/

Meteor.Router.add({

  //default route to pollChoices template
  '/' : 'pollChoices', 

  '/shelf/:_shelfTag': function(shelfTag) {
	  Session.set('shelfTag' , shelfTag); 
	  return 'shelfDisplay'; 
  },

  '/vote/:_itemId' : function (itemId) {
	  Session.set('voteItemId', itemId);
	  Models.AddVoteToItemById(itemId);  //+1 to vote count
	  return 'voteSuccessDisplay';
  },

  '*': 'not_found'
});
