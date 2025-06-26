/* eslint-disable no-unused-vars */

// ----------------------------------------------------------------------
// 내가 짠 코드
// ----------------------------------------------------------------------

// 첫번째 시도
() => {
  const carousel = document.querySelector('.carousel');
  const beforeButton = carousel.querySelector('[aria-label="이전 탐색"]');
  const afterButton = carousel.querySelector('[aria-label="다음 탐색"]');
  const carouselIndicators = carousel.querySelectorAll('.carousel__indicator');
  const CONTENT_WIDTH = 800;
  let currentIndex = 0;

  const carouselContentsWrapper = carousel.querySelector('.carousel__contents');
  const carouselContent = carousel.querySelectorAll('.carousel__content');

  // - 로딩되면 이전 버튼은 처음에 감춰져야 합니다.
  // - 처음 콘텐츠가 표시되면 이전 버튼은 감춰져야 합니다.
  // - 표시된 콘텐츠에 따라 이전/다음 버튼이 감춰지거나 표시되어야 합니다.
  beforeButton.style.display = 'none';

  // - 다음 탐색 버튼을 누르면 콘텐츠가 전환되어 다음 콘텐츠가 표시됩니다.
  afterButton.addEventListener('click', () => {
    beforeButton.style.display = 'block';
    currentIndex += 1;
    console.log(currentIndex);
    carouselContentsWrapper.style.transform = `translateX(-${CONTENT_WIDTH * currentIndex}px)`;

    if (currentIndex === 2) {
      afterButton.style.display = 'none';
    } else {
      // - 표시된 콘텐츠가 처음이 아닌 경우, 이전 버튼이 표시되어야 합니다.
      afterButton.style.display = 'block';
    }
  });

  // - 이전 탐색 버튼을 누르면 콘텐츠가 전환되어 이전 콘텐츠가 표시됩니다.
  beforeButton.addEventListener('click', () => {
    afterButton.style.display = 'block';
    currentIndex -= 1;
    carouselContentsWrapper.style.transform = `translateX(-${CONTENT_WIDTH * currentIndex}px)`;

    // - 마지막 콘텐츠가 표시되면 다음 버튼은 감춰져야 합니다.
    if (currentIndex === 0) {
      beforeButton.style.display = 'none';
    } else {
      // - 표시된 콘텐츠가 마지막이 아닌 경우, 다음 버튼이 표시되어야 합니다.
      beforeButton.style.display = 'block';
    }
  });

  // - 인디케이터를 클릭하면 해당 순서의 콘텐츠가 표시되어야 합니다.
  // - 이전 활성 인디케이터와 클릭한 인디케이터는 활성 상태가 서로 전환되어야 합니다.
};

// 두번째 시도
() => {
  const carousel = document.querySelector('.carousel');
  const beforeButton = carousel.querySelector('[aria-label="이전 탐색"]');
  const afterButton = carousel.querySelector('[aria-label="다음 탐색"]');
  const carouselIndicators = carousel.querySelectorAll('.carousel__indicator');

  const carouselContentsWrapper = carousel.querySelector('.carousel__contents');
  const carouselContent = carouselContentsWrapper.querySelectorAll('.carousel__content');

  const CONTENT_WIDTH = 800;
  let currentIndex = 0;

  // ------------------------------------------------------------
  // 초기 상태 설정
  // 첫 콘텐츠이므로 이전 버튼 숨김
  beforeButton.style.display = 'none';

  // 현재 콘텐츠 외의 링크에 탭 접근 막기
  tabFocus();

  // 초기 인디케이터 상태
  indicatorStatus();

  // ------------------------------------------------------------
  // 함수 추출
  // 탭 포커스 설정
  function tabFocus() {
    carouselContent.forEach((content, index) => {
      const link = content.querySelector('a');
      if (!link) return;
      if (index === currentIndex) {
        link.tabIndex = 0; // 현재 보여지는 콘텐츠 → 탭 키로 접근 가능
      } else {
        link.tabIndex = -1; // 다른 콘텐츠 → 탭 키로 접근 불가능
      }
    });
  }

  // 인디케이터 상태
  function indicatorStatus() {
    carouselIndicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add('is-selected');
      } else {
        indicator.classList.remove('is-selected');
      }
    });
  }

  // ------------------------------------------------------------
  // 버튼 이벤트 리스너 등록
  // ▶ 다음 버튼 클릭
  afterButton.addEventListener('click', () => {
    if (currentIndex < carouselContent.length - 1) {
      currentIndex++;

      // 콘텐츠 위치 이동
      const offsetX = -CONTENT_WIDTH * currentIndex;
      carouselContentsWrapper.style.transform = 'translateX(' + offsetX + 'px)';

      // 탭 포커스 설정
      tabFocus();

      // 버튼 표시
      if (currentIndex === carouselContent.length - 1) {
        afterButton.style.display = 'none';
      } else {
        afterButton.style.display = 'block';
      }

      beforeButton.style.display = 'block';

      // 인디케이터 상태
      indicatorStatus();
    }
  });

  // ▶ 이전 버튼 클릭
  beforeButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;

      // 콘텐츠 위치 이동
      const offsetX = -CONTENT_WIDTH * currentIndex;
      carouselContentsWrapper.style.transform = 'translateX(' + offsetX + 'px)';

      // 탭 포커스 설정
      tabFocus();

      // 버튼 표시
      if (currentIndex === 0) {
        beforeButton.style.display = 'none';
      } else {
        beforeButton.style.display = 'block';
      }

      afterButton.style.display = 'block';

      // 인디케이터 상태
      indicatorStatus();
    }
  });

  carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;

      // 콘텐츠 위치 이동
      const offsetX = -CONTENT_WIDTH * currentIndex;
      carouselContentsWrapper.style.transform = 'translateX(' + offsetX + 'px)';

      // 버튼 표시
      if (currentIndex === carouselContent.length - 1) {
        afterButton.style.display = 'none';
      } else {
        afterButton.style.display = 'block';
      }

      if (currentIndex === 0) {
        beforeButton.style.display = 'none';
      } else {
        beforeButton.style.display = 'block';
      }

      // 인디케이터 상태
      indicatorStatus();
    });
  });
};
