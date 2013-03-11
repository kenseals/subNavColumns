/*  
	subNavColumns.js - Add classes for css columns to sub navigation when there are more than x list items.
	by @kenseals
	------------------------------------ */

(function($) {
	$.fn.subNavColumns = function(options){

		// Create some defaults, extending them with any options that are provided
	    var settings = $.extend( {
			'minLength': '5' // Number of list items after which columns will be added
	    }, options);

	    // Maintain Chainability
		return this.each(function() {        

			// Define variables
			var $this = $(this),
				$subNav = $this.find('li > ul'),
				$subNavParent = $subNav.parent('li'),
				$l = $subNav.children('li').length,
				$mL = settings.minLength,
				$L = Math.round($l / $mL),
				$x = $this.children('li').length,
				$n = Math.round($x / 2),
				$y = $subNavParent.index();

	    	// If subnav is longer than y, add .nav-columns class
			if ($l > $mL) {
				$subNav.addClass('nav-columns');
			};

			// Add class for # of columns
			$subNav.addClass('$L');

			// If main nav item is on second half of nav, apply class
			if ($y > $n) {
				$subNavParent.addClass('second-half');
			};

	    });

	};
})(jQuery);