// 변수 (Variables)

// ------------------------------
// 의미 없는 코드
// ------------------------------
// 4 + 27
// console.log(31);
// console.log(4 + 27); // non-semantic

// ------------------------------
// 의미 있는 코드
// ------------------------------

// 처음 가진 사과의 갯수 = 4
// 변수 선언 및 값 할당
// let 처음_가진_사과의_갯수 = 4;
// console.log('처음_가진_사과의_갯수 = ', 처음_가진_사과의_갯수); // 4
// let initialApples = 4;
// console.log('initialApples: ', initialApples);
// let $initialApples = 4;
// console.log('$initialApples: ', $initialApples);

// 추가로 구매한 사과의 갯수 = 27
// let 추가로_구매한_사과의_갯수 = 27;
// console.log('추가로_구매한_사과의_갯수 = ', 추가로_구매한_사과의_갯수); // 27
// let applesToBuy = 27;
// console.log('applesToBuy: ', applesToBuy);

// 현재 내가 가진 사과의 갯수 = 처음 가진 사과의 갯수 + 추가로 구매한 사과의 갯수
// let 현재_내가_가진_사과의_갯수 = 처음_가진_사과의_갯수 + 추가로_구매한_사과의_갯수;
// console.log('현재_내가_가진_사과의_갯수 = ', 현재_내가_가진_사과의_갯수); // 4 + 27
// let total = initialApples + applesToBuy;
// console.log('total: ', total);

// 잘못된 변수 이름Add commentMore actions
// 공백(' ')은 안됨.
// let initial apples [❌]
// 첫글자가 숫자 안됨.
// let 4people = '4명의 친구들' [❌]
// 하이픈(-) 기호 안됨.
// let dark-impact = '다크 임팩트' [❌]
// 예약어(예: if, for, while, function, ...) 안됨.
// let return = '회귀' [❌]

// 값 할당하지 않고 변수 선언하기
// let test; // 기본값: undefined
// // let test = undefined; (암묵적)
// console.log('test = ', test); // undefined

//선언된 변수에 값 할당
// test = 27;
// console.log('test = ', test); // undefined -> 27

// ------------------------------
// let 변수 vs var 변수
// ------------------------------

// 블록 스코프(block scope)
// {
//   var myName; // var는 	함수 스코프(function scope)
//   console.log(1, myName);

//   myName = 'apple';
//   console.log(2, myName);
// }

// myName = 'pineapple';
// console.log(3, myName);

// {
//   let myName2; // let은 블록 스코프(function scope)
//   console.log(1, myName2);

//   myName2 = 'apple';
//   console.log(2, myName2);
// }

// myName2 = 'pineapple'; // ReferenceError
// console.log(3, myName2);

// ----------------------------------------
// let 변수 vs const 변수(상수, constant)
// ----------------------------------------
// - 변수: 시간의 흐름에 따라 값이 변경됨
// - 상수: 처음 선언 시, 할당된 값이 이후 변경되지 않음
