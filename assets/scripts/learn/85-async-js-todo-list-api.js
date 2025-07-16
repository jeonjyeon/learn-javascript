// --------------------------------------------------------------------------
// 📌 To do List API
// --------------------------------------------------------------------------

/* global axios */

const TODOLIST_STORAGE_KEY = '@todolist';

const TODOLIST_ENDPOINT = 'https://todo-list-api-for-learning.onrender.com';

const TODOLIST_TESTER = {
  email: 'jyeon@naver.com',
  password: 'qwerty',
};

// 유틸리티 함수
function setToken(token) {
  localStorage.setItem(TODOLIST_STORAGE_KEY, JSON.stringify(token));
}

// 회원가입
() => {
  register({ ...TODOLIST_TESTER })
    .then(({ data }) => {
      console.log(data);
    })
    .catch(console.error);

  function register({ email, password }) {
    return axios.post(`${TODOLIST_ENDPOINT}/register`, { email, password });
  }
};

// 생성된 사용자 조회
() => {
  axios
    .get(`${TODOLIST_ENDPOINT}/users/${TODOLIST_TESTER.email}`)
    .then(({ data }) => console.log(data))
    .catch(console.error);
};

// 로그인
() => {
  login(TODOLIST_TESTER.email, TODOLIST_TESTER.password)
    .then(({ data: { token } }) => {
      // 로그인에 성공하면 웹 스토리지에 토큰 저장
      setToken(token);
    })
    .catch(console.error);

  function login(email, password) {
    return axios.post(`${TODOLIST_ENDPOINT}/login`, { email, password });
  }
};

// 생성된 사용자 삭제
() => {
  axios
    .delete(`${TODOLIST_ENDPOINT}/users/${TODOLIST_TESTER.email}`)
    .then(({ data }) => console.log(data))
    .catch(console.error);
};
