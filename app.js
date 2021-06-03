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
  connection.query(`SELECT no, studentNo, NAME, AGE FROM student WHERE no=${req.query.abc}`,
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
app.get('/pracHome', function(req, res) {
  res.sendfile("210401/pracHome.html");
});

app.get('/multiple', function(req, res) {
  res.sendfile("210409/multiple.html");
});
app.get('/multipleradio', function(req, res) {
  res.sendfile("210409/multipleradio.html");
});

app.get('/multipleprac', function(req, res) {
  res.sendfile("210409/multiplePrac.html");
});

app.get('/arr', function(req, res) {
  res.sendfile("210416/arr.html");
});

app.get('/arr2', function(req, res) {
  res.sendfile("210422/arr2.html");
});
app.get('/sum', function(req, res) {
  res.sendfile("210422/sum.html");
});
app.get('/what', function(req, res) {
  res.sendfile("210422/what.html");
});

app.get('/buyitem', function(req, res) {
  res.sendfile("210514/buyitem.html");
});
app.get('/maxPrice', function(req, res) {
  let price = Number(req.query.price) // buyItem.html의 ajax url정보를 정수형으로 가져옴
  console.log(price);
  priceDict = [{
      name: "item1",
      price: 1000
    },
    {
      name: "itemm2",
      price: 5000
    },
    {
      name: "itemmm3",
      price: 10000
    },
    {
      name: "iteem4",
      price: 30000
    },
    {
      name: "itttem5",
      price: 50000
    },
    {
      name: "iiiitem6",
      price: 100000
    },
    {
      name: "iteem7",
      price: 500000
    }
  ] // item의 이름정보와 가격을 배열에 넣음
  if (price < 1000) { // 보유금액이 천원보다 작다면
    let alertMent = "구매 불가"; //가장 싼 item1도 살 수 없기 떄문에 "구매불가"를 출력함
    res.send(alertMent); //"구매불가"를 응답으로 보냄
  } else if (price >= 1000) { // 보유금액이 천원보다 같거나 크다면
    for (let i = 6; i >= 0; i--) {
      if (priceDict[i].price <= price) { // 보유금액이 가격 배열의 i번째 값보다 크다면
        let alertMent = (priceDict[i].name); // priceDict의 이름을 변수에 담음
        res.send(alertMent); // item순번을 응답으로 보냄
        break;
      }
    }
  }
});

// let priceDict = [{name:"item1",price:1000},
// {name:"itemm2",price:5000},
// {name:"itemmm3",price:10000},
// {name:"iteem4",price:30000},
// {name:"itttem5",price:50000},
// {name:"iiiitem6",price:100000},
// {name:"iteem7",price:500000}];
// //
// for(let i = 0; i < priceDict.length; i++){
//   connection.query(`INSERT INTO item(NAME, PRICE) VALUES ("${priceDict[i].name}", ${priceDict[i].price})`)
// }
//딕셔너리를 for문으로 테이블에 삽입함

app.get('/insertItem', function(req, res) {
  res.sendfile("210514/insertItem.html");
});

app.post('/insertItem2', function(req, res) {

  let itemName = `${req.body.NAME}`;
  let itemPrice = `${req.body.PRICE}`;
  // connection.query(`INSERT INTO item (NAME, PRICE)
  // VALUES ('${req.body.NAME}', ${req.body.PRICE})`,
  connection.query(`select * from item where NAME = '${itemName}' or PRICE = ${itemPrice}`,
    function(error, results, fields) {
      // res.send(results);
      console.log(results);
      console.log(itemName);
      //이름, 가격이 하나라도 겹치지 않으면 입력
      if (results.length == 0) {
        console.log(results.length);
        connection.query(`INSERT INTO item (NAME, PRICE) VALUES ('${itemName}',${itemPrice})`);
        let alertment = '입력 성공.'
        res.send(alertment);
      }


      //results는 배열의 형태로 출력되고 이름이 같거나 가격이 같으면
      //배열이 2개 이상 출력되기 때문에 results.length가 2 이상인 경우를 구해준다.
      if (results.length >= 2) {
        let alertment = '동일한 이름, 가격이 각각 존재합니다.(2개)'
        res.send(alertment);
      } else if (results.length == 1) {
        //이름, 가격이 모두 같은경우
        if (results[0].NAME == `${itemName}` && results[0].PRICE == `${itemPrice}`) {
          let alertment = '동일한 이름, 가격을 가진 아이템이 존재합니다.'
          res.send(alertment);
        }
        //이름만 같은 경우
        if (results[0].NAME == `${itemName}`) {
          let alertment = '동일한 이름을 가진 아이템이 존재합니다.'
          res.send(alertment);
        }
        //가격이 같은 경우
        if (results[0].PRICE == `${itemPrice}`) {
          let alertment = '동일한 가격을 가진 아이템이 존재합니다.'
          res.send(alertment);
        }
      }

    });
});

app.get('/buyItemDB', function(req, res) {
  console.log(req.query);
  let price = Number(req.query.price)
  connection.query(`SELECT NAME, PRICE FROM item`,
    //쿼리문을 통해서 가져온 item테이블이 결과 값이기 때문에
    function(error, results, fields) {
      res.send(results);
      //result 변수에 담
      if (price < 1000) { // 보유금액이 천원보다 작다면
        let alertMent = "구매 불가"; //가장 싼 item1도 살 수 없기 떄문에 "구매불가"를 출력함
        res.send(alertMent); //"구매불가"를 응답으로 보냄
      } else if (price >= 1000) { // 보유금액이 천원보다 같거나 크다면
        for (let i = 6; i >= 0; i--) {
          if (results[i].price <= price) { // 보유금액이 가격 배열의 i번째 값보다 크다면
            let alertMent = (results[i].name); // priceDict의 이름을 변수에 담음
            res.send(alertMent); // item순번을 응답으로 보냄
            break;
          }
        }
      }

    });
});

app.get('/pracItem', function(req, res) {
  res.sendfile("210515/pracItem.html");
});

app.get('/iitem', function(req, res) {
  let price = Number(req.query.price) // buyItem.html의 ajax url정보를 정수형으로 가져옴
  console.log(price);
  priceDict = [{
      name: "item1",
      price: 1000
    },
    {
      name: "itemm2",
      price: 5000
    },
    {
      name: "itemmm3",
      price: 10000
    },
    {
      name: "iteem4",
      price: 30000
    },
    {
      name: "itttem5",
      price: 50000
    },
    {
      name: "iiiitem6",
      price: 100000
    },
    {
      name: "iteem7",
      price: 500000
    }
  ]

  if (price < priceDict[0].price) {
    let alertMent = "구매불가"
    res.send(alertMent);
  }

  for (let i = 6; i >= 0; i--) {
    if (price >= priceDict[i].price) {
      let alertMent = priceDict[i].name;
      res.send(alertMent);
      break;

    }
  }
});


// let priceDict = [{
//     name: "item1",
//     price: 1000
//   },
//   {
//     name: "itemm2",
//     price: 5000
//   },
//   {
//     name: "itemmm3",
//     price: 10000
//   },
//   {
//     name: "iteem4",
//     price: 30000
//   },
//   {
//     name: "itttem5",
//     price: 50000
//   },
//   {
//     name: "iiiitem6",
//     price: 100000
//   },
//   {
//     name: "iteem7",
//     price: 500000
//   }
// ]
//
// for (let i = 0; i < priceDict.length; i++) {
//   connection.query(`INSERT INTO item (Name, Price)
//       VALUES ('${priceDict[i].name}', ${priceDict[i].price})`)
//   }

app.get('/pracItemDB', function(req, res) {
  res.sendfile("210515/pracItemDB.html");
});

app.get('/pracItemDB', function(req, res) {
  console.log(req.query);
  let price = Number(req.query.price)
  connection.query(`SELECT NAME, PRICE FROM item`,
    function(error, results, fields) {
      res.send(results);

      if (results[0] > price) {
        let alertMent = "구매불가"
        res.send(alertMent);
      }
      for (let i = 6; i >= 0; i--) {
        if (results[i] <= price) {
          let alertMent = results[i].name;
          res.send(alertMent);
          break;
        }
      }
    })
});

app.get('/insertMain', function(req, res) {
  res.sendfile("210520/insertMain.html");
});

app.get('/chkItem', function(req, res) {
  console.log(req.query);
  let price = Number(req.query.price)
  connection.query(`SELECT * FROM item ORDER BY PRICE`,
    //쿼리문을 통해서 가져온 item테이블이 결과 값이기 때문에
    function(error, results, fields) {
      // res.send(results);
      //result 변수에 담
      if (price < 1000) { // 보유금액이 천원보다 작다면
        let alertMent = "구매 불가"; //가장 싼 item1도 살 수 없기 떄문에 "구매불가"를 출력함
        res.send(alertMent); //"구매불가"를 응답으로 보냄
      } else if (price >= 1000) { // 보유금액이 천원보다 같거나 크다면
        for (let i = results.length - 1; i >= 0; i--) {
          if (results[i].PRICE <= price) { // 보유금액이 가격 배열의 i번째 값보다 크다면
            let alertMent = (results[i].NAME); // priceDict의 이름을 변수에 담음
            res.send(alertMent); // item순번을 응답으로 보냄
            break;
          }
        }
      }

    });
});

app.get('/addDB', function(req, res) {
  res.sendfile("210522HOME/addDB.html");
});


app.get('/getList', function(req, res) {
  res.sendfile("210528/getList.html");
});

app.get('/getItemList', function(req, res) {
  console.log(req.query);
  connection.query(`SELECT * FROM item ORDER BY PRICE`,
    function(error, results, fields) {

      res.send(results);
      console.log(results);
    });
});

app.delete('/deleteItemList', function(req, res) {
  let num = req.body.num;
  //html파일에서 넘어온 num을 재정의
  console.log(num);
  connection.query(`DELETE FROM item where NO =${num}`,
    //item 테이블의 NO의 값과 html에서 넘어온 num의 값이 같다면 삭제하라
    function(error, results, fields) {
      res.send(results);
      console.log(results);
    });
});

app.get('/updateItem2', function(req, res) {
  res.sendfile("210603/updateItem.html");
  // res.render('updateItem', {name:results[0].NAME,price:reuslts[0].PRICE})
});

app.get('/updateItem', function(req, res) {
  let num = req.query.num;
  console.log(req.query);
  connection.query(`SELECT * FROM item WHERE NO = ${num}`,
    function(error, results, fields) {

      res.send(results);
      console.log(results);
    });
});


app.put('/insertItem3', function(req, res) {
  let num = req.body.num;
  let name = req.body.name;
  let price = req.body.price;
  connection.query(`select * from item where (NAME = '${name}' or PRICE = ${price})
  and NO != ${num}`,
    function(error, results, fields) {
      if (results.length == 0) {
        console.log(`UPDATE item SET NAME = '${name}', PRICE = ${price} WHERE NO = ${num}`);
        connection.query(`UPDATE item SET NAME = '${name}', PRICE = ${price} WHERE NO = ${num}`,
          function(error, results, fields) {
            let alertment = '입력 성공.'
            res.send(alertment);
          })
      }

      //results는 배열의 형태로 출력되고 이름이 같거나 가격이 같으면
      //배열이 2개 이상 출력되기 때문에 results.length가 2 이상인 경우를 구해준다.
      if (results.length >= 2) {
        let alertment = '동일한 이름, 가격이 각각 존재합니다.(2개)'
        res.send(alertment);
      } else if (results.length == 1) {
        //이름, 가격이 모두 같은경우
        if (results[0].NAME == `${name}` && results[0].PRICE == `${price}`) {
          let alertment = '동일한 이름, 가격을 가진 아이템이 존재합니다.'
          res.send(alertment);
        }
        //이름만 같은 경우
        if (results[0].NAME == `${name}`) {
          let alertment = '동일한 이름을 가진 아이템이 존재합니다.'
          res.send(alertment);
        }
        //가격이 같은 경우
        if (results[0].PRICE == `${price}`) {
          let alertment = '동일한 가격을 가진 아이템이 존재합니다.'
          res.send(alertment);
        }
      }

    });
});
