// 문서에 있는 버튼 요소에 접근(찾기)
// 전역 변수에 참조(왜 ? 객체 타입이니까)
const button = document.querySelector('button.clickable');

// 버튼 요소에 이벤트 리스너(함수) 추가
// 콜백 = 다른 함수에 인수로 저달될 함수(나중에 실행되도록)
// 이벤트 = 언제 발생할지 알 수 없음 (비동기)
button.addEventListener('click', () => {
  console.log('이 함수는 나중에 실행되므로 콜백!');
});

// addEventListener()는 한 요소에 이벤트 리스너를 여러 개 추가(N회 가능)
button.addEventListener('click', () => {
  console.log('두번째로 연결된 콜백!');
});

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
fn1(fn2);

function fn1(callback) {
  // [1]
  console.log('fn1');
  callback();
}

function fn2() {
  // [2]
  console.log('fn2');
}

// 레거시 이벤트 vs 모던 이벤트 모델
// 아래의 코드는 결국 마지막의 것만 실행되는 것처럼 보인다.
// 왜? 변수에는 하나의 값만 담길 수 있기 때문에 처음 값이 담겼다가 마지막 값이 담겨서 결국엔 마지막 값만 보임.
button.onclick = function () {
  document.body.classList.toggle('is-active');
};
button.onclick = function () {
  document.button.classList.toggle('is-active');
};
