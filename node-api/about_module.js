// 모듈

// http 모듈 사용
// const http = require('http');

// 이후엔 http 모듈의 기능을 사용할 수 있음
// http.createServer();

// 모듈 만들어서 사용
// const math = require('./math');

// const result = math.sum(1, 3);

// console.log(result);
// $ node index.js
// 4


// 비동기 

// FileSystem 모듈
// readFile vs readFileSync

const fs = require('fs')
// 동기
// const data = fs.readFileSync('./data.txt', 'utf8')
// console.log(data)
// 비동기 - 파일을 다 읽었다는 이벤트가 발생하면 콜백함수 동작
const data = fs.readFile('./data.txt', 'utf8', function(err, data) {
    // 파일을 다 읽으면 data가 
    // 파일을 다 읽지 못한 경우엔 err가 반환
    console.log(data)
})

