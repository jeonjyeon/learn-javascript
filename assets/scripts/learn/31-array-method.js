// ----------------------------------------------------------------------
// 📌 배열의 메서드 (Array's Methods)
// ----------------------------------------------------------------------

const JS_학습_주제 = ['변수', '함수', '조건문', '객체', '배열', '비교 연산자', '부정 연산자'];

// 배열 항목 위치(index) 찾기
let 함수_인덱스, 비교_연산자_인덱스;

함수_인덱스 = JS_학습_주제.indexOf('함수'); // 기대값: 1 / 결과값: 1
console.log('함수_인덱스: ', 함수_인덱스);

비교_연산자_인덱스 = JS_학습_주제.indexOf('비교'); // 기대값: -1 / 결과값: -1
console.log('비교_연산자_인덱스: ', 비교_연산자_인덱스);

비교_연산자_인덱스 = JS_학습_주제.indexOf('비교연산자'); // 기대값: -1 / 결과값: -1
console.log('비교_연산자_인덱스: ', 비교_연산자_인덱스);

비교_연산자_인덱스 = JS_학습_주제.indexOf('비교 연산자'); // 기대값: 5 / 결과값: 5
console.log('비교_연산자_인덱스: ', 비교_연산자_인덱스);

// indexOf() 메서드의 결과 값을 불리언 값으로 변경하려면?
const fruitBasket = ['패션후르츠', '애플망고', '워터멜론', '오렌지'];

// indexOf() 메서드가 반환한 값이 -1보다 크다면? 그 값은 true이다.
// console.log(fruitBasket.indexOf('패션') > -1); // false
// console.log(fruitBasket.indexOf('패션후르츠') > -1); // true
// console.log(fruitBasket.indexOf('애플망고') > -1); // true
// console.log(fruitBasket.indexOf('워터멜론') > -1); // true
// console.log(fruitBasket.indexOf('오렌지') > -1); // true

// --------------------------------------------------

// 구문이 긴데? 재사용 가능한 함수로 작성해볼까요?
// 배열.indexOf(값): 불리언

// function hasItem(array, value) {Add commentMore actions
//   return array.indexOf(value) > -1
// }

// const hasItem = function (array, value) {
//   return array.indexOf(value) > -1
// }

// const hasItem = (array, value) => {
//   return array.indexOf(value) > -1
// }

// const hasItem = (array, value) => array.indexOf(value) > -1
const hasItem = (array, value) => array.indexOf(value) > -1;

console.log(hasItem(fruitBasket, '패션')); // 기대값: false
console.log(hasItem(fruitBasket, '오렌지')); // 기대값: true

// indexOf() 메서드 대신, includes() 메서드 활용Add commentMore actions
// console.log(fruitBasket.includes('워터멜론'))
// console.log(fruitBasket.includes('수박'))

// 객체 타입(함수, 배열, 객체)은 indexOf()로 판별 가능하지 않음
const 멋사14기_수강생 = [
  { 이름: '전지연' }, // 0
  { 이름: '레이' }, // 1
  { 이름: '전젼' }, // 2
];

// console.log(멋사14기_수강생.indexOf({ 이름: '전지연' })); // -1
console.log(멋사14기_수강생.findIndex((수강생) => 수강생.이름 === '전지연')); // 0
