// --------------------------------------------------------------------------
// 📌 객체 속성 순환
// --------------------------------------------------------------------------

// for...in 문
() => {
  const cssMap = {
    display: 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    gap: '12px',
  };

  for (const key in cssMap) {
    const value = cssMap[key];
    console.log({ key, value });
  }
};

// for...of 문
() => {
  const cssMap = {
    display: 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    gap: '12px',
  };

  // console.log(Array.from(cssMap)) ❌
  // console.log(Object.entries(cssMap)) ✅

  const objectEntriesResult = [
    ['display', 'grid'],
    ['font-size', '48px'],
    ['margin-block-end', '40px'],
    ['gap', '12px'],
  ];
  // console.log(objectEntriesResult)

  // 객체 -> 배열 변경
  // 구조 분해 할당

  // for(const keyValue/* [key, value] */ of Object.entries(cssMap) /* [[key, value], [key, value]] */) {
  //   console.log(keyValue[0]) // key
  //   console.log(keyValue[1]) // value
  // }

  for (const [key, value] of Object.entries(cssMap)) {
    console.log(key);
    console.log(value);
  }
};

// Object.keys()
// Object.values()
(() => {
  // 객체
  const cssMap = {
    display: 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    gap: '12px',
  };

  // 객체 -> 배열
  // console.log(Object.keys(cssMap))
  // console.log(Object.values(cssMap))
  // console.log(Object.entries(cssMap))

  // 객체 순환 속성 및 값을 확인
  // 객체 -> 배열 -> for...of 문

  for (const [key, value] of Object.entries(cssMap)) {
    // console.log({ key, value })
  }

  for (const key of Object.keys(cssMap)) {
    // console.log(key)
  }

  for (const value of Object.values(cssMap)) {
    console.log(value);
  }
})();
