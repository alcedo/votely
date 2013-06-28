Meteor.Router.add({

  '/' : 'pollChoices', //default route to pollChoices template

  '/shelf/:_shelfTag': function(shelfTag) {
	  Session.set('shelfTag' , shelfTag); 
	  return 'shelfDisplay'; 
  },

  '/vote/:_itemId' : function (itemId) {
  	console.log('voted on: ' + itemId);
  },

  '*': 'not_found'
});
