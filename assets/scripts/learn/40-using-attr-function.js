/* global attr, setAttr, getAttr */

() => {
  const h1 = document.querySelector('h1');

  // 속성 추가(쓰기)
  // - id="heading"
  // h1.id = 'headline'; // legacy way
  h1.setAttribute('id', 'heading');

  // - class="headline headline__level--1"
  // h1.className = 'headline headline__level--1'; // legacy way
  h1.classList.add('headline', 'headline__level--1');
  h1.setAttribute('class', 'headline headline__level--1');

  // - title="자바스크립트"
  // h1.title = '자바스크립트'; // legacy way
  h1.setAttribute('title', '자바스크립트');

  // - data-role="headline"
  h1.setAttribute('data-role', 'headline');

  // - data-level="1"
  h1.setAttribute('data-level', '1');

  // --------------------------------------------------
  // h1 요소에 mouseenter 이벤트 리스너 추가
  h1.addEventListener('mouseenter', () => {
    // 속성 읽기
    // - id
    // console.log(h1.id)  // legacy way
    console.log(h1.getAttribute('id'));
    console.log(attr(h1, 'id')); // 유틸리티 함수 사용

    // - class
    // console.log(h1.className)  // legacy way
    console.log(h1.getAttribute('class'));
    console.log(h1.classList.value);
    console.log(attr(h1, 'class')); // 유틸리티 함수 사용

    // - title
    // console.log(h1.title)  // legacy way
    console.log(h1.getAttribute('title'));
    console.log(attr(h1, 'title')); // 유틸리티 함수 사용

    // - data-role
    console.log(h1.getAttribute('data-role'));
    console.log(attr(h1, 'data-role')); // 유틸리티 함수 사용

    // - data-level
    console.log(h1.getAttribute('data-level'));
  });
};

(() => {
  const h1 = document.querySelector('h1');

  // 속성 쓰기
  // const writeAttr = attr(h1, 'id', 'heading');
  const writeAttr = setAttr(h1, 'id', 'heading');
  console.log(writeAttr);

  // 속성 읽기
  // const readAttr = attr(h1, 'id');
  const readAttr = getAttr(h1, 'id');
  console.log(readAttr);
})();
