// --------------------------------------------------------------------------
// 📌 빠른 반환 (Early Return)
// --------------------------------------------------------------------------

// 빠른 반환을 사용하지 않은 경우
() => {
  function hasOwnClassName(element) {
    if (element.classList.contains('own')) {
      element.classList.add('yes');
      element.setAttribute('data-has-own', 'true');
      element.style.setProperty('--color', 'maroon');
      element.setAttribute('data-top', element.getBoundingClientRect().top + 'px');
      return true;
    } else {
      return false;
    }
  }

  const body = document.body;
  body.className = 'own';

  const result = hasOwnClassName(body);
  console.log(result);
};

// 빠른 반환을 사용하는 경우
(() => {
  function hasOwnClassName(element) {
    // 빠른 시점에 함수 값을 반환(return)한다.
    // 중첩된 코드를 줄이고, else 구문을 제거한다.
    if (!element.classList.contains('own')) return false;

    element.classList.add('yes');
    element.setAttribute('data-has-own', 'true');
    element.style.setProperty('--color', 'maroon');
    element.setAttribute('data-top', element.getBoundingClientRect().top + 'px');
    return true;
  }

  const body = document.body;
  body.className = 'own';

  const result = hasOwnClassName(body);
  console.log(result);
})();

(() => {
  // 빠른 반환을 사용하지 않은 경우
  function getGift1(score) {
    let gift = null;

    if (score === 100) {
      gift = '노트북';
    } else if (score > 75) {
      gift = '태블릿';
    } else if (score > 50) {
      gift = '스마트폰';
    }

    return gift;
  }

  // 빠른 반환을 사용하는 경우
  function getGift2(score) {
    if (score === 100) return '노트북';
    if (score > 75) return '태블릿';
    if (score > 50) return '스마트폰';
    return null;
  }

  const gift1 = getGift1(55);
  const gift2 = getGift2(100);
  console.log(gift1);
  console.log(gift2);

  // 빠른 반환을 사용하지 않은 경우
  // container.addEventListener('click', (e) => {
  //   const el = e.target.closest('.element')
  //   if (el) {
  //     el.classList.toggle('.toggle')
  //   }
  // })

  // 빠른 반환을 사용하는 경우
  // container.addEventListener('click', (e) => {
  //   const el = e.target.closest('.element')

  //   if (!el) return

  //   el.classList.toggle('.toggle')
  // })
})();
