console.log('utility.js loaded');

// Generate short GUID
MyApp.utility = {
	genShortGuid : function generateUIDNotMoreThan1million() {
	    return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).substr(-4)
	},
};