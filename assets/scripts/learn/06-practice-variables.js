// ----------------------------------------
// 실습
// ----------------------------------------
// 1. `const` 키워드를 사용해 값이 변하지 않는 상수를 선언해봅니다.
//     1. "하루는 24시간"
const day = '24시간';
console.log('day: ', day);

//     2. "물의 어는 점은 섭씨 0도"
const waterFreezeDegree = '섭씨 0도';
console.log('waterFreezeDegree: ', waterFreezeDegree);

//     3. "삼각형 내각의 합은 180도"
const triangleAnglesSum = '180도';
console.log('triangleAnglesSum: ', triangleAnglesSum);

//     4. "지구의 중력 가속도는 9.8 m/s²"
const accelerationOfGravity = '9.8 m/s²';
console.log('accelerationOfGravity: ', accelerationOfGravity);

// 2. 다음 내용을 코드로 작성해 결과 값을 콘솔 패널에 출력해보세요.
//     1. `let` 키워드를 사용해 `sum` 변수를 선언하고 값을 `0`으로 설정합니다.
let sum = 0;
console.log('sum: ', sum);

//     2. `num1`, `num2` 변수를 선언하고, 각각 `300`, `50`으로 값을 설정합니다.
// let num1 = 300;
// let num2 = 50;
let num1 = 300,
  num2 = 50;

console.log('num1, num2: ', num1, num2);

//     3. `num1`, `num2`의 합을 `sum` 변수에 할당합니다.
sum = num1 + num2;
console.log('sum: ', sum);

// 3. 사람 이름, 나이, 오늘의 기온, 장바구니 상품 갯수, 집 주소, 현재 시간,
// 로그인 상태, 피자 가격, 학생 수 등에 걸맞는 변수 이름을 정하고 적절한 값을 설정합니다.
let personName = 'jyeon';
console.log('이름: ', personName);

let age = 24;
console.log('나이: ', age);

let todayTemperature = '26도';
console.log('오늘의 기온: ', todayTemperature);

let cartItemCount = '5개';
console.log('장바구니 상품 갯수: ', cartItemCount);

let address = 'korea';
console.log('집주소: ', address);

let currentTime = '오후 2:24';
console.log('현재 시간: ', currentTime);

let isLogin = true;
console.log('isLogin: ', isLogin);
isLogin = false;
console.log('isLogin: ', isLogin);

let pizzaPrice = 10_000;
console.log('피자 가격: ', pizzaPrice, '원');

let studentCount = '10명';
console.log('학생 수: ', studentCount);
