console.log('global.js loaded');

ShelfsModel = new Meteor.Collection('Shelf');
ItemsModel = new Meteor.Collection('Items');
ChatsModel = new Meteor.Collection('Chats');

if(Meteor.isServer) {
    Meteor.publish('get_all_shelf', function(){
        return ShelfsModel.find({}); // returns everything 
    });

    Meteor.publish('get_all_chat_msg', function(){
        return ChatsModel.find({}); // returns everything 
    });
}

if(Meteor.isClient) {
    Meteor.autorun(function() {
        Meteor.subscribe("get_all_shelf");
        Meteor.subscribe("get_all_chat_msg");
    });	
}
