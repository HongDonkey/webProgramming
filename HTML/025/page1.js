$(function(){

	$('.m1').click(function() {
		if ($(this).hasClass('on')){
			// on 클래스가 있으면 작동
				$('.hide').animate({"height":"0px"}, 500);
				$(this).removeClass('on');
				// on 클래스 삭제
		} else {
				$('.hide').animate({"height":"100px"}, 500);
					// on 클래스가 없으면 작동
				$(this).addClass('on');
				// on 클래스 추가
		}


	});

});
