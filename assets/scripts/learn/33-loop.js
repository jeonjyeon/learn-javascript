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
let n = 0;

while (wantToDraw) {
  draw();

  // 조건을 거짓으로 만들께요! (멈춤)
  // wantToDraw = !wantToDraw
  if (n > 2) {
    wantToDraw = false;
  }

  n += 1;
}
