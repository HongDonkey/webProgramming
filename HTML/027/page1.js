$(function(){

	$('.m1').toggle(function() {
		$('.hide').animate({"height":"200px"}, 500, function(){
			$('.hide').animate({"height":"100px"}, 500);	
		});
		$('.m1').html("<a href='http://naver.com'>close</a>");
	}, function(){
		$('.hide').animate({"height":"0px"}, 500);
		$('.m1').html("more");
	});

});