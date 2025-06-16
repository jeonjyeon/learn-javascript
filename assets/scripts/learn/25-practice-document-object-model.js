// --------------------------------------------------------------------------
// `.querySelector()` 메서드를 사용해 요소를 선택하는 연습을 진행하세요.
// --------------------------------------------------------------------------

// 1. id 속성으로 DOM 요소를 선택하여 콘솔 패널에 출력해봅니다.
const exorcists = document.getElementById('exorcist-characters');
console.log(exorcists);

// 2. id 속성으로 선택한 DOM 요소에서 다음을 수행하세요.
//     1. 태그 또는 클래스 이름, 속성 이름/값 등을 사용해 "박요한"을 선택해보세요.
const yo_han = exorcists.querySelector('.yo-han');
// console.log(yo_han);
// console.log(exorcists.getElementsByTagName('li')[0]);
console.log(exorcists.querySelector('[data-type="hero"]'));

//     2. 태그 또는 클래스 이름, 속성 이름/값 등을 사용해 "최강림"을 선택해보세요.
const master_choi = exorcists.querySelector('.master-choi');
// console.log(master_choi);
// console.log(exorcists.getElementsByTagName('li')[1]);
console.log(exorcists.querySelector('[data-type="master"]'));

//     3. 태그 또는 클래스 이름, 속성 이름/값 등을 사용해 "악령"을 선택해보세요.
const villain_ghost = exorcists.querySelector('.villain-ghost');
// console.log(villain_ghost);
// console.log(exorcists.getElementsByTagName('li')[2]);
console.log(exorcists.querySelector('[data-type="villain"]'));
