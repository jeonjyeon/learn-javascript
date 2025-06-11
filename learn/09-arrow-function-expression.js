// --------------------------------------------------
// 화살표 함수 표현식 (Arrow Function Expression)
// --------------------------------------------------

// 함수 만드는 방법 3가지

// // 1. 함수 선언
// function showMeTheMoney() {
//   console.log('쇼미더머니');
// }
// showMeTheMoney();

// // 2. 함수 표현식
// let lookAtMe = function () {
//   console.log('룩앳미');
// };
// lookAtMe();

// // 3. 화살표 함수 표현식
// let readABook = (bookName) => {
//   console.log('"' + bookName + '"을 읽다.');
// };
// readABook('로미오와 줄리엣');


// --------------------------------------------------
// 화살표 함수 표현식 (Arrow Function Expression)
// --------------------------------------------------

// 1. 매개변수의 갯수
//    0개
// let readABook = () => {
//   console.log('책을 읽다.');
// };

// 매개변수를 사용하지 않을 경우, 관례적으로 밑줄(_)을 사용할 때도 있다.
// let readABook = _ => {
//   console.log('책을 읽다.');
// };

//    1개
// let readABook = (bookName) => {
//   console.log('"' + bookName + '"을 읽다.');
// };
// readABook('오만과 편견')

// 매개변수 1개면 소괄호 생략 가능
// let readABook = bookName => {
//   console.log('"' + bookName + '"을 읽다.');
// };
// readABook('오만과 편견')

//    2개 이상인 경우, 소괄호는 생략하지 않는다.
// let readABook = (bookName, day) => {
//   console.log(day+'일에 걸쳐서 '+'"' + bookName + '"을 읽다.');
// };
// readABook('오만과 편견', 21)



// 2. 암묵적 반환
//    return undefined (암묵적 반환, 기본 반환)
//    return 값 (명시적 반환)Add commentMore actions

const ROOT_FONT_SIZE = 16

// 함수 선언
// function px2rem(pxValue) {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 함수 표현식
// let px2rem = function (pxValue) {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 화살표 함수 표현식 변형 1 (기본 화살표 함수 표현식)
// let px2rem = (pxValue) => {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 화살표 함수 표현식 변형 2 (매개변수 1개: 소괄호 생략)
// let px2rem = pxValue => {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 화살표 함수 표현식 변형 3 (암묵적 반환)
// let px2rem = pxValue => {
//   let remValue = pxValue / ROOT_FONT_SIZE + 'rem'
//   return remValue
// }

let pxToRem = function (pxValue) {
  return pxValue / ROOT_FONT_SIZE + 'rem'
}

// let px2rem = pxValue => pxValue / ROOT_FONT_SIZE + 'rem'
let px2rem = pxValue => 
    pxValue / ROOT_FONT_SIZE + 'rem'

console.log(px2rem(28))



// 객체
// 1. 함수 선언
// function getStyles(){
//   let cssStyles = {
//   'display': 'flex',
//   'row-gap' : 24
//   }
//   return cssStyles
// }

// 2. 함수 표현식
// let getStyles = function () {
//   let cssStyles = {
//   'display': 'flex',
//   'row-gap' : 24
//   }
//   return cssStyles
// }


// 3. 화살표 함수 표현식
let getStyles = _ => {
  return {
  'display': 'flex',
  'row-gap' : 24
  }
}

let getStyles2 = _ => ({
  'display': 'flex',
  'row-gap': 24
})

console.log(getStyles())