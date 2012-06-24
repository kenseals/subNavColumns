subNavColumns
=============

Add css columns to sub navigation when there are more than x list items.


Usage
------

1 Add subNavColumns.js to your site. Make sure you have jQuery as well.

<!-- Link to subNavColumns.js -->
<script src="js/subNavColumns.js"></script>



2 Initialize subNavColumns.js 

<script>
	// Init subNavColumns
	$('.main-nav').subNavColumns();
</script>



3 Pass an option for how many list-items to have before adding classes for columns

<script>
	// Init subNavColumns
	$('.main-nav').subNavColumns({
		minLength:'5'
	});
</script>

