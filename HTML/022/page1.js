$(function(){
	
	$('.b1').click(function() {
		$('.re').addClass('c1');
	});

	$('.b2').click(function() {
		$('.re').addClass('c2');
	});

	$('.b3').click(function() {
		//$('.re').addClass('c3');
		//$('.re').hide(500);
		$('.re').fadeOut(500);
	});


	$('.b4').click(function() {
		$('.re').removeClass('c1');
		$('.re').removeClass('c2');
		//$('.re').removeClass('c3');
		$('.re').show(200);
		//$('.re').fadeIn(500);
	});
	
});