// ============================================================================
// 탭 UI 구현 - 방식 1: Array 변환 활용 (실무 권장)
//
// 장점: 간결한 코드, Array 메서드 활용, 높은 가독성
// 단점: 초기 변환 비용 (미미함)
// 사용 케이스: 일반적인 탭 UI, 팀 프로젝트
// ============================================================================
() => {
  // 1. 제어 대상, 선택된 인덱스 찾기

  // 제어 대상 찾기
  const tabsContainer = document.querySelector('.tabs__container');
  const tabs = Array.from(tabsContainer.querySelectorAll('.tab'));
  const tabContents = Array.from(tabsContainer.querySelectorAll('.tab__content'));
  const SELECTED_CLASSNAME = 'is-selected';

  // 선택되지 않음을 나타내는 값 -1로 초기화
  let selectedIndex = -1;

  //선택된 인덱스 찾기
  // tabs 배열을 순회하면서, 'is-selected' 클래스를 가진 탭의 인덱스 찾기
  for (let i = 0, l = tabs.length; i < l; ++i) {
    const tab = tabs[i];
    if (tab.classList.contains(SELECTED_CLASSNAME)) {
      selectedIndex = i;
      break;
    }
  }

  // --------------------------------------------------------------------------
  // 2. 모든 탭에 이벤트 리스너 추가

  // for...of 문
  () => {
    for (const tab of tabs) {
      tab.addEventListener('click', () => {
        console.log(tab);
      });
    }
  };

  // forEach() 활용
  () => {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        console.log(tab);
      });
    });
  };

  // --------------------------------------------------------------------------
  // 3. 탭 클릭 시 이전 선택 해제 및 현재 선택 활성화
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // 1. 이전 탭/콘텐츠 비활성화
      if (selectedIndex !== -1) {
        tabs[selectedIndex].classList.remove(SELECTED_CLASSNAME);
        tabContents[selectedIndex].classList.remove(SELECTED_CLASSNAME);
      }

      // 2. 선택된 인덱스 갱신
      selectedIndex = tabs.indexOf(tab);

      // 3. 현재 탭/콘텐츠 활성화
      tabs[selectedIndex].classList.add(SELECTED_CLASSNAME);
      tabContents[selectedIndex].classList.add(SELECTED_CLASSNAME);
    });
  });
};

// ============================================================================
// 탭 UI 구현 - 방식 2: NodeList 직접 사용 (학습용)
//
// 장점: DOM API 직접 활용, 다양한 구현 패턴 학습
// 단점: 코드 복잡성 증가
// 사용 케이스: DOM API 학습, 성능 최적화가 중요한 경우
// 학습 포인트: 수동 인덱스 탐색 vs forEach 인덱스 매개변수
// ============================================================================
(() => {
  // --------------------------------------------------------------------------
  // 1. 제어 대상, 선택된 인덱스 찾기

  // 제어 대상 찾기
  const tabsContainer = document.querySelector('.tabs__container');
  const tabs = tabsContainer.querySelectorAll('.tab');
  const tabContents = tabsContainer.querySelectorAll('.tab__content');

  // 활성 상태 클래스 이름
  const SELECTED_CLASSNAME = 'is-selected';

  // 선택된 인덱스 찾기 - for문 + break
  // 선택되지 않음을 나타내는 값 -1 초깃값 구성
  let selectedIndex = -1;

  for (let i = 0, l = tabs.length; i < l; i += 1) {
    const tab = tabs.item(i);
    if (tab.classList.contains(SELECTED_CLASSNAME)) {
      selectedIndex = i;
      break;
    }
  }

  // --------------------------------------------------------------------------
  // 2. 이전 선택된 대상(탭, 탭 콘텐츠) 비활성화
  () => {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        // 선택된 탭, 탭 콘텐츠가 존재할 경우에만 조건 블록 실행
        if (selectedIndex > -1) {
          // 이전 활성 상태의 탭 요소에서 활성 상태 클래스 이름 제거
          const selectedTab = tabs.item(selectedIndex);
          selectedTab.classList.remove(SELECTED_CLASSNAME);
          // 이전 활성 상태의 탭 콘텐츠 요소에서 활성 상태 클래스 이름 제거
          const selectedTabContent = tabContents.item(selectedIndex);
          selectedTabContent.classList.remove(SELECTED_CLASSNAME);
        }
      });
    });
  };

  // --------------------------------------------------------------------------
  // 3. 탭 클릭 이벤트 처리
  // 각 탭에 클릭 이벤트 리스너를 등록하여 탭 전환 기능 구현
  // 3-1. 현재 선택된 대상 활성화 (for문으로 인덱스 찾기)
  () => {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        // 이전 선택된 탭이 있는지 확인
        // 처음 클릭 시에는 selectedIndex가 -1이므로 조건이 false
        // 한 번 클릭 후에는 selectedIndex가 0 이상이 되어 조건이 true가 됨
        if (selectedIndex > -1) {
          // 이전 활성 상태의 탭 요소에서 활성 상태 클래스 이름 제거
          const selectedTab = tabs.item(selectedIndex);
          selectedTab.classList.remove(SELECTED_CLASSNAME);
          // 이전 활성 상태의 탭 요소에서 활성 상태 클래스 이름 제거
          const selectedTabContent = tabContents.item(selectedIndex);
          selectedTabContent.classList.remove(SELECTED_CLASSNAME);
        }

        // 현재 클릭된 탭의 인덱스 찾기
        let activeIndex;

        // tabs를 순회하면서 현재 클릭한 tab과 같은 요소를 찾기
        // 일치하는 요소를 찾으면 해당 인덱스를 activeIndex에 저장하고 반복문 종료
        for (let i = 0, l = tabs.length; i < l; ++i) {
          const compareTab = tabs.item(i);
          if (compareTab === tab) {
            activeIndex = i;
            break;
          }
        }

        // 현재 활성 상태 인덱스에 해당되는 탭 요소에서 활성 상태 클래스 이름 추가
        const activeTab = tabs.item(activeIndex);
        activeTab.classList.add(SELECTED_CLASSNAME);

        // 현재 활성 상태 인덱스에 해당되는 탭 콘텐츠 요소에서 활성 상태 클래스 이름 추가
        const activeTabContent = tabContents.item(activeIndex);
        activeTabContent.classList.add(SELECTED_CLASSNAME);

        // selectedIndex를 activeIndex로 갱신하여 다음 클릭을 준비
        selectedIndex = activeIndex;
      });
    });
  };

  // 3-2. 현재 선택된 대상 활성화 (forEach 인덱스 활용)
  // forEach의 두 번째 매개변수(인덱스)를 활용하여 별도의 인덱스 탐색 과정 생략
  (() => {
    // forEach((요소, 인덱스) => {}) 형태로 각 탭과 해당 인덱스를 동시에 받음
    tabs.forEach((tab, activeIndex) => {
      tab.addEventListener('click', () => {
        // 이전 선택된 탭 비활성화 (첫 클릭 시에는 실행되지 않음)
        if (selectedIndex > -1) {
          const selectedTab = tabs.item(selectedIndex);
          selectedTab.classList.remove(SELECTED_CLASSNAME);
          const selectedTabContent = tabContents.item(selectedIndex);
          selectedTabContent.classList.remove(SELECTED_CLASSNAME);
        }

        // forEach에서 제공받은 activeIndex를 바로 사용 (별도 탐색 불필요)
        // 현재 활성 상태 인덱스에 해당되는 탭 요소에서 활성 상태 클래스 이름 추가
        const activeTab = tabs.item(activeIndex);
        activeTab.classList.add(SELECTED_CLASSNAME);
        // 현재 활성 상태 인덱스에 해당되는 탭 콘텐츠 요소에서 활성 상태 클래스 이름 추가
        const activeTabContent = tabContents.item(activeIndex);
        activeTabContent.classList.add(SELECTED_CLASSNAME);

        // selectedIndex를 현재 활성화된 인덱스로 갱신
        // 다음 클릭 시 이전 탭을 비활성화하기 위해 필요
        selectedIndex = activeIndex;
      });
    });
  })();
})();
