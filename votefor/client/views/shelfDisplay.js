// TEMPLATE: shelfDisplay
Template.shelfDisplay.displayShelfTag = function () { 
	return Session.get("shelfTag");
};


// TEMPLATE: showShelfItems
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

// TEMPLATE: genShortPoll 
Template.genShortPoll.voteUrl = function () { 
	return MyApp.utility.getHostName() + '/vote/';
};

Template.genShortPoll.listShelfItems = function () { 
	return Models.GetAllShelfItem(Session.get("shelfTag"));
};


