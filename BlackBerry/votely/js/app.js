/******************************************************************************
* Appliction specific codes goes here
*******************************************************************************/

Lungo.init({});


/******************************************************************************
* Quirks. All quirks to port lungo to BB web works goes here. 
*******************************************************************************/

// This fixes the footer from being hidden. 
// I'm guessing the BB renderer is different from a scrollable web browser
$('article').height(screen.height - $('footer').height() );


 