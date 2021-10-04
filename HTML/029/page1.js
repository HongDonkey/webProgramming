$(function(){

	$('p').click(function() {
		// $(this).append("hello");
		// 뒤쪽에 추가
		// $(this).prepend("hello");
		// 앞쪽에 추가
		$(this).html("hello");
		// p태그 내용을 전부 hello로 바꿈
	});

});
