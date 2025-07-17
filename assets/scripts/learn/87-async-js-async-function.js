// --------------------------------------------------------------------------
// 📌 JavaScript 모듈(Modules)
//   - 특정 모듈을 특정 파일(모듈)에서 사용하고자 한다면?
//   - 특정 파일이 모듈 파일임을 브라우저에 알려줘야 함
// --------------------------------------------------------------------------
// 📌 비동기 함수 (async / await)
//   - delay()
//   - getRandomTime()
// --------------------------------------------------------------------------

// 모듈 스코프(Module Scope)

// 외부의 기본 모듈을 불러오기
// import default module
import delayModule from '../utils/delay.js';

// 외부의 이름이 부여된 모듈 불러오기
// import namted module
import { getRandomTime, PI } from '../utils/get-random-time.js';

// 모든 모듈을 별칭으로 불러오기
import * as randomTime from '../utils/get-random-time.js';

delayModule.delay().then((resolveValue) => {
  console.log(resolveValue);
});

console.log(getRandomTime);
console.log(PI);

console.log(randomTime);
