// Meteor.publish definitions
Meteor.publish('getAllShelfs', function(){
    return Shelfs.find({}); // returns everything 
});

Meteor.publish('getAllItems', function(){
    return Items.find({}); // returns everything 
});