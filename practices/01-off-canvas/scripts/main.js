// --------------------------------------------------------------------------
// 📌 실습 진행 (완료)
// --------------------------------------------------------------------------
const body = document.body;
const siteContainer = document.querySelector('.site-container');
const toggleOffsiteButton = siteContainer.querySelector('button');
const nav = document.querySelector('.offsite-container');
const OFFSITE_OPEN_CLASSNAME = 'offsite-is-open';

// 1. 버튼에 이벤트 리스너를 추가
// toggleOffsiteButton.addEventListener('click', () => {
//   console.log('open offsite container');

//   // 2. 버튼을 클릭하면 화면을 오른쪽으로 밀어줍니다.
//   // 3. 버튼을 다시 클릭하면 화면을 왼쪽으로 밀어 넣습니다.

//   // 토글 사용
//   body.classList.toggle(OFFSITE_OPEN_CLASSNAME);

//   if (body.classList.contains(OFFSITE_OPEN_CLASSNAME)) {
//     toggleOffsiteButton.querySelector('span').textContent = '메뉴 닫기';
//   } else {
//     toggleOffsiteButton.querySelector('span').textContent = '메뉴 열기';
//   }

//   // if문에서 add, remove 사용
//   // if (body.classList.contains('offsite-is-open')) {
//   //   body.classList.remove('offsite-is-open');
//   //   toggleOffsiteButton.querySelector('span').textContent = '메뉴 열기';
//   // } else {
//   //   body.classList.add('offsite-is-open');
//   //   toggleOffsiteButton.querySelector('span').textContent = '메뉴 닫기';
//   // }
// });

// 이벤트 리스너 분리
toggleOffsiteButton.addEventListener('click', handleToggleOffsite);
function handleToggleOffsite() {
  body.classList.toggle(OFFSITE_OPEN_CLASSNAME);

  // 추가) 버튼 텍스트 변경
  if (body.classList.contains(OFFSITE_OPEN_CLASSNAME)) {
    toggleOffsiteButton.querySelector('span').textContent = '메뉴 닫기';
  } else {
    toggleOffsiteButton.querySelector('span').textContent = '메뉴 열기';
  }
}
