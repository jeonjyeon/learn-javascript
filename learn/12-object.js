// --------------------------------------------------------------------------
// 기본 타입(Primitive Types, 간단)
// --------------------------------------------------------------------------

// 1. String - '문자값'
// 2. Number - 101
// 3. Boolean - false
// 4. null - 비어있다.
// 5. undefined - 정의되지않음
// 6. Symbol - Symbol('yamoo9')
// 7. BigInt - 1000n

// --------------------------------------------------------------------------
// 객체 타입(Object Types, 복잡)
// --------------------------------------------------------------------------

// 1. Function - () => {}
// 2. Object - {}
// 3. Array - []

// 객체 생성자(Constructor)를 사용해 객체 생성
// const 우유 = new Object();
// 우유.이름 = '저지방 우유';
// 우유.브랜드 = '서울 우유';
// 우유.용량 = '1000ml';

// 객체 리터럴을 사용해 객체 정의 (쉬운 방법)
const 커피 = {
  용량: '600ml',
  브랜드: '스타벅스',
  이름: '아메리카노',
};

const 국어사전 = {
  결제: '대금을 주고받아 매매 당사자 사이의 거래 관계를 끝맺는 일',
  결재: '결정할 권한이 있는 상관이 부하가 제출한 안건을 검토하여 허가하거나 승인',
};

// console.log(국어사전);

// 노트북을 객체로 만들어 보자!
const labtop = {
  장치_이름: 'JYEON',
  프로세서: 'Intel(R) Core(TM) Ultra 5 125H   3.60 GHz',
  설치된_RAM: '16.0GB(15.6GB 사용 가능)',
  시스템_종류: '64비트 운영 체제, x64 기반 프로세서',
  펜_및_터치: '펜과 10개 터치 포인트 지원',
};
// console.log(labtop);

const 객체 = {
  숫자: 101,
  문자: '안녕!',
  불리언: false,
  널: null,
  언디파인드: undefined,
  심볼: Symbol('객체'),
  빅인트: 910n,
  배열: [],
  객체: {},
  함수: () => {},
};

const h1Camel = {
  fontWeight: 200,
  fontSize: '2.65rem',
};

// 객체 생성 (리터럴 방법: 쉽다!)
const h1Kebab = {
  'font-weight': 200,
  'font-size': '2.65rem',
};

// 객체 속성 읽기(Read)
console.log(h1Kebab['font-weight']); // 200

// 객체 속성 쓰기(Write)
h1Kebab['font-weight'] = 700; // bold
h1Kebab['font-style'] = 'oblique';

// 수정된 객체 속성 읽기(Read)
console.log(h1Kebab['font-weight']); // 700
console.log(h1Kebab['font-style']); // 'oblique'

console.log(h1Kebab);

// 객체 속성 삭제(Delete)
delete h1Kebab['font-style'];

console.log(h1Kebab);

// 객체의 속성(Object's Properties)Add commentMore actions
// h1Camel.fontSize
// h1Camel.fontWeight

// 객체의 메서드(Object's Methods : 객체의 속성 중 함수(동사)형태의 것을 특별히 메서드라고 부른다.)
h1Camel.getFontSize = function () {
  return h1Camel.fontSize;
};

console.log(h1Camel.getFontSize());

labtop.getOS = function () {
  return labtop.프로세서;
};

console.log(labtop.getOS());
console.log(labtop['getOS']());

// 메서드 정의 (매개변수 포함)
labtop.playMusic = function (songTitle) {
  return '"' + songTitle + '" 재생을 시작합니다. 🎵';
};

// 메서드 사용 (함수처럼 호출, 객체를 통해 메서드에 접근)
console.log(labtop.playMusic('첫 눈처럼 너에게 가겠다.'));

// CSS 코드를 JavaScript의 객체로 만들어 보기
const body = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  afunction: function () {
    console.log('hi');
  },
  afunction2: function (message) {
    console.log(message);
  },
};

console.log(body);

console.log(body.display);
console.log(body.flexFlow);
console.log(body.justifyContent);
console.log(body.alignItems);
console.log(body.afunction());
console.log(body.afunction2('안녕하세요'));

const body2 = {
  display: 'flex',
  'flex-flow': 'row nowrap',
  'justify-content': 'center',
  'align-items': 'center',
};

console.log(body2['display']);
console.log(body2['flex-flow']);

// --------------------------------------------------------------------------Add commentMore actions
// 📌 함수의 타입은?
// --------------------------------------------------------------------------
//    JavaScript 함수는 객체이다.
//    객체는 값이다. 함수는 객체다. 그러니까 함수는 값이다.
// --------------------------------------------------------------------------

function likeLion() {
  console.log('우리는 멋사 14기!');
}

likeLion.order = 14;

console.log(likeLion.order);

delete likeLion.order;

console.log(likeLion.order);

// "함수는 값이다."
// - 함수는 값이므로 함수에 인수로 전달 가능하다. (일급 객체, 일급 함수)
{
  greeting(sayHello, '🌈 자바스크립트'); // '안녕! 🌈 자바스크립트'

  function sayHello() {
    return '안녕! ';
  }

  function greeting(helloMessage /* = sayHello */, name) {
    // const helloMessage = sayHello = function () { ... }

    console.log(helloMessage() + name);
  }
}

// - 함수는 값이므로 함수가 값으로 반환할 수 있다. (고차 함수)
{
  const greeting = sayHello();
  greeting('🌈 자바스크립트'); // '안녕! 🌈 자바스크립트'

  function sayHello() {
    return (name) => {
      console.log('안녕! ' + name);
    };
  }
}

{
  const galaxyNoteBook = {
    deviceName: '갤럭시 노트북',
    getDeviceName: function () {
      return galaxyNoteBook.deviceName;
    },
  };

  // console.log(galaxyNoteBook.getDeviceName) 이렇게 하면 함수가 나오고
  // 함수(컴퓨터 메모리 상에 기억: 주소) 참조
  console.log(galaxyNoteBook.getDeviceName);

  // console.log(galaxyNoteBook.getDeviceName()) 이렇게 했을때 value가 나오는데 왜 그런건가요?
  // 함수(컴퓨터 메모리 상에 기억: 주소) 실행 (소괄호()는 함수이름이 실행 연산자를 만나면 함수가 실행 => 값 반환)
  console.log(galaxyNoteBook.getDeviceName());
}
