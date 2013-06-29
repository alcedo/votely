console.log('ItemModels.js loaded');

Items = new Meteor.Collection('Items');

// Exposed Global Methods.
Models.CreateItem = function (shelfTag, description) { 
	var newItem = new ItemsModel(shelfTag, description);
	newItem.create(); 
};

Models.GetItem = function (shelfTag, description) {
	var myItem = new ItemsModel(shelfTag, description);
	return myItem.getOne();
};

Models.RemoveItem = function (shelfTag, description) { 
	var myItem = new ItemsModel(shelfTag, description);
	myItem.remove(); 
};

Models.GetItemById = function (id) { 
	var myItem = new ItemsModelById(id);
	return	myItem.getOne();
};

Models.AddVoteToItemById = function (id) { 
	var myItem = new ItemsModelById(id);
	return	myItem.addVoteCount();
};

// Used for debugging purposes ONLY...
Debug.AllItem = function () { 
	console.log(Items.find({}).fetch());
};

//////////////////////////////////////
// These methods aren't exposed. Wrap it in Global Functions to be accessible elsewhere. 

// ItemModels manipulation by individual Item-mongoDB-Id 
function ItemsModelById (_id) {
	this.collection = Items; 
	this.id = _id; 
}

ItemsModelById.prototype.getOne = function () {
	return	this.collection.findOne({'_id' : this.id});
};

ItemsModelById.prototype.addVoteCount = function () {
	this.collection.update(
		{'_id': this.id},
		{$inc: { 'yesCount' : 1 }}
	);	
};


// ItemModels by shelfTag + Description. 
function ItemsModel (shelfTag , description) {
	this.collection =  Items;
	this.description = description;
	this.shelfTag = shelfTag;
}	

ItemsModel.prototype.create = function() { // Create a new item with 0 votes
    if(!this.isExisting()) {
		this.collection.insert({ 
	    	'shelfTag': this.shelfTag, 
	    	'description': this.description, 
	    	'yesCount' : 0  
	    });
    } else {
    	//throw new Error("Existing itemName: [" + this.description + "] exist within this shelf: "  + this.shelfTag);
    }
};

ItemsModel.prototype.remove = function() {
	var itemToRemove = this.getOne(); //remove myself. 
	this.collection.remove({ _id : itemToRemove._id });
};

ItemsModel.prototype.getOne = function() {
    return this.get()[0]; 
};

ItemsModel.prototype.get = function() {
    var itemCursor = this.collection.find({'shelfTag' : this.shelfTag, 'description' : this.description });
    return itemCursor.fetch(); 
};

ItemsModel.prototype.isExisting = function() {
    var count = this.collection.find({'shelfTag' : this.shelfTag, 'description' : this.description }).count();
    if(count == 0) return false;
    return true; 
};

ItemsModel.prototype.printProperties = function() {
	console.log('desc: ' + this.description + ' shelfTag: ' + this.shelfTag);
};
