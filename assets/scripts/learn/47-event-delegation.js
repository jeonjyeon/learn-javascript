// --------------------------------------------------
// 📌 이벤트 위임
// --------------------------------------------------

// 요소 집합 루프(반복, 순환)하여 이벤트 리스너를 각각 추가
// 이벤트 리스너 5개 정의
() => {
  const linkList = document.querySelector('.link-list');
  const links = linkList.querySelectorAll('a');

  // links.forEach((link, index) => {
  //   link.addEventListener('click', (e) => {
  //     console.log(index + 1); // 1, 2, 3, 4, 5
  //     // 브라우저 기본 작동 방지
  //     if (!e.defaultPrevented) e.preventDefault();

  //     const aElement = e.currentTarget;
  //     console.log(aElement);
  //   });
  // });

  links.forEach((link, index) => {
    const listener = (e) => {
      console.log(index + 1); // 1, 2, 3, 4, 5
      // 브라우저 기본 작동 방지
      if (!e.defaultPrevented) e.preventDefault();

      const aElement = e.currentTarget;
      console.log(aElement);
    };

    link.addEventListener('click', listener);
  });
};

// 이벤트 대상
() => {
  const linkList = document.querySelector('.link-list');

  linkList.addEventListener('click', (e) => {
    if (!e.defaultPrevented) e.preventDefault();

    console.log('e.currentTarget = ', e.currentTarget); // 이벤트 리스너를 추가한 대상(요소)
    console.log('e.target =', e.target); // ???
  });
};

// 이벤트 대상 확인
() => {
  const linkList = document.querySelector('.link-list');

  linkList.addEventListener('click', (e) => {
    if (!e.defaultPrevented) e.preventDefault();
    const target = e.target;

    // .localName 사용
    () => {
      if (target.localName === 'a') {
        console.log('<a> 요소를 클릭했습니다.');
      }

      if (target.localName === 'li') {
        console.log('<li> 요소를 클릭했습니다.');
      }

      if (target.localName === 'ul') {
        console.log('<ul> 요소를 클릭했습니다.');
      }
    };

    // .nodeName 사용
    (() => {
      if (target.nodeName === 'A') {
        console.log('<a> 요소를 클릭했습니다.');
      }

      if (target.nodeName === 'LI') {
        console.log('<li> 요소를 클릭했습니다.');
      }

      if (target.nodeName === 'UL') {
        console.log('<ul> 요소를 클릭했습니다.');
      }
    })();

    console.log('target.nodeName = ', target.nodeName); // 'A', 'LI', 'UL'
    console.log('target.nodeName = ', target.nodeName.toLowerCase()); // 'a', 'li', 'ul'
    console.log('target.localName = ', target.localName); // 'a', 'li', 'ul'
  });
};

// 이벤트 위임
// 가장 가까운 공통의 부모에 이벤트를 연결한다.
// 이벤트 버블링(기본)을 사용해 이벤트를 위임한다. (이벤트가 전파되기 때문)

// 이벤트 위임 + 이벤트 대상 확인에 따른 조건 처리
// 단 1개의 이벤트 리스너 생성
(() => {
  const linkList = document.querySelector('.link-list');

  linkList.addEventListener('click', (e) => {
    if (!e.defaultPrevented) e.preventDefault();
    const target = e.target;

    if (target.localName === 'a') {
      // console.log('<a> 요소를 클릭했습니다.')
      console.log(target.getAttribute('href'));
    }
  });
})();
