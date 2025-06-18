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

// function hasItem(array, value) {
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

// indexOf() 메서드 대신, includes() 메서드 활용
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

// --------------------------------------------------
// 배열에 항목 추가

// 1. 시작 위치에 새 항목 추가
{
  const length = 멋사14기_수강생.unshift({ 이름: '홍길동' }); // 반환 값: 배열의 length
  console.log({ length, 멋사14기_수강생 });
}

{
  console.log(JS_학습_주제.unshift('디버깅', '린터', '배열 메서드'));
  console.log(JS_학습_주제);
}

// 2. 끝 위치에 새 항목 추가

{
  멋사14기_수강생.push({ 이름: '짱구' }); // return value : length
  console.log(멋사14기_수강생);
}

{
  JS_학습_주제.push('.indexOf()', '.findIndex()', '.at()', '.unshift()', '.push()');
  console.log(JS_학습_주제);
}

// 3. 중간 어딘가 새 항목 추가 (나중에 진행)

// --------------------------------------------------------------------------
// 배열에 항목 제거

{
  const counts = [101, 201, 301, 501];
  console.log({ counts: counts }); // [101, 201, 301, 501] | length: 4

  // ECMAScript 2015
  // 객체 표기 단축 방법
  // console.log('🌈', { 'counts': counts })
  // console.log('🌈', { counts: counts })
  // console.log('🌈', { counts })

  // 1. 처음 위치 항목 제거
  const removedFirstItem = counts.shift();
  console.log({ removedFirstItem: removedFirstItem }); // 101
  console.log({ counts: counts }); // [201, 301, 501] | length: 3
}

{
  console.log(멋사14기_수강생); // length: 5

  // 여러 항목을 맨 앞에서 순차적으로 제거
  const cha = 멋사14기_수강생.shift(); // length: 4
  const hong = 멋사14기_수강생.shift(); // length: 3
  console.log('🤖', cha); // 첫 번째 항목
  console.log('🤖', hong); // 두 번째 항목
  console.log('🤖', 멋사14기_수강생); // 남은 수강생 목록(집합)
}

// 2. 끝 위치 항목 제거
{
  console.log(멋사14기_수강생); // length: 3

  const jang = 멋사14기_수강생.pop(); // length: 2
  const heo = 멋사14기_수강생.pop(); // length: 1

  console.log(jang);
  console.log(heo);
  console.log(멋사14기_수강생); // [{}]
}

// 맨 앞에 추가: .unshift(item1, item2, ...)
// 맨 뒤에 추가: .push(item1, item2, ...)
// 맨 앞에 제거: .shift()
// 맨 뒤에 제거: .pop()
