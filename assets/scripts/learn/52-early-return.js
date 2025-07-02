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
