$(function() {

  $('div').click(function(event) {
    if ($(this).hasClass('on')) {
			//on 클래스를 가지고 있으면 왼쪽으로 움직여라
      $('div').animate({
        "left": "0px",
        "top": "0px"
      }, 500);
      $(this).removeClass('on');
			//on 클래스를 지워 아래 else문을 타게 해줌
    } else {
			//on 클래스가 없다면 가운데로 움직여라
      $('div').animate({
        "left": "300px",
        "top": "50px",
				"backgroundColor":"red"
      }, 500);
      $(this).addClass('on');
    }

		//첫번째 동작 실행시에는 on 클래스가 없기 때문에 가운데로 이동시키고 on클래스를 추가

  });

});
