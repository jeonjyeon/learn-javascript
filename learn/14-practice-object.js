// --------------------------------------------------------------------------
// 📌 실습
// --------------------------------------------------------------------------

// 객체를 만드는 연습을 해보세요. 실제 코딩에서 객체는 매우 많이 사용됩니다.
let album;
console.log(album);

// 1. 빈 객체를 정의합니다.
album = {};
console.log(album);

// 2. 점 표기법으로 접근할 수 있는 객체 속성을 추가하고, 속성 값을 읽어보세요.
album.song = '피차일반';
console.log(album.song);
console.log(album);

// 3. 대괄호 표기법으로만 접근 가능한 객체 속성도 추가하고, 속성 값을 읽어보세요.
album['수록 앨범'] = '행복론';
console.log(album['수록 앨범']);
console.log(album);

// 4. 점 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
album.singer = '음율';
console.log(album.singer);
console.log(album);

// 5. 대괄호 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
album['러닝 타임'] = '04:13';
console.log(album['러닝 타임']);
console.log(album);

// 6. 객체의 속성 타입을 함수로 설정해 메서드를 추가하고, 이 메서드를 호출해보세요.
album.getDate = function () {
  return '2023/06/07';
};
console.log(album.getDate);
console.log(album.getDate());

// 7. 객체의 메서드에 매개변수를 추가하고, 이 메서드를 호출해봅니다.
album.getGenre = function (genre) {
  return '"' + album.song + '"의 장르는 "' + genre + '"입니다.';
};
console.log(album.getGenre);
console.log(album.getGenre('인디 팝'));

// 8. 객체의 속성 중 하나를 선택해, 삭제해보세요.
delete album['러닝 타임'];
console.log(album);
