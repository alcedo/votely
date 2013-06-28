console.log('poll choices loaded');


var getFormData = function () { 
	var form = {};
	// Get item descriptions
	$.each($('#userChoice').serializeArray(), function() {
		   form[this.name] = this.value;
	});	

	return form;
};

// Event Handlers
Template.pollChoices.events = {
	'click #submitChoice' : function (event) {
		
		// Persist Shelf item
		var shelfTag = MyApp.utility.genShortGuid();
		Models.CreateShelf(shelfTag); 	
	
		// Persist Each Item 
		$.each(getFormData(), function(key, val) { 
			Models.CreateItem(shelfTag, val);
		});

		// Redirect user
		Meteor.Router.to('/shelf/' + shelfTag);

	},
};


Meteor.startup(function () {

	Deps.autorun(function () {
		Meteor.subscribe('getAllItems');
		Meteor.subscribe('getAllShelfs');
	});

});
