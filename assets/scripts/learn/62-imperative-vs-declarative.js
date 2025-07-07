// --------------------------------------------------------------------------
// 📌 명령형(Imperative) vs. 선언적(Declarative)
// --------------------------------------------------------------------------

// 전역 변수
const fruitsBasket = '키위 사과 배 참외 키위 망고 파인애플 키위 수박 키위'.split(' ');

function getKiwiCount(list) {
  // 과일 바구니 안에서 키위의 갯수를 구해라
  return list.filter((item) => item === '키위').length;
}

// 명령형 코드
() => {
  console.log(1 + 1); // 2

  let kiwiCount = 0;

  for (let fruit of fruitsBasket) {
    if (fruit === '키위') kiwiCount += 1;
  }

  console.log(kiwiCount);
};

// 선언적 코드
(() => {
  // 선언적 (과일바구니 안에서 키위의 갯수를 구해라)
  let kiwiCount = getKiwiCount(fruitsBasket);
  console.log(kiwiCount); // 3
})();
