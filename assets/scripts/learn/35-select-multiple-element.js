() => {
  // <nav>의 모든 <a> 요소를 찾아보자
  // NodeList 객체는 배열과 유사해보이지만, 배열 객체는 아니다.
  // 유사배열을 배열로 변경하면 배열의 모든 능력인 메서드를 사용할 수 있다!
  const paragraphs = Array.from(document.querySelectorAll('.life-tips p'));
  // console.log(paragraphs.length)
  // 맨 마지막 문서의 단락 요소 찾기
  // console.log(paragraphs.item(paragraphs.length - 1))
  console.log(paragraphs.at(-2));

  // NodeList [a, a, a, a]
  // console.log(navLinks.item(0))
  // array[0], array.at(0)

  // 배열의 능력인 메서드를 모두 사용할 수 없다.
  // console.log(navLinks.findIndex)
  // console.log(navLinks.reduce)
  // console.log(navLinks.toReversed)
  // console.log(navLinks.filter)

  // 너 배열 타입이니?
  // Array.isArray(value) true or false
  console.log(Array.isArray(paragraphs)); // NodeList (false)

  // const array = Array.from(likeArrayObject)
  // 유사 배열 -> 배열 변경
  const navLinksArray = Array.from(paragraphs);
  console.log(Array.isArray(navLinksArray)); // Array (true)
  console.dir(navLinksArray);

  // 유사배열을 배열로 변경하면 배열의 모든 능력인 메서드를 사용할 수 있다!
  // console.log(navLinksArray.findIndex)
  // console.log(navLinksArray.reduce)
  // console.log(navLinksArray.toReversed)
  // console.log(navLinksArray.filter)
};

() => {
  const lifeTips = document.querySelector('.life-tips');
  // console.log(lifeTips)

  // Document.querySelectorAll(selectors)
  // Element.querySelectorAll(selectors)
  const paragraphs = lifeTips.querySelectorAll('p');
  // console.log(paragraphs)

  // const firstParagraphElement = paragraphs.item(0)
  // console.log(firstParagraphElement)
  // const secondParagraphElement = paragraphs.item(1)
  // console.log(secondParagraphElement)
  // const lastParagraphElement = paragraphs.item(paragraphs.length - 1)
  // console.log(lastParagraphElement)

  const PRIMARY_KEY = 'color-primary';

  // Loop (반복, 순환)
  // - while
  let i = 0,
    l = paragraphs.length;
  while (i < l) {
    const paragraphElement = paragraphs.item(i);
    paragraphElement.classList.add(PRIMARY_KEY);
    ++i;
  }

  // - do...while

  // - for
  for (let i = 0, l = paragraphs.length; i < l; ++i) {
    const paragraphElement = paragraphs.item(i);
    // console.log(paragraphElement)
    if (paragraphElement.classList.contains(PRIMARY_KEY)) {
      paragraphElement.classList.remove(PRIMARY_KEY);
    }
  }

  // - for...of
  for (const paragraphElement of paragraphs) {
    // console.log(paragraphElement)
    if (!paragraphElement.classList.contains(PRIMARY_KEY)) {
      paragraphElement.classList.add(PRIMARY_KEY);
    }
  }

  // - NodeList.forEach((value, key, parent) => {...})
  paragraphs.forEach((p) => {
    if (p.classList.contains(PRIMARY_KEY)) {
      p.classList.remove(PRIMARY_KEY);
    }
  });
};

() => {
  const paras = document.querySelectorAll('.life-tips p');
  console.log(paras);

  console.log(paras[0] === paras.item(0));
  console.log(paras[1] === paras.item(1));
  console.log(paras[2] === paras.item(2));
};

// HTMLCollection vs. NodeList
() => {
  console.group('DOM 업데이트 전');
  // HTMLCollection (Live)
  const paras = document.getElementsByTagName('p');
  console.log('HTMLCollection(라이브 콜렉션: 살아있는 집합) =', paras.length);

  const paraClasses = document.getElementsByClassName('para');
  console.log('HTMLCollection(라이브 콜렉션: 살아있는 집합) =', paraClasses.length);

  // NodeList
  const paragraphs = document.querySelectorAll('p');
  console.log('NodeList(스태틱 콜렉션: 고정된 집합)', paragraphs.length);
  console.groupEnd();

  // Update DOM
  document.querySelector('.life-tips').innerHTML += '<p class="para">씻지 않은 채소는 그대로 보관하시는 것이 좋습니다.</p>';

  console.group('DOM 업데이트 후');
  console.log('HTMLCollection(라이브 콜렉션: 살아있는 집합) =', paras.length);
  console.log('HTMLCollection(라이브 콜렉션: 살아있는 집합) =', paraClasses.length);
  console.log('NodeList(스태틱 콜렉션: 고정된 집합)', paragraphs.length);
  console.groupEnd();
};

// --------------------------------------------------
// 실습
// 'querySelectorAll()' 메서드를 사용해 연습해보세요.

// 1. 좋은 사람(Good Guy)을 모두 선택하세요.
const goodGuy = document.querySelectorAll('[data-type="good-guy"]');

// 2. 좋은 사람(Good Guy) 모두에게 'excellent' 클래스 이름을 추가하세요.
// goodGuy.forEach((guy) => {
//   guy.classList.add('excellent');
// });

for (const g of goodGuy) {
  g.classList.add('excellent');
}
console.log(goodGuy);

// 3. 빌런(Villain)을 모두 선택하세요.
const villain = document.querySelectorAll('[data-type="villain"]');
console.log(villain);

// 4. 빌런 모두에게 'naughty' 클래스 이름을 추가하세요.
// villain.forEach((v) => {
//   v.classList.add('naughty');
// });

// for (const v of villain) {
//   v.classList.add('naughty');
// }

let i = 0,
  l = villain.length;

for (; i < l; ++i) {
  // const v = villain.item(i);
  const v = villain[i];
  v.classList.add('naughty');
}

console.log(villain);

// 5. 모든 캐릭터(Character)를 선택하세요.
const characters = document.querySelectorAll('.character');

// 6. 모든 캐릭터에 'star-wars' 클래스 이름을 추가하세요.
characters.forEach((c) => {
  c.classList.add('star-wars');
});
