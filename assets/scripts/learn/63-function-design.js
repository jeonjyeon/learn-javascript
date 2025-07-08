// --------------------------------------------------------------------------
// 📌 목적에 맞는 함수 설계
// --------------------------------------------------------------------------
() => {
  // 선언적 코드
  // 배열 객체의 filter() 메서드 활용
  function filter(array, callback) {
    // 명령형 코드
    const filteredArray = [];

    for (let index = 0, l = array.length; index < l; index++) {
      const item = array[index];
      if (callback(item, index, array)) {
        // console.log('참인 아이템 =', item)
        filteredArray.push(item);
      }
    }

    return filteredArray;
  }

  const numbers = [2, 9, 21, 34];

  // const result = filter(numbers, (item, index, array) => {
  //   console.log(item)
  //   console.log(index)
  //   console.log(array)
  // })

  const result = filter(numbers, (n) => n > 5 && n < 30);
  console.log(result); // [9, 21]
};

// 매핑(mapping) 기능을 가진 함수 구현
(() => {
  function map(likeArray, callback) {
    // 명령형 코드
    // 배열의 map() 메서드와 유사한 기능 구현
    // 배열 순환 후, 항목별 변형 후 새 배열로 반환 (결과)
    let newArray = [];

    for (let index = 0, l = likeArray.length; index < l; index++) {
      let item = likeArray[index];
      // const mutatedItem = callback(item); // 이렇게만 써도 문제 없으나,
      const mutatedItem = callback(item, index, likeArray); // map() 함수처럼 구현하기 위해서는 이와 같이 써야함
      newArray.push(mutatedItem);
    }
    return newArray;
  }

  const numbers = [2, 9, 21, 34];

  const result = map(numbers, (n) => n ** 2);
  console.log(result); // [4, 81, 441, 1156]
})();
