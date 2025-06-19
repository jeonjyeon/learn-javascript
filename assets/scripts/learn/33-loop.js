// ----------------------------------------------------------------------
//  📌 루프 (Loop)
// ----------------------------------------------------------------------

// let count = 0

const draw = () => {
  // count = count + 1
  console.count('도화지에 그림을 그린 횟수');
};

// draw();
// draw();
// draw();
// draw();
// draw();

// const numbers = [100, 99, 98, 97]Add commentMore actions
// console.log(numbers)

let wantToDraw = true;

// 조건문
// 조건이 참이면 블록 내부의 코드 한 번 수행
// if (wantToDraw) {
//   draw();
// }

// 루프(반복)문
// 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
// let n = 0;

// while (wantToDraw) {
//   draw();

// //   // 조건을 거짓으로 만들께요! (멈춤)
//   // wantToDraw = !wantToDraw
//   if (n > 2) {
//     wantToDraw = false;
//   }

//   n += 1;
// }

// let i = 10;

// while (wantToDraw) {
//   draw();

//   // 특정 상황이 일치되는 경우
//   if (i-- <= 0) {
//     // 선감소(--i): i = 9  / 후감소(i--) i = 10
//     // 조건을 참에서 거짓으로 변경
//     wantToDraw = false;
//     console.log('i =', i, 'wantToDraw =', wantToDraw);
//   } else {
//     // i = i - 1
//     // i -= 1 // 10 - 1 -> 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

//     // 후감소
//     // i--

//     // 선감소
//     // --i

//     console.log('i =', i);
//   }
// }

// ------------------------------------------------------------
// 사용자 입력 검증 (while)
// '1부터 10까지 숫자를 입력하세요'

// window.prompt('message')
// Number.parseInt(CSSMathValue, ?radix)
// Number.isNaN(value) // number인지 아닌지 판단. 아니면 false 반환

// let userInput = prompt('1부터 10까지 숫자를 입력하세요.'); // prompt로 값을 받으면 string 타입이다.
// userInput = Number.parseInt(userInput, 10);

// let userInput = Number.parseInt(prompt('1부터 10까지 숫자를 입력하세요.'), 10); // prompt로 값을 받으면 string 타입이다.
// // console.log('입력한 값: ', userInput, ', 값의 타입: ', typeof userInput);

// while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
//   console.error('입력 값이 1부터 10 사이의 숫자여야 합니다.');
//   userInput = Number.parseInt(prompt('1부터 10까지 숫자를 입력하세요.'), 10);
// }

// ------------------------------------------------------------
// 흐름 제어 (continue, break)

// ( () => { ... } )() IIFE(즉시 실행 함수): 전역 스코프 오염 방지 및 지역 스코프 생성용
(() => {
  let drawCount = 20;
  let i = 0;

  const draw = (n) => {
    console.log('도화지에 그림을 그린 횟수 = ' + n);
  };

  while (i++ < drawCount /* 1 ~ 10 -> continue -> 16 ~ 19 */) {
    // i += 1
    // ++i
    // i++

    // i = 10
    if (i > 10 && i <= 15) {
      continue;
    }

    draw(i);
  }
})();
