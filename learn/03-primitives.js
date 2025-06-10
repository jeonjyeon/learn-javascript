// 기본(원시, Primitives) 타입
// 1. String (문자열)
// 2. Number (숫자)
// 3. Boolean (불리언)
// 4. Null (널)
// 5. Undefined (언디파인디드)
// 6. Symbol (심볼)
// 7. BigInt (빅인트)

// ------------------------------
// 1. String
// ------------------------------

// '작은 따옴표로 묶인 텍스트'
// "작은 따옴표로 묶인 텍스트"

// 아포스트로피 (이스케이프 처리)
// It's my birthday today!
// console.log('It\'s my birthday today!')

// '나의 100m 달리기 최고 기록은 12\'26\"이야.'
// "나의 100m 달리기 최고 기록은 12\'26\"이야."

// 문자열 연결(String Concatenation)
// '나의 100m 달리기 최고 기록은 12\'26\"이야.'
// '나의 100m 달리기' + '최고 기록은 12\'26\"이야.'
// console.log('나의 100m 달리기 ' + '최고 기록은 12\'26\"이야.')
// console.log('나의 100m 달리기' + ' 최고 기록은 12\'26\"이야.')
// console.log('나의 100m 달리기' + ' ' + '최고 기록은 12\'26\"이야.')

// 데이터 타입이 숫자인 경우 (결과: 2)
// console.log(1 + 1)

// 데이터 타입이 문자인 경우 (결과: 11)
// console.log('1' + '1')

// ------------------------------
// 2. Number
// ------------------------------

// 1,000,000,000
// console.log(1000)
// console.log(10.87)
// console.log(1_000_000_000)

// 산술 연산
// 덧셈 (add): +
// 뺄셈 (add): -
// 곱셈 (multiply): *
// 나눗셈 (divide): /
// 나머지 (modules): %
// console.log(12345 + 67890)
// console.log(12345 - 67890)
// console.log(12345 * 67890)
// console.log(12345 / 67890)
// console.log(12345 % 6)

// JavaScript 숫자(정수)의 안전 범위 표현
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)


// ------------------------------
// 3. Boolean
// ------------------------------
// true    // boolean
// 'true'  // string

// false   // boolean
// 'false' // string


// ------------------------------
// 4. Null
// ------------------------------
// null
// console.log(null)

// ------------------------------
// 5. Undefined
// ------------------------------
// undefined
// console.log(undefined)


// ------------------------------
// 6. Symbol
// ------------------------------
// console.log(Symbol())
// console.log(Symbol(2025))
// console.log(Symbol('고유식별자'))

// ------------------------------
// 7. BigInt
// ------------------------------

// console.log(BigInt(Number.MAX_SAFE_INTEGER + 10))
// console.log(10000n) // BigInt 리터럴
// console.log(typeof 10000n);      // "bigint"