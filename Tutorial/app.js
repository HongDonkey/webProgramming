let express = require('express'); //
let http = require('http');
let app = express();
let server = http.createServer(app).listen(80);
//80번 포트에서 서버 리퀘스 리스닝
//기본 http와 포트번호 구축

const iconv = require('iconv-lite') // 인코딩을 변환해주는 모듈
const charset = require('charset') // 해당 사이트의 charset값을 알려준다
const ejs = require("ejs");
app.set('view engine', 'ejs');

const request = require('request'); //크롤링할 때 사용
const cheerio = require('cheerio'); //크롤링할 때 태그별로 나눠줌

let bodyParser = require('body-parser')
//POST방식으로 사용할때는 bodyParser를 임포트 해줌
app.use(bodyParser.json());
//application/josn 방식의 Content-Type 데이터를 받아준다
app.use(bodyParser.urlencoded({
  limit:'50mb'
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

// app.get('/', function(req, res) {
//   res.send([10, 20, 30]);
// });

const exceljs = require('exceljs');
//엑셀 파일을 만들기 위한 라이브러리 임포트

var fs = require('fs')
//node.js에서 기본 제공하는 filesystem

app.get('/test2', function(req, res) {
  res.send("hello world2");
});

app.get('/for', function(req, res) {
  res.sendfile(__dirname + '/for.html');
});

app.get('/lotto', function(req, res) {
  res.sendfile(__dirname + '/lotto.html');
});

app.get('/double', function(req, res) {
  res.sendfile(__dirname + '/double_for.html');
});
