// -----------------------------------------------------
// 스코프(Scope)
// - 코드 영역(범위)
// - 전역(전체 영역: global scope)
// - 지역(일부 영역: local scope)
//
// 호이스트(Hoist)
// - 무엇을 끌어올리나?
// - [ 함수 선언 ]을 [ 코드 작성 영역의 가장 상단 ]으로 끌어올린다.
// -----------------------------------------------------

// 호이스트(Function Hoist)
// 선언된 함수는 코드를 작성하는 영역의 가장 상위로 끌어올려진 것처럼 작동된다.
// 함수();

// // 함수 선언(Function Declaration)
// function 함수() {
//   console.log('함수가 실행되었어요!');
// }

// // var 변수 선언은
// console.log(마이네임); // error? log?
// var 마이네임 = '야무';

// // var 변수 선언은 마치 끌어올려진 것처럼 보이는데
// // 선언부만 끌어올려진 것처럼 작동한다.
// var 마이네임; // undefined

// console.log(마이네임);

// 마이네임 = '야무';

/* -------------------------------------------------------------------------- */
/* Let 변수, Const 상수 선언 호이스트 현상이 일어날까? - 아니오!         
/* -------------------------------------------------------------------------- */

// console.log(1, 마이네임); // ERROR? or Log?

// // let 변수 선언
// // let 마이네임 = '야무'

// // const 상수 선언
// const 마이네임 = '야무';

// console.log(2, 마이네임);

// 호이스팅 현상을 잘 이용하면 코드의 실행 흐름을 깔끔하게 유추할 수 있다.
// 코드 흐름 먼저 작성
// startGame();
// movePlayer();
// endGame();

// // ...

// // 함수들은 파일 맨 끝에 배치합니다.
// function startGame() {
//   // ...
// }

// function movePlayer() {
//   // ...
// }

// function endGame() {
//   // ...
// }

// --------------------------------------------------------------------------
//  함수 만드는 2가지 방법
// --------------------------------------------------------------------------
// 1. 함수 선언 (Function Dclaration)
// 2. 함수 표현식 (Function Expression)
// --------------------------------------------------------------------------
// 변수 선언

// 함수 선언
function look(who) {
  console.log(who + '를(을) 보다');
}
// 함수 선언, 함수 표현식 그리고 호이스트 현상 비교

// 보다('공무원님')
// look('선생님')

// var 보다 // [ undefined ]
// console.log(보다) // undefined

// 보다('형사님') // undefined() ❌

// 함수 (표현)식
// 자바스크립트는 함수를 값(value)으로 취급
// let 변수 = 값 (할당)
// let 보다 = 'see' // string
// let 보다 = 1001 // number
// let 보다 = true // boolean
// let 변수 = 함수
let 보다 = function (누구) {
  console.log(누구 + '를(을) 보다');
};

// 함수 작성법은 2개 비교
// 1. 함수 선언 (function 키워드로 시작, 호이스트 현상 ✅)
// 2. 함수 표현식 (변수에 함수 값을 할당, JS는 함수를 값으로 취급 / 호이스트 현상 ❌)

// let myFunction = function () {
//   console.log('this is a mine function name')
// }

// myFunction()

function logger(logMessage) {
  console.log('로그 메시지: ', logMessage);
}
logger('실습을 통한 연습은 언제나 옳습니다.');

function pxToRem(px) {
  let rem = px / 16;
  return rem + 'rem';
}
console.log(pxToRem(24));

function remToPx(rem) {
  let px = 16 * rem;
  return px + 'px';
}
console.log(remToPx(1.5));
