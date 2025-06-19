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

// const numbers = [100, 99, 98, 97]
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
() => {
  let drawCount = 20;
  let i = 0;

  const draw = (n) => {
    console.log('도화지에 그림을 그린 횟수 = ' + n);
  };

  // continue
  // while (i++ < drawCount /* 1 ~ 10 -> continue -> 16 ~ 19 */) {
  //   // i += 1
  //   // ++i
  //   // i++

  //   // i = 10
  //   if (i > 10 && i <= 15) {
  //     continue;
  //   }

  //   draw(i);
  // }

  // break
  while (i++ < drawCount /* 0 < 20 */) {
    // i = 1, 2, 3, 4, 5

    if (i === 5) {
      // i = 5
      break; // 반복문 종료
    }
    draw(i); // i = 1, 2, 3, 4
  }
  console.log('마지막 i 값 =', i); // i = 5
};

// ------------------------------------------------------------
// do ... while 반복문
// 구문 실행 먼저 하고 조건 평가 (최소 1회 실행됨)

() => {
  let condition = false;

  // do...while 문
  // 조건이 거짓이어도 1번은 반드시 실행
  do {
    console.log('do...while');
  } while (condition);

  // while 문
  // 조건이 거짓이면 1번도 실행 안함
  while (condition) {
    console.log('while');
  }
};

// --------------------------------------------------------------------------
// 사용자 입력 검증 (do...while vs while)
// "1부터 10까지 숫자를 입력하세요"

// do...while 문 사용 예시
() => {
  let userInput;

  do {
    userInput = parseInt(prompt('1부터 10까지 숫자를 입력하세요'), 10);
    if (Number.isNaN(userInput) || userInput < 1 || userInput > 10) console.error('입력 값이 1부터 10까지 숫자여야 합니다.');
  } while (Number.isNaN(userInput) || userInput < 1 || userInput > 10);

  console.log('사용자가 입력한 값은 ' + userInput + '입니다.');
};

// while 문 사용 예시
() => {
  let userInput = parseInt(prompt('1부터 10까지 숫자를 입력하세요'), 10);

  while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
    console.error('입력 값이 1부터 10까지 숫자여야 합니다.');
    userInput = parseInt(prompt('1부터 10까지 숫자를 입력하세요'), 10);
  }

  console.log('사용자가 입력한 값은 ' + userInput + '입니다.');
};

// --------------------------------------------------------------------------
// for 문
// while 문 vs. for 문

// while 문 예시
() => {
  let i = 0;

  while (i < 10) {
    console.count('while 문');
    ++i;
  }
};

// for 문 예시
() => {
  for (let i = 0; i < 10; i = i + 1) {
    console.count('for 문');
  }
};

() => {
  let i = 0;

  for (; i < 10; ) {
    console.count('for 문');
    ++i;
  }
};

() => {
  // let i = 0

  // for(변수선언값할당; 변수가유효한지비교; 변수변경) {
  for (let i = 0; i < 10; ++i) {
    console.count('for 문', i);
    // ++i
  }
};

() => {
  const numbers = [11, 22, 33, 44, 55, 66];

  // numbers를 순환(루프)하되, 33인 값(인덱스) 순서에서 반복문 멈춰라
  for (let i = 0; i < numbers.length; i = i + 1) {
    // const number = numbers.at(i)
    const number = numbers[i];

    if (number === 33) {
      // 반복문 내부에서 break를 만나면 반복문이 바로 중단됨
      break;
    }

    console.log(number);
  }
};

() => {
  const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

  for (let i = 0, l = numbers.length; i < l; i = i + 1) {
    const number = numbers[i];
    console.log(number);
  }

  // let i = 0,
  //     l = numbers.length

  // for (; i < l;) {
  //   const number = numbers[i]
  //   console.log(number)
  //   i = i + 1
  // }
};

() => {
  const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

  for (let i = 0, number; (number = numbers[i]); i = i + 1) {
    console.log(number);
  }

  // let i = 0, number // undefined

  // for (; (number = numbers[i]);) {
  //   console.log(number)
  //   i = i + 1
  // }
};

(() => {
  const fruitBasket = ['체리망고', '토마토', '스트로베리', '워터멜론', '체리'];

  // for문을 사용해 과일바구니 내부의 과일 이름을 콘솔 패널에 출력
  for (let i = 0, l = fruitBasket.length; i < l; i++) {
    // console.log(fruitBasket[i])
  }

  const students = [{ 이름: '홍민영' }, { 이름: '윤정화' }, { 이름: '허시온' }, { 이름: '조선현' }, { 이름: '성정현' }, { 이름: '조장원' }, { 이름: '차지현' }, { 이름: '김동규' }, { 이름: '이성은' }, { 이름: '고우현' }];

  // for문을 사용해 수강생의 이름을 콘솔 패널에 출력
  console.time('정순환');
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student.이름);
  }
  console.timeEnd('정순환');

  // 역순 순환
  console.time('역순환');
  for (let i = students.length - 1; i >= 0; i = i - 1) {
    const student = students[i];
    console.log(student.이름);
  }
  console.timeEnd('역순환');
})();
