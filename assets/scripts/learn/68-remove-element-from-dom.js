// --------------------------------------------------------------------------
// 📌 DOM에서 요소 제거
// --------------------------------------------------------------------------

(() => {
  // 동적으로 요소들 추가
  const section = document.querySelector('section');
  section.insertAdjacentHTML(
    'beforeend',
    `
  <ul class="members">
    <li>이지아</li>
    <li>박현일</li>
    <li>최상준</li>
    <li>하준경</li>
  </ul>  
`
  );

  // 요소 제거
  const willRemoveElement = section.querySelector('.members li:nth-child(3)');

  // 타이머
  setTimeout(() => {
    () => {
      // parentElement.removeChild(childElement)
      // willRemoveElement.parentElement.removeChild(willRemoveElement);

      // element.remove()
      willRemoveElement.remove();
    };

    (() => {
      const parent = willRemoveElement.parentElement;
      const removedElement = parent.removeChild(willRemoveElement);

      // 제거된 요소를 다시 하준경 뒤에
      // parent.append(removedElement);

      // 제거된 요소를 다시 이지아 앞에
      // parent.prepend(removedElement)

      // 제거된 요소를 다시 박현일 뒤에
      // const children = [...parent.children]
      // children.at(-1).before(removedElement)

      // 제거된 요소를 다시 박현일 앞에
      const [, park] = parent.children;
      park.before(removedElement);
    })();
  }, 1500);
})();
