let express = require('express'); //
let http = require('http');
let app = express();
let server = http.createServer(app).listen(80);
//80번 포트에서 서버 리퀘스 리스닝
//기본 http와 포트번호 구축
let bodyParser = require('body-parser')
//POST방식으로 사용할때는 bodyParser를 임포트 해줌
app.use(bodyParser.json());
//application/josn 방식의 Content-Type 데이터를 받아준다
app.use(bodyParser.urlencoded({
  extended: false
}));
//application/x-www.form-urlencoded방식의
//Content-Type 데이터를 받아준다(jQuery.ajax의 기본 타입)
//extended 옵션을 false로 하면 내부에 쿼리스트링 라이브러리 사용
//true로 내부적으로 qs 라이브러리를 사용하여 URL-encoded data를 파싱
let mysql = require('mysql');
//데이터 베이스 연결 변수

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
});

connection.connect();
//실제 데이터 베이스의 계정과 테이블을 가져옴

app.get('/work1', function(req, res) {
  res.sendfile("work1.html");
});

app.get('/work2', function(req, res) {
  res.sendfile("work2.html");
});

app.get('/work3', function(req, res) {
  res.sendfile("work3.html");
});

app.get('/work4', function(req, res) {
  res.sendfile("work4.html");
});

app.post('/work4', function(req, res) {
  console.log(`INSERT INTO student (studentNo,studentName)
    VALUES ('${req.body.stuNo}', '${req.body.NAME}')`);
  connection.query(`INSERT INTO student (studentNo, studentName)
      VALUES ('${req.body.stuNo}', '${req.body.NAME}')`),
    function(error, results, fields) {
      res.send(results);

    };
});
