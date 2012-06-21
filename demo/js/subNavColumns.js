/*  
	subNavColumns.js - Add css columns to sub navigation when there are more than x list items.
	by @kenseals
	------------------------------------ */

(function($) {
	$.fn.subNavColumns = function(options){

		// Create some defaults, extending them with any options that are provided
	    var settings = $.extend( {
			'min-length': '5'
	    }, options);

	    // Maintain Chainability
		return this.each(function() {        

			// Define variables
	    	var $l = $(this).children('li').length;
	    	var $mL = settings.minLength;

	    	// If subnav is longer than y, add .nav-columns class
			if ($l > $mL) {
				$(this).addClass('nav-columns');
			};

	    });

	};
})(jQuery);