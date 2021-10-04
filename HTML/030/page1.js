$(function(){

	$('.b1').click(function() {
		$('.b3').append('<p>click</p>');	
	});

	$('.b2').click(function() {
		$('.b3').html('');	
	});

});