let express = require('express'); //
let http = require('http');
let app = express();
let server = http.createServer(app).listen(80);
//80번 포트에서 서버 리퀘스 리스닝
//기본 http와 포트번호 구축

const ejs = require("ejs");
app.set('view engine', 'ejs');



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

app.get('/main', function(req, res) {
  res.sendfile("main.html");
});

app.get('/insertPage', function(req, res) {
  res.sendfile("insertPage.html");
});

app.post('/insertPage2', function(req, res) {
  console.log(`INSERT INTO student (studentNo, studentName, javascript, python, java)
    VALUES ('${req.body.stuNo}', '${req.body.stuName}', ${req.body.javascript}, ${req.body.python}, ${req.body.java})`);
  connection.query(`INSERT INTO student (studentNo, studentName, javascript, python, java)
      VALUES ('${req.body.stuNo}', '${req.body.stuName}', ${req.body.javascript}, ${req.body.python}, ${req.body.java})`,
    function(error, results, fields) {
      res.send("입력 성공");
    });
});

app.get('/listPage', function(req, res) {
  res.sendfile("listPage.html");
});

app.get('/listPage2', function(req, res) {
  console.log(req.query);
  connection.query(`SELECT * FROM student ORDER BY no`,
    function(error, results, fields) {

      res.send(results);
      console.log(results);
    });
});

app.delete('/deleteItemList', function(req, res) {
  let num = req.body.num;
  //html파일에서 넘어온 num을 재정의
  console.log(num);
  connection.query(`DELETE FROM student where NO =${num}`,
    //item 테이블의 NO의 값과 html에서 넘어온 num의 값이 같다면 삭제하라
    function(error, results, fields) {
      res.send(results);
      console.log(results);
    });
});

app.get('/updatePage', function(req, res) {
  res.sendfile("updatePage.html");
  // res.render('updateItem', {name:results[0].NAME,price:reuslts[0].PRICE})
});

app.get('/updatePage2', function(req, res) {
  let num = req.query.num;
  console.log(req.query);
  connection.query(`SELECT * FROM student WHERE NO = ${num}`,
    function(error, results, fields) {

      res.send(results);
      console.log(results);
    });
});

app.put('/updatepage3', function(req, res) {
  connection.query(`select * from item where (studentNo = '${req.body.stuNo}' or
  studentName = '${req.body.stuName}' or javascript = ${req.body.javascript} or
  python = ${req.body.python} or java = ${req.body.java})
  and no != ${req.body.num}`,
    function(error, results, fields) {

        console.log(`UPDATE student SET studentNo = '${req.body.stuNo}', studentName = '${req.body.stuName}',
        javascript = ${req.body.javascript}, python = ${req.body.python}, java = ${req.body.java}
        WHERE no = ${req.body.num}`);
        connection.query(`UPDATE student SET studentNo = '${req.body.stuNo}', studentName = '${req.body.stuName}',
        javascript = ${req.body.javascript}, python = ${req.body.python}, java = ${req.body.java}
        WHERE no = ${req.body.num}`,
          function(error, results, fields) {
            res.send(results);
          })

      })
    });

    app.get('/topClass', function(req, res) {
      console.log(req.query);
      connection.query(`SELECT * FROM student ORDER BY no`,
        function(error, results, fields) {

          res.send(results);
          console.log(results);
        });
    });
