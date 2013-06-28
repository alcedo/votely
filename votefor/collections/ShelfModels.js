console.log('ShelfModels.js loaded');

Shelfs = new Meteor.Collection('Shelfs');

//Global Exposed Functions 
Models.CreateShelf = function (shelfTag) { 
	var shelf = new ShelfsModel(shelfTag);
	shelf.create(); 
};

Models.GetShelf = function (shelfTag) { 
	var shelf = new ShelfsModel(shelfTag);
 	return shelf.getOne();
};

Models.RemoveShelf = function (shelfTag) { 
	var shelf = new ShelfsModel(shelfTag);
 	return shelf.remove();
};

Models.GetAllShelfItem = function (shelfTag) { 
	var shelf = new ShelfsModel(shelfTag);
	return shelf.getShelfItems();
};

//Debug Functions 
Debug.AllShelf = function () { 
	console.log(Shelfs.find({}).fetch());
};


//////////////////////////////////////
// These methods aren't exposed. Wrap it in Global Functions to be accessible elsewhere 
function ShelfsModel (tag) {
	this.collection =  Shelfs;
	this.itemCollection = Items;
    this.tag = tag;
}

ShelfsModel.prototype.getShelfItems = function() {
	return this.itemCollection.find({'shelfTag' : this.tag}).fetch();
};

ShelfsModel.prototype.create = function() {
    if(!this.isExisting()) this.collection.insert({'shelfTag' : this.tag});
};

ShelfsModel.prototype.isExisting = function() {
    var count = this.collection.find({'shelfTag' : this.tag}).count();
    if(count == 0) return false;
    return true; 
};

ShelfsModel.prototype.getOne = function() {
    return this.get()[0]; 
};

ShelfsModel.prototype.get = function() {
    var cursor = this.collection.find({'shelfTag' : this.tag});
    return cursor.fetch(); 
};

ShelfsModel.prototype.remove = function() {
	var toRemove = this.getOne(); //remove myself. 
	this.collection.remove({ _id : toRemove._id });
};

