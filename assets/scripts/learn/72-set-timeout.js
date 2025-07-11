// --------------------------------------------------------------------------
// 📌 타이머 API : setTimeout(callback, delay, ...params)
// --------------------------------------------------------------------------

(() => {
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
})();
