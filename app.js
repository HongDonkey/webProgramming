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

const fs = require('fs'); //텍스트 파일을 읽고 쓰기 위해 사용

const axios = require('axios');
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

const stoneage = 'http://saforever.net/pet';




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

app.get('/main', function(req, res) {
  res.sendfile("210819/main.html");
  // res.render('updateItem', {name:results[0].NAME,price:reuslts[0].PRICE})
});

app.get('/001', function(req, res) {
  res.sendfile("HTML/001/html5.html");
  // res.render('updateItem', {name:results[0].NAME,price:reuslts[0].PRICE})
});

app.get('/newsList', function(req, res) {
  res.sendfile("210826/newsList.html");
});
app.get('/getNewsList', function(req, res) {
  console.log(req.query);
  connection.query(`SELECT * FROM newslist `,
    function(error, results, fields) {

      res.send(results);
      console.log(results);
    });
});



app.get('/insertNews', function(req, res) {
  res.sendfile("210826/insertnews.html");
});

app.get('/updateNews', function(req, res) {
  res.sendfile("210826/updateNews.html");
});

app.post('/postNews', function(req, res) {
  console.log(`INSERT INTO newsList (title, contents)
    VALUES ('${req.body.title}', '${req.body.contents}')`);
  connection.query(`INSERT INTO newsList (title, contents)
    VALUES ('${req.body.title}', '${req.body.contents}')`,
    function(error, results, fields) {
      res.send(results);
    });
});

app.delete('/deleteNews', function(req, res) {
  console.log(`DELETE FROM newslist WHERE index = ${req.body.index}`);
  connection.query(`DELETE FROM newslist WHERE index = ${req.body.index}`),
    function(error, result, fields) {
      res.send(result);
    };
});

app.get('/getNews', function(req, res) {
  console.log(req.query.index);
  res.send("ok");
  connection.query(`SELECT * FROM newslist WHERE ('${req.query.index}')`),
    function(error, result, fields) {
      res.send(result);
    };
});


app.put('/updateNews', function(req, res) {
  connection.query(`update newslist set title='${req.body.title}', content='${req.body.content}' WHERE index = ${req.body.index};`,
    function(err, rows, fields) {
      if (err) {
        res.send({
          statusCode: 400,
          msg: "에러입니다."
        });
      }
      if (rows.affectedRows == 1) {
        res.send({
          statusCode: 200,
          msg: "수정되었습니다."
        });
      } else {
        res.send({
          statusCode: 400,
          msg: "에러입니다."
        });
      }
    });
});


app.get('/', function(req, res) {
  res.sendfile("210902/main.html");
});

app.get('/stockPage', function(req, res) {
  res.sendfile("210902/stock.html");
});

app.get('/stockPrice', function(req, res) {
  request(`https://polling.finance.naver.com/api/realtime?query=SERVICE_ITEM:263750|SERVICE_RECENT_ITEM:263750`, function(error, response, body) {
    // let stockInfo = body.split("(")[1].slice(0, -1)

    stockInfo = JSON.parse(response.body);
      // console.log(stockInfo.result.areas[0].datas[0]);
    console.log(stockInfo.result.areas[0].datas[0].nv);
    res.send({
      price: stockInfo.result.areas[0].datas[0].nv,
      // stockInfo: stockInfo.result.areas[0].datas[0].nm
    })
  });
});

app.get('/stockGraph', function(req, res) {
  res.sendfile("210909/stockGraph.html");
});

app.get('/menu', function(req, res) {
  res.sendfile("210909/menu.html");
});

app.get('/getMenu', function(req, res) {
  request(`https://www.kopo.ac.kr/kangseo/content.do?menu=262`,
    function(error, response, body) {
      const $ = cheerio.load(body)
      let menuArr = [];
      // let dayArr = [];
      let tdTags = $("td")
      for(let i=0;i<5;i++) {
        // dayArr.push(tdTags[i * 4].children[2].data)
        menuArr.push(tdTags[i*4+2].children[1].children[0].data) //식단표를 반복해서 구하기
      }
      // console.log(dayArr);
      console.log(menuArr);
      // console.log(error);
      res.send({
        // day: dayArr,
        menuArr: menuArr
      })
    })
});

app.get('/day', function(req, res) {
  res.sendfile("210909/day.html");
});

app.get('/getDay', function(req, res) {
  request(`https://www.kopo.ac.kr/kangseo/content.do?menu=262`,
    function(error, response, body) {
      const $ = cheerio.load(body)
      let menuArr = [];
      let tdTags = $("td")
        // tdTags = tdTags[0].children[2].data
        // tdTags[0].children[0] // document.write(getDay2('2021-09-13 00:00:00.0'));
        day = tdTags[4].children[2].data // 식단표의 요일정보
      console.log(day);
      res.send({
        data: day
      })
    })
});

app.post('/makeExcelFile', function(req,res) {

  let reqParam = JSON.parse(req.body.reqParam)
  let allDailyMenuArr = reqParam.allDailyMenuArr
  let dailyScore = reqParam.dailyScore
  const wb = new exceljs.Workbook();
  const ws = wb.addWorksheet('menu');
  console.log(allDailyMenuArr);
  console.log(allDailyMenuArr[0]);
  console.log(allDailyMenuArr[0][0]);
  console.log(dailyScore)
  ws.getCell('A1').value = '월'
  ws.getCell('C1').value = '화'
  ws.getCell('E1').value = '수'
  ws.getCell('G1').value = '목'
  ws.getCell('I1').value = '금'

  for(let i=0;i<allDailyMenuArr.length;i++){
    let dayMenu = allDailyMenuArr[i];

    for(let j=0;j<dayMenu.length;j++){
      let menu = dayMenu[j];
      if(i==0){
        ws.getCell('A' + (j+2)).value = menu;
        ws.getCell('B' + (j+2)).value = dailyScore[i][j];
      }
      if(i==1){
        ws.getCell('C' + (j+2)).value = menu;
        ws.getCell('D' + (j+2)).value = dailyScore[i][j];
      }
      if(i==2){
        ws.getCell('E' + (j+2)).value = menu;
        ws.getCell('F' + (j+2)).value = dailyScore[i][j];
      }
      if(i==3){
        ws.getCell('G' + (j+2)).value = menu;
        ws.getCell('H' + (j+2)).value = dailyScore[i][j];
      }
      if(i==4){
        ws.getCell('I' + (j+2)).value = menu;
        ws.getCell('J' + (j+2)).value = dailyScore[i][j];
      }
    }
    let avg = 0;
    for(let j=0;j<dayMenu.length;j++){
      avg += dailyScore[i][j]
    }
    avg /= dailyScore[i].length
    if(i==0){
      ws.getCell('A' + (dayMenu.length+3)).value = '평균'
      ws.getCell('B' + (dayMenu.length+3)).value = avg
    }
    if(i==1){
      ws.getCell('C' + (dayMenu.length+3)).value = '평균'
      ws.getCell('D' + (dayMenu.length+3)).value = avg
    }
    if(i==2){
      ws.getCell('E' + (dayMenu.length+3)).value = '평균'
      ws.getCell('F' + (dayMenu.length+3)).value = avg
    }
    if(i==3){
      ws.getCell('G' + (dayMenu.length+3)).value = '평균'
      ws.getCell('H' + (dayMenu.length+3)).value = avg
    }
    if(i==4){
      ws.getCell('I' + (dayMenu.length+3)).value = '평균'
      ws.getCell('J' + (dayMenu.length+3)).value = avg
    }
  }
  // ws.getCell('A1').value = allDailyMenuArr
  // ws.getCell('B2').value = dailyScore

  wb.xlsx.writeFile('menu.xlsx').then(function(){
    res.send({msg : "file made"})
  })

})

app.get('/downloadExcelFile', function(req,res) {
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  res.setHeader('Content-Disposition', 'attachment; filename=menu.xlsx')
  res.sendfile(__dirname + '/menu.xlsx', function(err){

    fs.unlinkSync(__dirname + '/menu.xlsx')
  })

})
