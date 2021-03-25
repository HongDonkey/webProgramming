let express = require('express');
let http = require('http');
let app = express();

let bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
let server = http.createServer(app).listen(80);
let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
});

connection.connect();


app.get('/pracPost', function(req, res) {
  res.sendfile("210325/news/pracPost.html");
});


app.post('/pracPost', function(req, res) {
  console.log(`INSERT INTO news (title, content)
    VALUES ('${req.body.title}', '${req.body.content}')`);
  connection.query(`INSERT INTO news (title, content)
      VALUES ('${req.body.title}', '${req.body.content}')`,
    function(error, results, fields) {
      if (error) {
        res.send("not ok");
      }
      else if(results.affectedRows==1) {  //affectedRows ==1 : 1줄씩 행에 삽입하라
        res.send("ok");
      }
    });
});

app.get('/if', function(req, res) {
  res.sendfile("210325/if.html");
});
