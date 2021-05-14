
let mysql = require('mysql');
//데이터 베이스 연결 변수

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
});

connection.connect();


priceDict = [{name:"item1",price:1000},
{name:"itemm2",price:5000},
{name:"itemmm3",price:10000},
{name:"iteem4",price:30000},
{name:"itttem5",price:50000},
{name:"iiiitem6",price:100000},
{name:"iteem7",price:500000}]


for(let i = 0; i < priceDict.length; i++){
  connection.query(`INSERT INTO item(NAME, PRICE) VALUES ("${priceDict[i].name}", ${priceDict[i].price})`)
}

for(let i=0;i<10;i++) {
  console.log(a.a);
}
