console.log('main.votefor.js loaded');

if (Meteor.isClient) {
	Meteor.startup(function () {
		
	});

	// TEST PURPOSES, would be changed to uniquely generated ID
	Session.set('shelfTag', 'testShelf');
	Session.set('isGetAllShelfLoaded', false); 
	Session.set('voteTopic', 'Hi! What would we like to vote on today ?');
	Session.set('isHideVoteTopic', false);
	Session.set('voteYesCount', 0);
	Session.set('voteNoCount', 0);
	Session.set('uniqueClientId', '[#Guest' + MyApp.utility.genShortGuid()+']');

	Meteor.subscribe('get_all_shelf', function () {
		Session.set('isGetAllShelfLoaded', true);  // mark true to ensure db rdy
	
		// Create shelf item if non exist 
		if(ShelfsModel.find({'tag': Session.get('shelfTag')}).count() == 0 ) {
			ShelfsModel.insert({
				'tag': Session.get('shelfTag'), 
				'voteTopic' : Session.get('voteTopic'),
				'isHideVoteTopic' : Session.get('isHideVoteTopic'),
				'voteYesCount' : Session.get('voteYesCount'),
				'voteNoCount' : Session.get('voteNoCount')
			});
		}

		//quick hack to add in new client:msg pairing
		ChatsModel.insert({
			'shelfTag': Session.get('shelfTag'),
			'clientId': Session.get('uniqueClientId'),
			'msg' : ''
		});
  	});
}

Meteor.autorun(function() {
	if(Session.get('isGetAllShelfLoaded')) {
		var shelfInstance = ShelfsModel.find( {'tag': Session.get('shelfTag')} ).fetch()[0];
		Session.set('voteTopic',shelfInstance.voteTopic);
		
		// if other clients join in, sync check w db
		if(shelfInstance.isHideVoteTopic){
			Session.set('isHideVoteTopic', true);
		}else {
			Session.set('isHideVoteTopic', false);
		}
	}
});

Template.vote_buttons.preserve(['#voteYes', '#voteNo']);

Template.vote_results.votes = function () {
	return ShelfsModel.find({'tag': Session.get('shelfTag')});
};

Template.main.voteTopic = function () {
	return Session.get('voteTopic');
};

Template.main.dbSyncReady = function () {
	return Session.get('isGetAllShelfLoaded'); 
};

Template.main.userInputNewTopic = function () {
	return Session.get('isHideVoteTopic');
};

Template.main.events = {
	'click #setTopicBtn' : function (event) {
		var userTopicInput = $('#voteTopicInput').val();
		ShelfsModel.update(
			{_id:ShelfsModel.findOne({'tag': Session.get('shelfTag')})['_id']} , 
			{$set : {'voteTopic' : userTopicInput, 'isHideVoteTopic' : true}}
		);
	},
};

Template.vote_buttons.events =  {
	'click #voteYes' : function (event) {
		ShelfsModel.update(
			{_id:ShelfsModel.findOne({'tag': Session.get('shelfTag')})['_id']} , 
			{$inc: {voteYesCount: 1}}
		);
	},

	'click #voteNo' : function (event) {
		ShelfsModel.update(
			{_id:ShelfsModel.findOne({'tag': Session.get('shelfTag')})['_id']} , 
			{$inc: {voteNoCount: 1}}
		);
	},
};

Template.chat_buzz.chatMessages = function () {
	return ChatsModel.find({'shelfTag': Session.get('shelfTag')});
};

Template.chat_buzz.events = {
	'keyup #chatInput' : function (event) {
		var msg = event.currentTarget.value;
		ChatsModel.update(
			{_id:ChatsModel.findOne({
				'shelfTag': Session.get('shelfTag'), 
				'clientId': Session.get('uniqueClientId')})['_id']} , 
			{$set : {'msg': msg}}
		);
	},
};

 

//'click .btn.btn-primary'
