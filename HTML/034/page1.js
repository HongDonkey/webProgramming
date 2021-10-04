$(function(){

	var fsize = 12;

	$('.plus').click(function(){
		fsize++;
		$('body').css({"font-size":fsize});
		// 여러 css 변화를 주려면 중괄호로 묶어서 오브젝트화 시킴
		// $('body').css('width', 100);
		// 하나만 고정적으로 변경해주고 싶을 때는 위처럼 함
	});

	$('.minus').click(function(){
		fsize--;
		$('body').css({"font-size":fsize});
	});

});

var arr =[]; // 배열 초기화 방법
var tyty = {}; // 오브젝트 초기화 방법

arr[0] = 11;
arr.push(22);
console.log(arr); // 11,22를 가진 배열이 출력

var tyty = {
	'abc' : 11,
	'ddd' : 123
};
// tyty 오브젝트에 키와 밸류를 추가하는 방법1
tyty['sdfsdf']  = 'sdfsdf'
tyty['apple'] = true;
// tyty 오브젝트에 키와 밸류를 추가하는 방법2
console.log(tyty); // key, value 형태의 오브젝트 출력

tyty['c_function'] = function () { //함수 지정
	alert(1);
}

console.log(tyty); // 오브젝트에 함수가 추가되어 출력

tyty['c_function'](); // 함수 실행
