// --------------------------------------------------
// 📌 forEach
// --------------------------------------------------
const numbers = [10, 9, 8, 7];

// for 문 vs. forEach()

// for 문
() => {
  // 문(Statement) -> 값이 나오지 않는다.
  for (let i = 0, l = numbers.length; i < l; ++i) {
    const number = numbers[i];
    console.log(i, number);
  }
};

// .forEach()
() => {
  // 표현식(Expression) -> 값이 나온다.
  // array.forEach((item, index, array) => {})
  numbers.forEach((number, i) => {
    console.log(i, number);
  });
};

() => {
  const fruitBasket = ['체리망고', '토마토', '스트로베리'];
  fruitBasket.forEach((fruit, index) => {
    console.log('과일 바구니 안의 ' + (index + 1) + '번째 과일은 "' + fruit + '"입니다.');
  });

  // for (const fruit of fruitBasket) {
  //   console.log('과일 바구니 안의 과일은 "' + fruit + '"이 포함되어 있습니다.')
  // }
};
