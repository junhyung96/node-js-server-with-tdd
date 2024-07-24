// const express = require("express");
// const morgan = require("morgan");
// const app = express();

// ~ 미들웨어 추가 ~
// const logger = (res, req, next) => {
//     console.log('i am logger')
//     next()
// }

// const logger2 = (res, req, next) =>{
//     console.log('i am logger2')
//     next()
// }

// app.use(logger)
// app.use(logger2)
// app.use(morgan('dev'))
// ~ 미들웨어 추가 ~

// ~ 일반 미들웨어와 에러 미들웨어 ~
// const commonMW = (res, req, next) => {
//     console.log("commonmw");
//     next(new Error('error occured'));
// };

// const errorMW = (err, req, res, next) => {
//     // 에러를처리하거나
//     console.log(err.message)
//     next()
//     // 에러를 넘기거나
//     // next(err)
// }

// app.use(commonMW)
// app.use(errorMW)
// ~ 일반 미들웨어와 에러 미들웨어 ~

// app.listen(3000, () => {
//   console.log("Server is running");
// });

// express hello-world 코드

const express = require("express");
const morgan = require("morgan")
const app = express();
const port = 3000;

const users = [
    {id: 1, name: 'alice'},
    {id: 2, name: 'beily'},
    {id: 3, name: 'chris'},
]

app.use(morgan('dev'))

app.get("/users", (req, res) => {
  res.json(users)
});
// app.post("/users", (req, res) => {
//   // create users
//   res.send(user);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;