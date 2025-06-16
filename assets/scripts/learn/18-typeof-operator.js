// --------------------------------------------------------------------------
// 📌 typeof 연산자 활용
// --------------------------------------------------------------------------

const o = {
  name: 'object',
  serialNumber: 20250613,
  isObjectType: () => true,
  isNotDefined: undefined,
  empty: null,
  symbol: Symbol('o'),
  int: 100n,
}

console.log(o)

// 데이터 타입을 확인하고 싶을 때는?
// typeof()를 사용한다.
// 하지만 typeof()로 null과 object를 구분할 수 없다.

console.log(typeof(o)) // object
console.log(typeof(o.name)) // name
console.log(typeof(o.serialNumber)) // number
console.log(typeof(o.isObjectType)) // function
console.log(typeof(o.isObjectType())) // boolean
console.log(typeof(o.isNotDefined)) // undefined
console.log(typeof(o.empty)) // object
console.log(typeof(o.symbol)) // symbol
console.log(typeof(o.int)) // bigint