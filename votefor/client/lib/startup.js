Meteor.startup(function () {

	Deps.autorun(function () {
		Meteor.subscribe('getAllItems', function onComplete(){
			Session.set('isItemsCollectionLoaded', true);
		});

		Meteor.subscribe('getAllShelfs', function onComplete(){
			Session.set('isShelfsCollectionLoaded', true);
		});

		// All Models has been loaded !
		(function (){
			var isAllReady = Session.get('isItemsCollectionLoaded') && Session.get('isShelfsCollectionLoaded'); 
			Session.set('isAllCollectionLoaded', isAllReady);
		})();

	});

});