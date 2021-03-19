let express = require('express');
let http = require('http');
let app = express();

//80번 포트에서 서버 리퀘스 리스닝
let server = http.createServer(app).listen(80);

let mysql = require('mysql');


let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
});

connection.connect();


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


app.get('/testdb', function(req, res) {
  console.log(`SELECT no, studentNo, NAME FROM student WHERE no=${req.query.no}`);
    connection.query(`SELECT no, studentNo, NAME FROM student WHERE no=${req.query.no}`,
      function(error, results, fields) {
            res.send(results);

      });
  });
