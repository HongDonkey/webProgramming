$(function(){

	var fsize = 12; 

	$('.plus').click(function(){
		fsize++;
		$('body').css({"font-size":fsize});
	});

	$('.minus').click(function(){
		fsize--;
		$('body').css({"font-size":fsize});
	});

});