$(function(){

	$('.b1').hover(function() {
		$('.re').addClass('c1');
	}, function() {
		
	});	
	
	$('.b2').hover(function() {
		$('.re').fadeOut(300);
	}, function() {
		$('.re').fadeIn(300);
	});
	
	$('.b3').hover(function() {
		
	}, function() {
		alert("mouse out");
	});
});