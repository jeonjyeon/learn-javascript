// --------------------------------------------------------------------------
// 📌 나머지 매개변수 / 전개 구문 (Rest Parameters and Spread Syntax)
// --------------------------------------------------------------------------

// 전개 연산자(...)

// 배열 전개
() => {
  const breads = ['크림빵', '소보로빵', '소금빵'];

  // 문자열 값
  // console.log(`${breads[0]},${breads[1]},${breads.at(-1)}`)
  // console.log(breads.toString())

  // 구조 분해 할당 활용
  // const [x, y, z] = breads
  // console.log(x, y, z)

  // 전개 구문(배열의 원소를 전개한다.) 활용
  console.log(...breads); // console.log(breads[0], breads[1], breads[2])
  // console.log('크림빵', '소보로빵', '소금빵')
};

() => {
  const messages = ['안녕?', '안녕!', '안녕하세요!?'];

  function log(message1, message2, message3) {
    console.log(message1);
    console.log(message2);
    console.log(message3);
  }

  // log(messages[0], messages.at(1), messages[2])
  log(...messages);
};

// 다른 배열 내부에도 전개 가능
() => {
  const team = ['one', 'two', 'three'];

  const anotherTeam = ['four', ...team, 'six', 'nine'];

  console.log(anotherTeam);
};

// .concat() 메서드 vs. 전개 구문
() => {
  const itemToAdd = 1;
  const existingArray = [2, 3];

  // .concat()
  const arr = [];
  arr.push(itemToAdd);
  let combinedArr = arr.concat(existingArray);
  console.log(combinedArr);

  // spread syntax
  combinedArr = [itemToAdd, ...existingArray];
  console.log(combinedArr);
};

// HTMLCollection or NodeList -> Array 변환
// Array.from() vs. Spread Syntax
() => {
  const sectionChildrenArray = Array.from(document.querySelector('section').children);
  const bodyChildrenArray = [...document.body.children];

  console.log(sectionChildrenArray);
  console.log(bodyChildrenArray);

  // console.log(Array.from(sectionChildrenArray))
  // console.log([...sectionChildrenArray])
};

// 나머지 매개변수 (Rest Parameters)
() => {
  function toArray(likeArrayObject) {
    return Array.prototype.slice.call(likeArrayObject);
  }

  function logNames() {
    /* 인자(arguments): 매개변수의 집합 */
    // console.log(arguments)

    // 인자 집합은 배열이 아니다. 유사 배열 객체이다.
    console.log(Array.isArray(arguments)); // false

    // 유사배열 객체 -> 배열로 변경하기
    // Array.from()
    console.log(Array.from(arguments));
    // 전개 구문
    console.log([...arguments]);
    // 메서드 빌려쓰기 패턴
    console.log(Array.prototype.slice.call(arguments));
    // 유틸리티 함수 활용
    console.log(toArray(arguments));

    for (let i = 0, l = arguments.length; i < l; i++) {
      // const arg = arguments[i]
      // console.log(arg)
    }
  }

  logNames('진형', '민희', '수영', '진구', '초영', '영주', '주효');
};

// 객체 합성
() => {
  /* global gsap */

  const initVars = { opacity: 0, rotateX: -480 };

  // gsap.timeline({ defaults: { ... } })

  const commonVars = { opacity: 1, rotateX: 0 };
  // const h1Vars = { scale: 1, delay: 0.5 }
  // const pVars = { y: -50, color: '#551b8b', scale: 1.2, delay: 0.8 }

  // // console.log(Object.assign({}, commonVars, h1Vars))
  // console.log({ ...commonVars, ...h1Vars })
  // console.log(commonVars)
  // console.log(h1Vars)

  gsap.set('h2, p', initVars);
  gsap.to('h2', { ...commonVars, scale: 1, delay: 0.5 });
  gsap.to('p', { ...commonVars, y: 25, color: '#551b8b', scale: 1.2, delay: 0.8 });
};

// 원본 객체 유지, 새로운 객체(합성된) 사용
(() => {
  const fruitBlender = {
    blendKiwi: true,
    blendMango: true,
  };

  const megaBlender = {
    blendGuava: true,
  };

  const neoBlender = {
    ...megaBlender,
    ...fruitBlender,
  };

  console.log(neoBlender);
  console.log(megaBlender);
  console.log(fruitBlender);
})();
