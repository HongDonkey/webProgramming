$(function(){

	$('.b1').click(function() {
		$('.b3').append('<p>click</p>');
	});

	$('.b2').click(function() {
//		$('.b3').html('');
		// var temp = $('.b3').html();
		// alert(temp);

		var p_len = $('p').length;
		alert(p_len);

		var $tmp = $('p');
		for(var i=0; i<p_len; i++){
			$tmp.eq(i).html("<p>"+(i+1)+"</p>");
			// p의 길이만큼 반복하는데 tmp변수(p태그의 값)에 해당하는 값을
			// i(여기서는 p태그 하나하나)에 접근해서 html을 사용하여 p태그 값을 i+1로 변환한다
		}
	});

});
