/*****************************************************************************
 *
 * This file defines various utility functions that can be used app-wide  
 *
 *****************************************************************************/

MyApp.utility = {
	
	genShortGuid : function generateUIDNotMoreThan1million() {
	    return ("00000" + (Math.random()*Math.pow(36,5) << 0).toString(36)).substr(-5)
	},

	getHostName : function getHostName() { 
		return location.protocol + '//' + location.host;
	},
};
