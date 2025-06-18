// ----------------------------------------------------------------------
// 📌 배열(Array) 객체
// ----------------------------------------------------------------------

// 배열 리터럴로 배열 만들기 (배열 생성)
const 장바구니 = ['대파', '계란', '두부', '시금치', '양파', '케첩'];
console.log(장바구니);

const 장바구니_항목_개수 = 장바구니.length;
console.log(장바구니_항목_개수);

// 리터럴 방식 말고, 정석적인 방법으로 배열 객체 생성
// const numbers = new Array('one', 'two', 'three', 'four', 'five')
const numbers = Array('one', 'two', 'three', 'four', 'five');

console.log(numbers, numbers.length);
