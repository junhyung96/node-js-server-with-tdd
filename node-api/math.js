// 모듈 만들기

function sum(a, b){
    return a + b;
}

// 모듈로 등록하기
module.exports = {
    //sum 이라는 키에 sum 이라는 함수 등록
    sum: sum
};