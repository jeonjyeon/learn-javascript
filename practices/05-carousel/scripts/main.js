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

// ----------------------------------------------------------------------
// 수업 때 짠 코드
// ----------------------------------------------------------------------

// 1. 문서에서 제어할 대상 요소 선택(찾기)
() => {
  // 캐러셀 컴포넌트 찾기
  const caraousel = document.querySelector('.carousel');

  // 캐러셀 컨텐츠 래퍼
  const contentWrapper = caraousel.querySelector('.carousel__contents');

  // 이전 탐색 버튼 찾기
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');

  // 다음 탐색 버튼 찾기
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');
  console.log(prevButton, nextButton, contentWrapper);
};

// 2. 클래스 이름 상수로 설정
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  // 활성 상태 나타내는 클래스 이름 지정(우지 보수 고려)
  const SELECTED_CLASSNAME = 'is-selected';
};

// 3-1. 현재/다음 콘텐츠 탐색 | 다음 탐색 기능(함수) 구현
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  // 다음 탐색 버튼 클릭 이벤트 리스너 추가
  // 구현할 기능은 다음 콘텐츠 탐색
  // - 현재/다음 콘텐츠 탐색
  nextButton.addEventListener('click', () => {
    // 현재 선택된 콘텐츠 찾기
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);

    // 다음에 선택될 콘텐츠 탐색
    const nextContent = selectedContent.nextElementSibling;
  });
};

// 3-2. 다음 콘텐츠로 이동 | 다음 탐색 기능(함수) 구현
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    // 다음 콘텐츠로 이동
    // 다음 콘텐츠의 브라우저에 의해 계산된 너비 값을 읽기
    // 콘텐츠의 너비가 바뀔 수도 있기 때문에, 상수를 쓰지 않고, 브라우저에서 스타일을 읽어오는 것이 좋다.
    // css에서 left를 이용했기 때문에 설정된 left 값을 읽어오면 된다.
    // 유지보수 굿
    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    console.log(distance);

    // 콘텐츠들을 감싼 래퍼에 transform 인라인 스타일 설정 (ex. -800px, -1600px)
    // contentWrapper.style.setProperty('transform', 'translateX(-800px)'); // 하드코딩
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');
  });
};

// 3-3. 선택된 상태 변경 | 다음 탐색 기능(함수) 구현
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;
    const distance = getComputedStyle(nextContent).getPropertyValue('left');

    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    // 선택된 상태 변경
    // 이전 선택된 콘텐츠에서 활성 상태 클래스 이름 제거
    selectedContent.classList.remove(SELECTED_CLASSNAME);

    // 현재 선택된 콘텐츠에서 활성 상태 클래스 이름 추가
    nextContent.classList.add(SELECTED_CLASSNAME);
  });
};

// 3-4. 다음 탐색 버튼 감춤 | 다음 탐색 기능(함수) 구현
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;
    const distance = getComputedStyle(nextContent).getPropertyValue('left');

    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    // 다음 탐색 버튼 감춤
    // if (!nextContent.nextElementSibling) {
    //   nextButton.hidden = true;
    // }
    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });
};

// 4-1. 현재/이전 콘텐츠 탐색 | 이전 탐색 기능(함수) 구현
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;
    const distance = getComputedStyle(nextContent).getPropertyValue('left');

    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    // 현재 선택된 콘텐츠 찾기
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    // 선택된 콘텐츠의 이전 콘텐츠 탐색
    const prevContent = selectedContent.previousElementSibling;
    console.log(prevContent);
  });
};

// 4-2. 이전 콘텐츠로 이동 | 이전 탐색 기능(함수) 구현
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;
    const distance = getComputedStyle(nextContent).getPropertyValue('left');

    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    // 이전 콘텐츠로 이동
    // prevContent로부터 거리를 계산해서 가져와야 함
    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    // contentWrapper에 transform 스타일 지정
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');
  });
};

// 4-3. 선택된 상태 변경 | 이전 탐색 기능(함수) 구현
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    // 선택된 상태 변경
    // 이전 선택된 콘텐츠에서 활성 상태 클래스 이름 제거
    selectedContent.classList.remove(SELECTED_CLASSNAME);
    // 현재 선택된 콘텐츠에 활성 상태 클래스 이름 추가
    prevContent.classList.add(SELECTED_CLASSNAME);
  });
};

// 4-4. 이전 탐색 버튼 감춤 | 이전 탐색 기능(함수) 구현
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });
};

// 5-1. 이전/다음 탐색 버튼 표시 | 이전/다음 탐색 기능(함수) 구현
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  // 다음 탐색 버튼을 사용자가 눌렀을 때
  nextButton.addEventListener('click', () => {
    // 만약 이전 탐색 버튼의 hidden 속성 값이 true라면?
    if (prevButton.hidden) {
      console.log('다음 탐색 버튼의 hidden 속성이 true');
      // 이전 탐색 버튼의 hidden 속성 값을 false로 설정해라.
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  // 이전 탐색 버튼을 사용자가 눌렀을 때
  prevButton.addEventListener('click', () => {
    // 만약 다음 탐색 버튼의 hidden 속성 값이 true라면?
    if (nextButton.hidden) {
      console.log('다음 탐색 버튼의 hidden 속성이 true');
      // 다음 탐색 버튼의 hidden 속성 값을 false로 설정해라.
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });
};

// 5-2. 로딩 시, 이전 탐색 버튼 감춤
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  // 로딩 시, 이전 탐색 버튼을 숨기고 싶지만
  // 현재 is-selected가 항상 첫 번째 콘텐츠에 있다는 보장이 없고,
  // is-selected가 없는 경우도 있을 수 있어 위험함.
  // 따라서 아래와 같이 무조건 숨기는 건 안전하지 않음.
  // 안전한 방식은 5-3 참고
  prevButton.hidden = true;

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });
};

// 5-3 로딩 시, 이전/다음 탐색 버튼 표시 설정
// - 사용자가 활성 상태 클래스 이름을 설정하지 않을 경우 경고
// - 첫 콘텐츠인 경우, 이전 탐색 버튼 감춤
// - 마지막 콘텐츠인 경우, 다음 탐색 버튼 감춤
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  // 문서에서 콘텐츠를 순회(루프, Loop)해서
  // 콘텐츠 중에 하나가 활성 상태 클래스 이름을 소유하고 있는지 확인
  // 확인된 경우 활성(선택된) 상태의 인덱스를 변수에 기억

  // 활성 상태 인덱스를 기억할 변수를 정의하자
  let selectedIndex = -1;

  // for 반복문 (모든 콘텐츠를 순환 활성 상태 확인)
  for (let i = 0, l = contents.length; i < l; ++i) {
    // 순환 중인 콘텐츠에 활성 상태 클래스 이름이 있는 지 확인
    // console.log('순환 중')

    if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
      // console.log(i + 1 + '번째 콘텐츠가 활성 클래스 이름을 가지고 있어요')
      selectedIndex = i;
      // 활성 상태 클래스 이름을 가진 콘텐츠를 찾았으니 더 이상의 순환은 무의미하다!
      // 그러니 멈춰라!!
      break;
    }
  }

  // - 사용자가 활성 상태 클래스 이름을 설정하지 않을 경우, 경고
  // - 첫 콘텐츠 인경우, 이전 탐색 버튼 감춤
  // - 마지막 콘텐츠인 경우, 다음 탐색 버튼 감춤

  // 조건 처리
  // 활성 클래스를 가진 요소의 인덱스가 -1이면
  if (selectedIndex === -1) {
    console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    // alert('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
  }
  // 활성 클래스를 가진 요소의 인덱스가 0이면
  else if (selectedIndex === 0) {
    // 이전 탐색 버튼 감춤
    prevButton.hidden = true;
  }
  // 활성 클래스를 가진 요소의 인덱스가  모든 콘텐츠 개수보다 1 작은 값이라면
  // 활성 클래스를 가진 요소가 맨 마지막 요소라면?
  else if (selectedIndex === contents.length - 1) {
    nextButton.hidden = true;
  }

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });
};

// 6. 버튼 숨겨진 상태 설정 기능(함수) 추출
() => {
  const caraousel = document.querySelector('.carousel');
  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');
  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  settingUpButtonsHiddenStatus();

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });

  // 버튼 숨겨진 상태 설정 기능(함수)
  // setting Up Buttons Hidden Status
  function settingUpButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }
  }
};

// 7-1. 인디케이터 탐색 | 인디케이터
() => {
  const caraousel = document.querySelector('.carousel');

  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');

  // 인디케이터 래퍼 요소 찾기
  const indicatorWrapper = caraousel.querySelector('.carousel__indicators');
  // 인디케이터 (버튼) 요소 찾기
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator');

  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  settingUpButtonsHiddenStatus();

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });

  function settingUpButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }
  }
};

// 7-2. 인디케이터의 집합을 순환해서 이벤트 리스너 추가 | 인디케이터
() => {
  const caraousel = document.querySelector('.carousel');

  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');

  const indicatorWrapper = caraousel.querySelector('.carousel__indicators');
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator');

  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  settingUpButtonsHiddenStatus();

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });

  // 인디케이터 집합을 순환 처리
  // for...of
  for (const indicator of indicators) {
    // 각 인디케이터에 이벤트 리스너 추가
    indicator.addEventListener('click', () => {
      console.log(indicator);
    });
  }

  // forEach
  // indicators.forEach((indicator) => {
  //   // 각 인디케이터에 이벤트 리스너 추가
  //   indicator.addEventListener('click', () => {
  //     console.log(indicator);
  //   });
  // });

  function settingUpButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }
  }
};

// 7-3. 탐색한 인덱스 찾기 | 인디케이터
() => {
  const caraousel = document.querySelector('.carousel');

  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');

  const indicatorWrapper = caraousel.querySelector('.carousel__indicators');
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator');

  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  settingUpButtonsHiddenStatus();

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });

  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      let selectedIndex;

      for (let i = 0, l = indicators.length; i < l; i += 1) {
        // 순환 중인 상태의 인디케이터와 현재 클릭한 인디케이터가 동일한가?
        if (indicators.item(i) === indicator) {
          // 동일하다면? 그 인덱스가 선택된 인덱스이다.
          selectedIndex = i;
          console.log(selectedIndex);
          break;
        }
      }
    });
  }

  function settingUpButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }
  }
};

// 7-4. 탐색한 콘텐츠 찾기 | 인디케이터
() => {
  const caraousel = document.querySelector('.carousel');

  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');

  const indicatorWrapper = caraousel.querySelector('.carousel__indicators');
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator');

  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  settingUpButtonsHiddenStatus();

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });

  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      let selectedIndex;

      for (let i = 0, l = indicators.length; i < l; i += 1) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      // 탐색한 콘텐츠 찾기
      const activeContent = contents.item(selectedIndex);
      console.log(activeContent);
    });
  }

  function settingUpButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }
  }
};

// 7-5. 탐색한 콘텐츠로 전환(이동) | 인디케이터
() => {
  const caraousel = document.querySelector('.carousel');

  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');

  const indicatorWrapper = caraousel.querySelector('.carousel__indicators');
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator');

  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  settingUpButtonsHiddenStatus();

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });

  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      let selectedIndex;

      for (let i = 0, l = indicators.length; i < l; i += 1) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      const activeContent = contents.item(selectedIndex);

      // 탐색한 콘텐츠로 이동
      const distance = getComputedStyle(activeContent).getPropertyValue('left');
      contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');
    });
  }

  function settingUpButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }
  }
};

// 7-6. 선택된 콘텐츠 상태 변경 | 인디케이터
() => {
  const caraousel = document.querySelector('.carousel');

  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');

  const indicatorWrapper = caraousel.querySelector('.carousel__indicators');
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator');

  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  settingUpButtonsHiddenStatus();

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });

  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      let selectedIndex;

      for (let i = 0, l = indicators.length; i < l; i += 1) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      const activeContent = contents.item(selectedIndex);
      const distance = getComputedStyle(activeContent).getPropertyValue('left');
      contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

      // 선택된 콘텐츠 상태 변경
      // 이전에 선택된 콘텐츠 찾기
      const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);

      // 이전 선택된 콘텐츠에 활성 클래스 이름 제거
      selectedContent.classList.remove(SELECTED_CLASSNAME);

      // 현재 선택된 콘텐츠에 활성 클래스 이름 추가
      activeContent.classList.add(SELECTED_CLASSNAME);
    });
  }

  function settingUpButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }
  }
};

// 7-7. 선택된 인디케이터 상태 변경 | 인디케이터
() => {
  const caraousel = document.querySelector('.carousel');

  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');

  const indicatorWrapper = caraousel.querySelector('.carousel__indicators');
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator');

  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  settingUpButtonsHiddenStatus();

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });

  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      let selectedIndex;

      for (let i = 0, l = indicators.length; i < l; i += 1) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      const activeContent = contents.item(selectedIndex);
      const distance = getComputedStyle(activeContent).getPropertyValue('left');
      contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

      const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
      selectedContent.classList.remove(SELECTED_CLASSNAME);
      activeContent.classList.add(SELECTED_CLASSNAME);

      // 이전 선택된 인디케이터 찾기
      const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME);
      // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
      selectedIndicator.classList.remove(SELECTED_CLASSNAME);

      // 현재 선택된 인디케이터에서 활성 클래스 이름 추가
      indicator.classList.add(SELECTED_CLASSNAME);
    });
  }

  function settingUpButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }
  }
};

// 8-1. 다음 탐색 버튼 동기화 | 상태 동기화
() => {
  const caraousel = document.querySelector('.carousel');

  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');

  const indicatorWrapper = caraousel.querySelector('.carousel__indicators');
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator');

  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  settingUpButtonsHiddenStatus();

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;

    // 사용자가 다음 탐색 버튼을 누르면
    // 인디케이터 중에 현재 활성 상태인 것 찾기
    const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextIndicator = selectedIndicator.nextElementSibling;

    // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
    selectedIndicator.classList.remove(SELECTED_CLASSNAME);

    // 다음 선택될 인디케이터에서 활성 클래스 이름 추가
    nextIndicator.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;
  });

  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      let selectedIndex;

      for (let i = 0, l = indicators.length; i < l; i += 1) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      const activeContent = contents.item(selectedIndex);
      const distance = getComputedStyle(activeContent).getPropertyValue('left');
      contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

      const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
      selectedContent.classList.remove(SELECTED_CLASSNAME);
      activeContent.classList.add(SELECTED_CLASSNAME);

      const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME);
      selectedIndicator.classList.remove(SELECTED_CLASSNAME);
      indicator.classList.add(SELECTED_CLASSNAME);
    });
  }

  function settingUpButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }
  }
};

// 8-2. 이전 탐색 버튼 동기화 | 상태 동기화
() => {
  const caraousel = document.querySelector('.carousel');

  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');

  const indicatorWrapper = caraousel.querySelector('.carousel__indicators');
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator');

  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  settingUpButtonsHiddenStatus();

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;

    const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextIndicator = selectedIndicator.nextElementSibling;

    selectedIndicator.classList.remove(SELECTED_CLASSNAME);
    nextIndicator.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    // 사용자가 이전 탐색 버튼을 누르면
    // 인디케이터 중에 현재 활성 상태인 것 찾기
    const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevIndicator = selectedIndicator.previousElementSibling;

    // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
    selectedIndicator.classList.remove(SELECTED_CLASSNAME);

    // 다음 선택될 인디케이터에서 활성 클래스 이름 추가
    prevIndicator.classList.add(SELECTED_CLASSNAME);
  });

  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      let selectedIndex;

      for (let i = 0, l = indicators.length; i < l; i += 1) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      const activeContent = contents.item(selectedIndex);
      const distance = getComputedStyle(activeContent).getPropertyValue('left');
      contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

      const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
      selectedContent.classList.remove(SELECTED_CLASSNAME);
      activeContent.classList.add(SELECTED_CLASSNAME);

      const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME);
      selectedIndicator.classList.remove(SELECTED_CLASSNAME);
      indicator.classList.add(SELECTED_CLASSNAME);
    });
  }

  function settingUpButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }
  }
};

// 8-3. 이전 탐색 버튼 동기화 | 상태 동기화
() => {
  const caraousel = document.querySelector('.carousel');

  const contentWrapper = caraousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');

  const indicatorWrapper = caraousel.querySelector('.carousel__indicators');
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator');

  const prevButton = caraousel.querySelector('[aria-label^="이전"]');
  const nextButton = caraousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  settingUpButtonsHiddenStatus();

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) {
      prevButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    if (!nextContent.nextElementSibling) nextButton.hidden = true;

    const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextIndicator = selectedIndicator.nextElementSibling;

    selectedIndicator.classList.remove(SELECTED_CLASSNAME);
    nextIndicator.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevIndicator = selectedIndicator.previousElementSibling;

    selectedIndicator.classList.remove(SELECTED_CLASSNAME);
    prevIndicator.classList.add(SELECTED_CLASSNAME);
  });

  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      let selectedIndex;

      for (let i = 0, l = indicators.length; i < l; i += 1) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      // selectedIndex 값이 처음(0)일 때
      // -> prevButton 숨긴다, nextButton 보인다
      if (selectedIndex === 0) {
        prevButton.hidden = true;
        nextButton.hidden = false;
      }
      // selectedIndex 값이 마지막 인덱스(indicators.length -1)일 때
      // -> prevButton 보인다, nextButton 숨긴다
      else if (selectedIndex === indicators.length - 1) {
        prevButton.hidden = false;
        nextButton.hidden = true;
      }
      // 둘 다 아닐 때
      // -> prevButton, nextButton 둘 다 보인다
      else {
        prevButton.hidden = false;
        nextButton.hidden = false;
      }

      const activeContent = contents.item(selectedIndex);
      const distance = getComputedStyle(activeContent).getPropertyValue('left');
      contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

      const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
      selectedContent.classList.remove(SELECTED_CLASSNAME);
      activeContent.classList.add(SELECTED_CLASSNAME);

      const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME);
      selectedIndicator.classList.remove(SELECTED_CLASSNAME);
      indicator.classList.add(SELECTED_CLASSNAME);
    });
  }

  function settingUpButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }
  }
};

// 9. 키보드 접근 논리적 초점 이동 | 접근성 개선
(() => {
  const carousel = document.querySelector('.carousel');

  const contentWrapper = carousel.querySelector('.carousel__contents');
  const contents = contentWrapper.querySelectorAll('.carousel__content');

  const indicatorWrapper = carousel.querySelector('.carousel__indicators');
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator');

  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = 'is-selected';

  settingUpButtonHiddenStatus();
  settingTabindexControl();

  nextButton.addEventListener('click', () => {
    settingTabindexControl();

    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) nextButton.hidden = true;

    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const nextIndicator = selectedIndicator.nextElementSibling;

    selectedIndicator.classList.remove(SELECTED_CLASSNAME);
    nextIndicator.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener('click', () => {
    settingTabindexControl();

    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME);
    const prevIndicator = selectedIndicator.previousElementSibling;

    selectedIndicator.classList.remove(SELECTED_CLASSNAME);

    prevIndicator.classList.add(SELECTED_CLASSNAME);
  });

  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      settingTabindexControl();

      let selectedIndex;

      for (let i = 0, l = indicators.length; i < l; i += 1) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      // selectedIndex 값이 처음(0)일 때
      // -> prevButton 숨긴다, nextButton 보인다
      if (selectedIndex === 0) {
        prevButton.hidden = true;
        nextButton.hidden = false;
      }

      // selectedIndex 값이 마지막 인덱스(indicators.length -1)일 때
      // -> prevButton 보인다, nextButton 숨긴다
      else if (selectedIndex === indicators.length - 1) {
        prevButton.hidden = false;
        nextButton.hidden = true;
      }

      // 둘 다 아닐 때
      // -> prevButton, nextButton 둘 다 보인다
      else {
        prevButton.hidden = false;
        nextButton.hidden = false;
      }

      const activeContent = contents.item(selectedIndex);
      const distance = getComputedStyle(activeContent).getPropertyValue('left');
      contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

      const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME);
      selectedContent.classList.remove(SELECTED_CLASSNAME);
      activeContent.classList.add(SELECTED_CLASSNAME);

      const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME);
      selectedIndicator.classList.remove(SELECTED_CLASSNAME);
      indicator.classList.add(SELECTED_CLASSNAME);
    });
  }

  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.');
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }
  }

  function settingTabindexControl() {
    // 로딩 시, 활성 상태(화면에 표시되는)의
    // 콘텐츠 내부의 링크 외 다른 링크에는 tabindex="-1" 설정
    for (const content of contents) {
      if (content.classList.contains(SELECTED_CLASSNAME)) {
        content.querySelector('a').removeAttribute('tabindex');
      } else {
        content.querySelector('a').setAttribute('tabindex', '-1');
      }
    }
  }
})();
