/*  
	subNavColumns.js - Add classes for css columns to sub navigation when there are more than x list items.
	by @kenseals
	------------------------------------ */

(function($) {
	$.fn.subNavColumns = function(options){

		// Create some defaults, extending them with any options that are provided
	    var settings = $.extend( {
			'min-length': '5' // Number of list items after which columns will be added
	    }, options);

	    // Maintain Chainability
		return this.each(function() {        

			// Define variables
			var $this = $(this);
			var $subNav = $this.find('li > ul');
			var $subNavParent = $subNav.parent('li');
	    	var $l = $subNav.children('li').length;
	    	var $mL = settings.minLength;
	    	var $x = $this.children('li').length;
	    	var $n = ($x / 2);
	    	var $y = $subNavParent.index();

	    	// If subnav is longer than y, add .nav-columns class
			if ($l > $mL) {
				$subNav.addClass('nav-columns');
			};

			if ($l > ($mL * 2)) {
				$subNav.addClass('two');		
			}

			// If main nav item is on second half of nav, apply class
			if ($y > $n) {
				$subNavParent.addClass('second-half');
			};

	    });

	};
})(jQuery);