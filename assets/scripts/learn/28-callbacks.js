// 문서에 있는 버튼 요소에 접근(찾기)
// 전역 변수에 참조(왜 ? 객체 타입이니까)
const button = document.querySelector('button.clickable');

// 버튼 요소에 이벤트 리스너(함수) 추가
// 콜백 = 다른 함수에 인수로 저달될 함수(나중에 실행되도록)
// 이벤트 = 언제 발생할지 알 수 없음 (비동기)
// button.addEventListener('click', () => {
//   console.log('이 함수는 나중에 실행되므로 콜백!');
// });

// addEventListener()는 한 요소에 이벤트 리스너를 여러 개 추가(N회 가능)
// button.addEventListener('click', () => {
//   console.log('두번째로 연결된 콜백!');
// });

const handleBodyToggleClass = () => {
  console.log('body');
  document.body.classList.toggle('is-active');
};

const handleButtonToggleClass = () => {
  console.log('button');
  button.classList.toggle('is-active');
};

// 버튼 요소에 이벤트 리스너(함수) 추가
// 콜백 = 다른 함수에 인수로 전달될 함수 (나중에 실행되도록)
// 이벤트 = 언제 발생할 지 알 수 없음 (비동기 실행)
button.addEventListener('click', handleBodyToggleClass);

// addEventListener()를 사용해 리스너를 추가하는 것은 x N회 가능
button.addEventListener('click', handleButtonToggleClass);

// 동기(sync) 실행
handleBodyToggleClass(); // 1
handleBodyToggleClass(); // 2
handleBodyToggleClass(); // 3
handleBodyToggleClass(); // 4
handleBodyToggleClass(); // 5

// -------------------------------------------------------

// 콜백함수는 어떻게 보면 이중 중첩 함수인 셈인가?
//  => 아니다!
// 콜백은 재사용, 전달 목적이고, 중첩 함수는 캡슐화/스코프 목적이다.
// 콜백 함수는 함수 안에서 실행되긴 하지만 중첩 선언이 아닌 전달받은 함수이기 때문에,
// "이중 중첩"은 아니고, "함수 안에서 다른 함수를 호출한다는 점에서 구조적으로 유사하다

// 함수 이중 중첩 예시
// function fn1() {
//   function fn2() {

//   }
// }

// 콜백 예시
// fn1(fn2);

// function fn1(callback) {
//   // [1]
//   console.log('fn1');
//   callback();
// }

// function fn2() {
//   // [2]
//   console.log('fn2');
// }

// 레거시 이벤트 vs 모던 이벤트 모델
// // button.onclick에 새로운 함수를 할당하면 기존 함수는 덮어쓰기 되어 사라짐.
// 따라서 여러 개를 연결할 수 없음 → 마지막에 할당된 함수만 실행됨.
// button.onclick = function () {
//   document.body.classList.toggle('is-active');
// };
