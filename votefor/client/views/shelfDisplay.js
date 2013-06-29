// showShelfItems Template Helper
Template.showShelfItems.listShelfItems = function () { 
	return Models.GetAllShelfItem(Session.get("shelfTag"));
};

Template.showShelfItems.events = {
	'click .btn' : function (event) {
		
		//Figure out which item did the user click on 
		var itemId = event.currentTarget.getAttribute('itemId');
		//+1 to vote count for item
		Models.AddVoteToItemById(itemId);		
	},

};

// genShortPoll Template Helpers 
Template.genShortPoll.helpers({
  voteUrl: function () {
  	return MyApp.utility.getHostName() + '/vote/';
  },

  listShelfItems: function () { 
	return Models.GetAllShelfItem(Session.get("shelfTag"));
  },

});
