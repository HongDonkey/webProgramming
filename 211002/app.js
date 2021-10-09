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

let nicknames = []

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
  //__dirname - 현재 위치라는 뜻
  // res.sendFile('chat.html')  - 이거랑 같은 뜻
});
//emit - 서버와 html로 보낼때
//on - 서버와 html에서 오는 emit을 받을 떄
io.on('connection', (socket) => {
  //기본적으로 제공하는 소켓에 유저가 접속을 했을때 아래 문장 출력

  socket.on('disconnect', () => {
    //연결이 끊어지면(로그아웃) nicknames배열에서 연결이 끊어진 소켓의 아이디를 지운다
    //결과적으로 nicknames 배열은 현재 접속중인 nickname과 socketID값을 갖는다
    console.log('user disconnected', socket.id);
    for(let i=0; i<nicknames.length; i++){
      if(nicknames[i].socketID == socket.id){
        nicknames.splice(i,1)
        //nicknames 배열에서 i번째 하나만 지운다
      }
    }
    console.log('a user connected',nicknames);
  });

  socket.on('send message', (msg) => {
    let nickname = ""
    for(let i=0;i<nicknames.length; i++){
      if(nicknames[i].socketID == socket.id){
        nickname = nicknames[i].nickname
      }
    }
    io.emit('get message', {msg: msg, nickname: nickname})
  });

  socket.on('login', (nickname) => {
    console.log(nickname, socket.id);
    //로그인하면 nicknames 배열에 nickname과  socketID를 추가
    let nicknameExist = false
    for(let i=0;i<nicknames.length;i++){
      if(nicknames[i].nickname == nickname){
        nicknameExist = true
        break;
      }
    }
    if(nicknameExist) {
      socket.emit('loginFail')
      console.log('fail');
    } else {
      nicknames.push({nickname: nickname, socketID: socket.id})
      socket.emit('loginSuccess')
      console.log('success');
    }

    console.log(nicknames);
  });
});
