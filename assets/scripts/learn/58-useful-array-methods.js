// --------------------------------------------------------------------------
// 📌 유용한 JS 기능 - 배열의 유용한 메서드
// --------------------------------------------------------------------------

// findIndex() 메서드
() => {
  // Array의 .findIndex() 메서드

  const people = [
    { id: 1, name: '지훈' }, // index: 0
    { id: 2, name: '아름' }, // index: 1
    { id: 3, name: '한영' }, // index: 2
  ];

  const numbers = [22, 13, -9, 108];

  console.log(numbers.findIndex((n) => n === -9)); // 2

  // 일치하는(참으로 평가되는) 사람을 찾아서 해당 인덱스 반환
  let foundIndex = people.findIndex((person) => {
    return person.name === '아름';
  });

  console.log(foundIndex);
};

// find() 메서드
() => {
  const people = [
    { id: 1, name: '지훈' },
    { id: 2, name: '아름' },
    { id: 3, name: '한영' },
  ];

  // .findIndex() 메서드와 유사하게 작동하지만, 인덱스(index) 대신 항목(item)을 반환
  const hanyuoung = people.find((person) => person.name === '한영');
  console.log(hanyuoung);
};

// filter() 메서드
() => {
  const people = [
    { id: 1, name: '최지훈' },
    { id: 2, name: '박아름' },
    { id: 3, name: '박한영' },
    { id: 4, name: '강주선' },
    { id: 5, name: '김박군' },
  ];

  // 사람들 중에 성이 박으로 시작하는 사람들(집합, 배열)을 거르고 싶어요!
  // 걸러낸다. 필터링(filtering)한다.
  const parkPersons = people.filter((person) => person.name.startsWith('박'));
  console.log(parkPersons);

  const unknownPersons = people.filter((p) => p.name === '이한준');
  console.log(unknownPersons);
};

// map() 메서드
() => {
  const people = [
    { id: 1, name: '지훈' },
    { id: 2, name: '아름' },
    { id: 3, name: '한영' },
  ];

  // 사람들을 순환해서 모두의 직업을 설정한 새 배열 반환 (원본 보존)
  const newPeople = people.map((person) => {
    // 이전 메모리 주소 상의 객체가 아닌, 새 객체 생성 (person 객체 복제)
    const newPerson = { ...person };

    // 이전의 사람에 새로운 데이터를 추가해서 반환
    newPerson.name = '김' + newPerson.name;
    newPerson.job = '프론트엔드 개발자';
    return newPerson;
  });

  console.log(newPeople);
  console.log(people);

  const numbers = [2, 6, 8];
  // const doubleNumbers = [4, 36, 64]
  const doubleNumbers = numbers.map((n) => n ** 2);
  console.log(doubleNumbers);
  console.log(numbers);
};

// forEach() vs. map()
() => {
  const numbers = [3, 6, 9];

  // 배열 순환 용도
  const forEachResult = numbers.forEach((number) => {
    return number ** 2;
  });

  console.log(forEachResult);

  // 배열 순환한 후에 새로운 배열 반환 용도
  const mapResult = numbers.map((number) => {
    return number ** 2;
  });

  console.log(mapResult);
};

// 용도별 함수 작성 방법 비교: loop() vs. sum()
() => {
  const numbers = [2, 5, 7, 8, 12, 32, 44, 59];

  // 배열 순환해서 값 계산용
  let total = sum(...numbers);
  console.log({ total });

  // 배열 순환용
  let loopResult = loop(...numbers);
  console.log({ loopResult });

  // map() 메서드와 유사
  function sum(...numbers) {
    let total = 0;

    for (let i = 0, l = numbers.length; i < l; i = i + 1) {
      total += numbers[i];
    }

    return total;
  }

  // forEach() 메서드와 유사
  function loop(...numbers) {
    for (let i = 0, l = numbers.length; i < l; i++) {
      console.log(numbers[i]);
    }

    // return undefined
  }
};

// 용도별 함수 작성 방법 비교: forEach() vs. map()
(() => {
  const list = ['하나', '둘', '셋'];

  const forEachResult = forEach(list, (item, index, list) => {
    console.log(list);
    console.log(index, item);
  });
  console.log({ forEachResult });

  const mapResult = map(list, (item, index, list) => {
    console.log(list);
    console.log(index, item);
    return item.repeat(2);
  });
  console.log({ mapResult });

  console.log({ list });

  function forEach(list, callback) {
    for (let index = 0; index < list.length; index = index + 1) {
      const item = list.at(index);
      callback(item, index, list);
    }

    // return undefined
    // forEach는 순환하는 때에 사용. return은 undefined
  }

  function map(list, callback) {
    const mapResult = [];

    for (let index = 0, length = list.length; index < length; index += 1) {
      const item = list.at(index);
      mapResult.push(callback(item, index, list));
    }

    return mapResult;
  }
})();
