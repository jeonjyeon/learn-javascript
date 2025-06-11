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

// 1. 매개변수의 개수

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

// const ROOT_FONT_SIZE = 16

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

// let pxToRem = function (pxValue) {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// // let px2rem = pxValue => pxValue / ROOT_FONT_SIZE + 'rem'
// let px2rem = pxValue => 
//     pxValue / ROOT_FONT_SIZE + 'rem'

// console.log(px2rem(28))



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


// --------------------------------------------
// 실습
// --------------------------------------------

// 1. 매개변수 없이, 값 10을 반환하는 ten 함수를 화살표 함수 표현식으로 작성해보세요.
const ten = () => 10

// 2. 하나의 매개변수를 받는 logger 함수를 화살표 함수 표현식으로 작성해보세요. 
// (괄호 사용 또는 사용 안함)

const logger = (message) => '로그 메시지: ' + message
console.log(logger('화살표 함수 표현식은 매우 유용해요!'))

// 3. pxToRem 함수를 명시적, 암묵적으로 값을 반환하도록 모든 경우를 화살표 함수 표현식으로 작성하세요
// 명시적
const ROOT_FONT_SIZE = 16
const pxToRem = (px) =>{
  return px / ROOT_FONT_SIZE + 'rem'
}
// 암묵적
const px2Rem = (px) => px / ROOT_FONT_SIZE + 'rem'

console.log('명시적: ' + pxToRem(18), '암묵적: ' + px2Rem(18))


// 4.percentage 함수를 명시적, 암묵적으로 값을 반환하도록 모든 경우를 화살표 함수 표현식으로 작성하세요.
// 명시적
const percentage = (x, y) =>{
  return x/y*100 + '%'
}
// 암묵적
const percentage2 = (x, y) => x/y*100 + '%'

console.log('명시적: ' + percentage(360, 1280), '암묵적: ' + percentage2(360, 1280))



// 왜 함수를 화살표 함수 표현식으로 사용할 때
// let이 아닌, const를 사용했을까?
// - 실수로 다른 값으로 재할당하는 것을 방지하기 위해
// - 이 함수가 "변하지 않아야 할 값"임을 명확하게 보여주기 위해

let thisIsAFunction = () => {
  console.log('이것은 함수 입니다.')
}
thisIsAFunction = {}
thisIsAFunction()