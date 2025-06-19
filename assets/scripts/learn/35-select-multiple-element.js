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
(() => {
  // Node vs. ElementNode
  // HTML -> DOM의 모든 것은 Node입니다.
  // 여러 종류의 Node 중, 우리가 가장 많이 사용하는 노드는 요소 노드(ElementNode)입니다.
})();
