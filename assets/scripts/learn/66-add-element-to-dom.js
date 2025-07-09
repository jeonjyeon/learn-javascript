// --------------------------------------------------------------------------
// 📌 DOM에 요소 추가
// --------------------------------------------------------------------------

// 요소 동적 생성 (dynamic creating element node)
(() => {
  // 동적 생성된 요소들을 마운트할 부모 요소
  const parentElement = document.querySelector('.parent');

  // <section> 요소 생성
  const sectionElement = document.createElement('section');

  // 생성된 요소에 클래스 이름 설정(추가)
  sectionElement.classList.add('sectioning-content');

  // 커스텀 속성 설정(추가)
  sectionElement.dataset.category = 'sports';

  // 텍스트 콘텐츠 추가
  sectionElement.textContent = '스포츠는 역시 멋사!';

  // HTML 콘텐츠 추가(덮어쓰기)
  sectionElement.innerHTML = `<h2>${sectionElement.textContent}</h2>`;

  // DOM에 추가 (삽입)
  parentElement.appendChild(sectionElement);

  // --------------------------------------------------
  // <table> 요소 생성
  const tableElement = document.createElement('table');
  // 생성된 요소에 클래스 이름 설정(추가)
  tableElement.classList.add('table-content');
  // 커스텀 속성 설정(추가)
  tableElement.dataset.category = 'table';
  // 표 제목 텍스트 콘텐츠 추가
  tableElement.textContent = '과일 종류';
  // 표 제목 HTML 콘텐츠 추가(덮어쓰기)
  tableElement.innerHTML = `<caption>${tableElement.textContent}</caption>`;

  // DOM에 추가 (삽입)
  parentElement.appendChild(tableElement);
})();
