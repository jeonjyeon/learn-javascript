// 기존 코드
() => {
  const accordions = Array.from(document.querySelectorAll('.accordion'));

  // 루프(순환)
  // 배열의 forEach() 메서드 활용
  accordions.forEach((accordion) => {
    const button = accordion.querySelector('.accordion__header button');

    button.addEventListener('click', () => {
      accordion.classList.toggle('is-open');
    });
  });
};

// 이벤트 위임 방식으로 코드 개선
(() => {
  const accordionContainer = document.querySelector('.accordion__container');

  accordionContainer.addEventListener('click', (e) => {
    const target = e.target;
    const button = target.closest('.accordion__header button');

    if (button) {
      button.closest('.accordion').classList.toggle('is-open');
    } else {
      console.log(target);
    }
  });
})();
