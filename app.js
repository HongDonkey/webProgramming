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

app.get('/', function(req, res) {
  res.send([10, 20, 30]);
});

app.get('/test2', function(req, res) {
  res.send("hello world2");
});

app.get('/testHtml', function(req, res) {
  res.sendfile("210304/test.html");
});

app.get('/signUp', function(req, res) {
  res.sendfile("210311/회원가입.html");
});

app.get('/write', function(req, res) {
  res.sendfile("210311/글쓰기.html");
});

app.get('/table', function(req, res) {
  res.sendfile("210311/table.html");
});

app.get('/resume', function(req, res) {
  res.sendfile("210311/이력서.html");
});

app.get('/css', function(req, res) {
  res.sendfile("210311/css.html");
});


app.get('/form', function(req, res) {
  res.sendfile("210318/form.html");
});




app.get('/form1', function(req, res) {
  res.sendfile("210318/form1.html");
});


app.get('/getStudent', function(req, res) {
  console.log(req.query);
  connection.query(`SELECT no, studentNo, NAME FROM student WHERE no=${req.query.abc}`,
    function(error, results, fields) {
      res.send(results);

    });
});

app.get('/postStudent', function(req, res) {
  res.sendfile("210325/news/post.html");
});


app.post('/postStudent', function(req, res) {
  console.log(`INSERT INTO student (studentNo, NAME, AGE)
    VALUES ('${req.body.stuNo}', '${req.body.NAME}', ${req.body.AGE})`);
  connection.query(`INSERT INTO student (studentNo, NAME, AGE)
      VALUES ('${req.body.stuNo}', '${req.body.NAME}', ${req.body.AGE})`,
    function(error, results, fields) {
      res.send(results);

    });
});

app.get('/0401test', function(req, res) {
  res.sendfile("210401/0401test.html");
});

app.get('/0401test2', function(req, res) {
  res.sendfile("210401/0401test2.html");
});

app.get('/star', function(req, res) {
  res.sendfile("210401/star.html");
});


app.get('/postNews', function(req, res) {
  res.sendfile("210409/postNews.html");
});

app.get('/getNews', function(req, res) {
  connection.query(`select * from news`,
    function(error, results, fileds) {
      if (error) console.log(error);
      res.send(results);
    })
});



app.post('/postNews', function(req, res) {
  console.log(req.body.title, req.body.content);
  let title = req.body.title;
  let content = req.body.content;

  connection.query(`INSERT INTO news (title, content)
      VALUES ('${title}', '${content}')`,
    function(error, results, fields) {
      if (error) console.log(error)
      res.send(results);
    });
});

app.get('/multiple', function(req, res) {
  res.sendfile("210409/multiple.html");
});


app.post('/multiple', function(req, res) {
  console.log(req.body.num1, req.body.num2);
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let result = req.body.result;

});
app.get('/multipleRadio', function(req, res) {
  res.sendfile("210409/multipleRadio.html");
});

app.post('/multipleRadio', function(req, res) {
  console.log(req.body.num1, req.body.num2);
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let result = req.body.result;

});


app.get('/pracPostNews', function(req, res) {
  res.sendfile("210409/pracPostNews.html");
});

app.get('/pracGetNews', function(req, res) {
  connection.query(`select * from news`,
    function(error, results, fileds) {
      if (error) console.log(error);
      res.send(results);
    })
});



app.post('/pracPostNews', function(req, res) {
  console.log(req.body.title, req.body.content);
  let title = req.body.title;
  let content = req.body.content;

  connection.query(`INSERT INTO news (title, content)
      VALUES ('${title}', '${content}')`,
    function(error, results, fields) {
      if (error) console.log(error)
      res.send(results);
    });
});
