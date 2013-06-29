Template.voteSuccessDisplay.helpers({
  itemVoted: function () {
    var itemVotedOn =  Models.GetItemById(Session.get('voteItemId'));
	return itemVotedOn;
  }
});
