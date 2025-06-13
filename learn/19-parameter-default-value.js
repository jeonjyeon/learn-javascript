// --------------------------------------------------------------------------
// 📌 함수 매개변수 기본값 설정 (조건문 활용)
// --------------------------------------------------------------------------

function getMoney(price /* 필수 */, unit /* 옵션 */) {
  // unit 매개변수(옵션)
  // 설정 가능한 값: '달러' 또는 '원화'
  // 기본 값: '원'

  // 매개변수 타입 비교
  // if (unit === undefined) {

  // 매개변수 타입이 무엇인지 문자값으로 비교
  // if (typeof unit === 'undefined') {

  // 조건문 소괄호 안에서 조건이 평가 (Truthy or Falsey)
  // 평가 이후, 부정(NOT, !) 연산자로 평가 반전
  if (!unit) {
    unit = '원';
  }

  if (unit === '달러') {
    return '$' + price;
  }

  return price + unit;
}

let moneyKR = getMoney(5000 + 2000 + 1500 + 500); // '9000원'
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러'); // '$80.75'

console.log(moneyKR); // '9000원'
console.log(moneyUS); // '$80.75'
