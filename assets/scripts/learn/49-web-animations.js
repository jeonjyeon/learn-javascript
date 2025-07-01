// ------------------------------------------------------------
// 📌 웹 애니메이션
// ------------------------------------------------------------
// 1. CSS ViewTransitionTypeSet
// 2. CSS Animation
// 3. JavaScript Animation
// 4. Web Animations API
// ------------------------------------------------------------

() => {
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
};

// 웹 애니메이션 API 활용
(() => {
  // 웹 애니메이션 API를 적용해 볼을 클릭하면
  // 스케일 조정되도록 애니메이션이 "재생(play)"됩니다. (무한 반복: Infinity)
  // 다시 볼을 클릭하면 애니메이션이 "일시정지(pause)"됩니다.

  const ballElement = document.querySelector('.ball');

  const animation = ballElement.animate(
    [
      { scale: 1, offset: 0 },
      { scale: 1.2, offset: 0.2 },
      { scale: 0.7, offset: 0.45 },
      { scale: 2.5, offset: 0.62 },
      { scale: 0.3, offset: 0.84 },
      { scale: 1, offset: 1 },
    ],
    {
      duration: 1800,
      iterations: Infinity,
      easing: 'cubic-bezier(0.68,-0.55,0.27,1.55)',
    }
  );

  // 애니메이션 일시정지
  animation.pause();

  // 상태 변수 설정
  let isAnimating = false;

  ballElement.addEventListener('click', () => {
    if (!isAnimating) {
      // 애니메이션 재생
      animation.play();
    } else {
      // 애니메이션 일시정지
      animation.pause();
    }

    // 상태 변경
    isAnimating = !isAnimating;
  });
})();
