let express = require('express');
let app = express();
let http = require('http');
let server = http.createServer(app).listen(80);
//80번 포트에서 서버 리퀘스 리스닝
//기본 http와 포트번호 구축
let bodyParser = require('body-parser')
//POST방식으로 사용할때는 bodyParser를 임포트 해줌

let mysql = require('mysql');
//데이터 베이스 연결 변수
const request = require('request'); //크롤링할 때 사용

let connection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: '1234',
  database: 'test'  // test라는 데이터베이스에 접속
});
app.use(bodyParser.json());
//application/josn 방식의 Content-Type 데이터를 받아준다
app.use(bodyParser.urlencoded({
  limit:'50mb'
  }));
//application/x-www.form-urlencoded방식의
//Content-Type 데이터를 받아준다(jQuery.ajax의 기본 타입)
//extended 옵션을 false로 하면 내부에 쿼리스트링 라이브러리 사용
//true로 내부적으로 qs 라이브러리를 사용하여 URL-encoded data를 파싱


app.get('/', function (req, res) {
  res.sendfile("main.html");
});

app.get('/getStock', function (req, res) {
  const pearlAbyss = {
    url:'https://polling.finance.naver.com/api/realtime?query=SERVICE_ITEM:263750|SERVICE_RECENT_ITEM:263750',
    method:'GET'
  }
  const samsung = {
    url:'https://polling.finance.naver.com/api/realtime?query=SERVICE_ITEM:005930|SERVICE_RECENT_ITEM:005930',
    method:'GET'
  }

  const ncsoft = {
    url:'https://polling.finance.naver.com/api/realtime?query=SERVICE_ITEM:036570|SERVICE_RECENT_ITEM:036570',
    method:'GET'
  }

request.get(pearlAbyss, function(error, response, body) {
    stockInfo = JSON.parse(response.body);
    console.log(stockInfo.result.areas[0].datas[0].nv);
    var pearlAbyssPrice = stockInfo.result.areas[0].datas[0].nv;


    // 쿼리 보내기
    connection.query(`INSERT INTO stock_pearlabyss (price) VALUES('${pearlAbyssPrice}');`)



request.get(samsung, function(error, response, body) {
    stockInfo = JSON.parse(response.body);
    console.log(stockInfo.result.areas[0].datas[0].nv);
    var samsungPrice = stockInfo.result.areas[0].datas[0].nv;


    // 쿼리 보내기
    connection.query(`INSERT INTO stock_samsung (price) VALUES('${samsungPrice}');`)

    request.get(ncsoft, function(error, response, body) {
        stockInfo = JSON.parse(response.body);
        console.log(stockInfo.result.areas[0].datas[0].nv);
        var ncsoftPrice = stockInfo.result.areas[0].datas[0].nv;


connection.query(`INSERT INTO stock_ncsoft (price) VALUES('${ncsoftPrice}');`)
    res.send({pearlAbyssPrice : pearlAbyssPrice,
    samsungPrice:samsungPrice,
  ncsoftPrice: ncsoftPrice})
  })
    });
});
})

app.get('/findprice', function (req, res) {
  console.log(req.query.stockDB);
  let stockDB = req.query.stockDB
  connection.query(`SELECT * FROM ${stockDB}`,
  function(error, result, fields){
    res.send(result)
    console.log(result);
  })
});
