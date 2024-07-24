const app = require("./index");
const request = require("supertest");

describe("GET /users는 ", () => {
  // api 서버가 비동기로 이루어지므로
  // 비동기 처리를해야함 done 콜백함수 사용
  it("...", (done) => {
    request(app)
      .get("/users")
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});
