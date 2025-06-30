// ------------------------------------------------------------
// 📌 웹 애니메이션
// ------------------------------------------------------------
// 1. CSS ViewTransitionTypeSet
// 2. CSS Animation
// 3. JavaScript Animation
// ------------------------------------------------------------

(() => {
  const ballElement = document.querySelector('.ball');
  const TRANSITION_CLASSNAME = 'is-transition';

  // click Event
  ballElement.addEventListener('click', (e) => {
    // sytle 속성을 사용해 속성의 상태 변경
    // 트랜지션 트리거
    const ball = e.currentTarget;

    ball.style.setProperty('--fill', '#e54d26');
    ball.style.setProperty('--size', '100px');

    // ------------------------------------------------------------
    // 토글
    // e.currentTarget.classList.toggle('is-transition');

    // if문 (add, remove)
    // if (ballElement.classList.contains('is-transition')) {
    //   ballElement.classList.remove('is-transition');
    // } else {
    //   ballElement.classList.add('is-transition');
    // }
  });

  // ------------------------------------------------------------
  // MouseEnter / Mouseleave Events
  // ballElement.addEventListener('mouseenter', (e) => {
  //   e.currentTarget.classList.add(TRANSITION_CLASSNAME);
  // });

  // ballElement.addEventListener('mouseleave', (e) => {
  //   e.currentTarget.classList.remove(TRANSITION_CLASSNAME);
  // });
})();
