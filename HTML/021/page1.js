$(function(){
	
	$('.m1').click(function() {
		$('.m2').addClass('c1');
	});

	$('.m2').click(function() {
		$('.m2').removeClass('c1');
	});
	
});