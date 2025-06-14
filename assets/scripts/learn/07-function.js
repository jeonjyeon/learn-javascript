// 함수 (Function)
// 특정 순서에 따라 작업이 실행되는 코드 묶음(블록)

// // 함수 선언(Function Declaration) 구문
// function drawWater() {
//   console.groupCollapsed('drawWater() 호출됨');
//   console.log('1. 빈 양동이 가져오기');
//   console.log('2. 양동이 들고 우물로 이동하기');
//   console.log('3. 우물에서 물 길러오기');
//   console.log('4. 집으로 귀가하기');
//   console.groupEnd();
// }

// // 함수 사용 (Call Function)
// // 재사용성 (Reusability)
// drawWater();

// 함수명은 동사형태로 짓기
// 함수를 "호출(실행)한다" 의미 - 약속된 규칙
// 함수기능()

// 함수 이름으로 기능을 유추해보기
// 직관저깅고 쉬운 함수 이름이 잘 지어진 이름이다.
// playMusic();
// stopMusic();
// pauseMusic();

// 적절하지 않은 함수 이름
// function return() {}
// function 2break() {}
// function conti    nue() {}
// function cla----ss() {}
// function for() {}

// ------------------------------------------

// 함수 매개변수 (Function Parameters)

// 함수 밖에 있는 변수 = 전역 변수 (golbal scope variables)
// let year = 4027;

// // 함수 선언
// function writeDiary(연도, 월, 일) {
//   // 함수 이름 옆 () 선언된 변수들을 특별히 매개변수라고 부른다.

//   // 함수 내부에 선언된 변수 = 지역 변수 (local scope variables)
//   let year = 2025;
//   let month = 6;
//   let day = 10;

//   // year = 2026;

//   // 변수 + 문자 = 문장
//   //  변수('문자') + 변수('문자') = 문자 연결
//   console.log(연도 + '년 ' + 월 + '월 ' + 일 + '일에 일기를 쓴다.');
// }

// // 함수 호출
// writeDiary(2025, 6, 10);
// writeDiary(2025, 7, 2);
// writeDiary(2025, 8, 20);

// - 매개변수 기본값(undefined)
// - 변수 기본값(undefined)

// ------------------------------------------
// 함수의 반환문 (return)
// ------------------------------------------

function 더하기(숫자1, 숫자2) {
  //브라우저 콘솔 패널에 숫자1 +숫자2 계산값이 기록된다.
  console.log('콘솔 패널에 출력된 계산 결과 =', 숫자1 + 숫자2);

  //함수에서 처리된 값을 반환하려면 return 키워드 필요
  return 숫자1 + 숫자2;
}

// 함수(기능)가 실행되어 값을 반환한다면 그 값을 변수에 기억하려 한다.
let 결과값 = 더하기(10, 9);
console.log('결과값 = ', 결과값);

// - 함수 암묵적 반환값(undefined)
// - console.log()는 개발 도구의 콘솔 패널에 출력만 할 뿐. 화면과 관련 없음.
