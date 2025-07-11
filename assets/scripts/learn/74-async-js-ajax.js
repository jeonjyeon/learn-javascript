// --------------------------------------------------------------------------
// 📌 AJAX란?
// --------------------------------------------------------------------------

(() => {
  // XMLHttpRequest 생성자 함수(클래스)를 사용해 XMLHttpRequest 객체(인스턴스) 생성
  // 요청을 위한 XHR 객체 생성
  const request = new XMLHttpRequest();

  // 요청 구성
  request.open('GET', 'https://api.github.com/users/yamoo9/repos');

  // 서버에서 응답이 오는 이벤트 청취
  request.addEventListener('load', (e) => {
    // XHR 요청에 서버로부터 응답이 오면 이벤트 객체를 통해 응답된 데이터를 확인
    console.log(e.target.status); // 200
    console.log(typeof e.target.response); // string (data, real JSON String)
    const responseData = JSON.parse(e.target.response);
    console.log(responseData);
  });

  // 서버로 요청 보내기
  request.send();
})();
