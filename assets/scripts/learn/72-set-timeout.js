// --------------------------------------------------------------------------
// 📌 타이머 API : setTimeout(callback, delay, ...params)
// --------------------------------------------------------------------------

() => {
  function callTheAvengers(label, ...heros) {
    console.groupCollapsed(label);
    // heros.forEach((hero, index, heros) => console.log(hero, index, heros))
    // heros.forEach(console.log)
    heros.forEach((hero) => console.log(hero));
    console.groupEnd();
  }

  // 일반 함수 호출
  // callTheAvengers('아이언맨', '토르', '헐크', '스파이더맨')

  // 타이머 API 활용
  const DELAY = 0; // 1500ms = 1.5s

  // 히어로 배열
  const heros = ['아이언맨', '토르', '헐크', '스파이더맨'];

  // 방법 1.
  const timeoutId1 = setTimeout(() => {
    callTheAvengers('timeoutId1', ...heros);
  }, DELAY);

  // 방법 2.
  // setTimeout(callback, delay, ...params)
  const timeoutId2 = setTimeout(callTheAvengers, DELAY * 2, 'timeoutId2', ...heros.toReversed());

  // 반환값 (timeoutId)
  const timeoutId3 = setTimeout(callTheAvengers, DELAY * 3, 'timeoutId3', '비전');

  console.log({ timeoutId1, timeoutId2, timeoutId3 });

  // 설정된 타임아웃을 해제 (clearTimeout)
  clearTimeout(timeoutId2);
  console.log('timeoutId2 타이머 해제');
};

// 리커젼 (recursion, 재귀(再歸): 자신을 다시 호출)
() => {
  let count = 10;

  countDown();

  function countDown() {
    const timeoutId = setTimeout(() => {
      console.log(count);

      // 재귀 호출을 중단하기 위한 조건 설정
      if (count === 0) {
        console.log('타임아웃 해제');
        clearTimeout(timeoutId);
        return;
      }

      count -= 1;

      // countDown 함수 자신을 다시 호출할 수 있다면?
      // console.log(countDown) // 함수 안에서 함수 자신에 접근 가능
      // 자신(함수)을 다시 호출 것도 가능
      countDown();
    }, 1000);
  }

  // setTimeout(() => {
  //   countDown()
  // }, 1000)

  // 반복문으로 카운트 다운
  // for(let i = count; i > 0; i -= 1) {
  //   countDown()
  // }
};

// 쓰로틀링 (Throttling)
// 특정 함수의 실행 빈도를 제한하는 방법으로
// 스크롤 이벤트나, 창크기 조절 같은 빈번한 이벤트 처리에 유용합니다.
(() => {
  // throttle 함수 작성
  function throttle(callback, delay = 400 /* 0.4s */) {
    // 조건 처리를 위한 지역 변수
    let timeout = null;

    // 함수 내부에서 다른 함수 반환
    // 이벤트 리스너로 추가되는 함수
    return function (...args) {
      // console.log(args) // [arg1, arg2, ..., argN]
      if (!timeout) {
        timeout = setTimeout(() => {
          // throttle 함수 실행 과정에서 전달된 콜백 실행
          callback(...args); // callback(arg1, arg2, ..., argN)
          // timeout 초기화
          timeout = null;
        }, delay);
      }
    };
  }

  // 스크롤(scroll) 이벤트 ---------------------------------------------------
  // 쓰로틀 사용 전
  // window - 브라우저 환경에서의 전역 객체
  // global - Node.js 환경에서의 전역 객체
  // globalThis - 환경 통합적인 전역 객체

  // 스크롤 할 때마다 콜백 실행
  let noThrottleCount = 0;
  function handleScrollNoThrottle() {
    console.log(`%cnoThrottleCount = ${noThrottleCount++}`, 'color: red');
  }
  globalThis.addEventListener('scroll', handleScrollNoThrottle);

  // 쓰로틀 조정으로 0.5초 간격으로 콜백 실행
  let throttleCount = 0;
  const handleScrollThrottle = throttle(() => {
    console.log(`%cthrottleCount = ${throttleCount++}`, 'color: blue');
  }, 200);
  globalThis.addEventListener('scroll', handleScrollThrottle);

  // 리사이즈(resize) 이벤트 ---------------------------------------------------
  globalThis.addEventListener('resize', () => {
    console.log(`%c${globalThis.innerWidth}`, 'color: hotpink');
  });

  globalThis.addEventListener(
    'resize',
    throttle(() => {
      console.log('throttle', globalThis.innerWidth);
    })
  );
})();
