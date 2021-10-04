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
		}
	});

	$('#popup').click(function(){

		var wid = $('#popup').attr('data-width');
		var hei = $('#popup').attr('data-height');
		$(this).attr('href','');
		// 콘솔에 찍히는 것을 확인하기 위해 이동하는 href 속성을 지워버림
		console.log(wid);
		console.log(hei);
		// data 속성도 콘솔 로그에 잘 찍히는지 확인하기 위함
	});

});
