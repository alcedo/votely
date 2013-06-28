// TEMPLATE: shelfDisplay
Template.shelfDisplay.displayShelfTag = function () { 
	return Session.get("shelfTag");
};


// TEMPLATE: showShelfItems
Template.showShelfItems.listShelfItems = function () { 
	return Models.GetAllShelfItem(Session.get("shelfTag"));
};

Template.showShelfItems.events = {

};

// TEMPLATE: genShortPoll 
Template.genShortPoll.voteUrl = function () { 
	return MyApp.utility.getHostName() + '/vote/';
};

Template.genShortPoll.listShelfItems = function () { 
	return Models.GetAllShelfItem(Session.get("shelfTag"));
};


