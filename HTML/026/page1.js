$(function(){

	$('.m1').toggle(function() {
		// toggle - 한번 클릭하면 열리고 한번 클릭하면 닫힘
		// toggle은 라이브 이벤트를 못 씀(앞서 했던 것처럼 class를 추가하고 삭제하는 방식 권장)
		$('.hide').animate({"height":"100px"}, 500);
		$('.m1').html("<b>close</b>");
	}, function(){
		$('.hide').animate({"height":"0px"}, 500);
		$('.m1').html("more");
	});

});
