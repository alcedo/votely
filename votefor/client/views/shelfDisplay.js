Template.shelfDisplay.displayShelfTag = function () { 
	return Session.get("shelfTag");
};

Template.showShelfItems.listShelfItems = function () { 
	return Models.GetAllShelfItem(Session.get("shelfTag"));
};

Template.genShortPoll.voteUrl = function () { 
	return MyApp.utility.getHostName() + '/vote/';
};

Template.genShortPoll.listShelfItems = function () { 
	return Models.GetAllShelfItem(Session.get("shelfTag"));
};


