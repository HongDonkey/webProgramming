let express = require('express'); //
let http = require('http');
let app = express();
let server = http.createServer(app).listen(80);
//80번 포트에서 서버 리퀘스 리스닝
//기본 http와 포트번호 구축
const {
  Server
} = require("socket.io");
const io = new Server(server);

// app.get('/', (req,res) => {
//   res.send('<h1>Hello World!</h1>')
// })

// server.listen(80, () => {
//   console.log('listening on *:3000');
// })

let users = []

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
  //__dirname - 현재 위치라는 뜻
  // res.sendFile('chat.html')  - 이거랑 같은 뜻
});

io.on('connection', (socket) => {
  //기본적으로 제공하는 소켓에 유저가 접속을 했을때 아래 문장 출력
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('send message', (msg) => {
    console.log('send message: ' + msg);
    io.emit('get mesage', msg)
  });
});


app.get('/login', (req, res) => {
  console.log(req.query.nickname);

  let nickname = req.query.nickname
  users.push(nickname)

  for (let i = 0; i < users.length; i++) {
    if (users[i] == users[-1]) {
      users.pop(nickname)
      res.send("no")
  } else {
    console.log(users);
    res.send("ok")
  }
}




  //중복 안되면 커넥션 중복되면 디스커넥션

});
