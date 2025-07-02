// --------------------------------------------------------------------------
// 📌 조건 식(Conditional Expression)
//    - 3항 연산자 (표현)식 (Ternary)
// --------------------------------------------------------------------------
const user = {
  name: '조현주',
  age: 23,
  role: '관리자',
};


// 삼항 연산자
() => {
  // 조건문(Conditional Statement)
  if (user.role === '관리자') {
    console.log('서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.');
  } else {
    console.warn('서비스 관리자가 아니므로, 접근이 불가합니다.');
  }

  // 조건식(Conditional EXpression)
  // 조건 ? (참으로 평가된 경우 실행 명령) : (거짓으로 평가된 경우 실행 명령)

  // 한 줄로 작성한 경우
  user.role === '관리자' ? console.log('서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.') : console.warn('서비스 관리자가 아니므로, 접근이 불가합니다.')

  // 여러 줄로 작성한 경우 1
  user.role === '관리자' ?
    console.log('서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.') :
    console.warn('서비스 관리자가 아니므로, 접근이 불가합니다.')

  // 여러 줄로 작성한 경우 2
  user.role === '관리자'
    ? console.log('서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.')
    : console.warn('서비스 관리자가 아니므로, 접근이 불가합니다.')
};

// 문(Statement) vs. 표현식(Expression)
() => {
  {
    let message = ''

    // 조건문 (Conditional Statement)
    // 문은 값을 반환하지 않는다.
    // console.log(if (user.role === '관리자') { message = '서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.' } else { message = '서비스 관리자가 아니므로, 접근이 불가합니다.' })
    
    if (user.role === '관리자') {
      message = '서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.'
    } else {
      message = '서비스 관리자가 아니므로, 접근이 불가합니다.'
    }

    console.group('조건문')
    console.log('%c'+ message, 'color: #5856d6; font-weight: 700;')
    console.groupEnd()
  }

  {
    // 조건식 (Conditional EXpression)
    let message = 
      user.role === '관리자' 
        ? '서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.' 
        : '서비스 관리자가 아니므로, 접근이 불가합니다.'
    
    console.group('조건식')
    console.log('%c'+ message, 'color: #e54d26; font-weight: 900; background-color: #101010;')
    console.groupEnd()
  }
};

// 조건이 다수인 경우, 조건문 vs. 조건식
() => {
  // 조건문
  {
    let warningMessage = ''

    if (user.age >= 19) {
      warningMessage = '19세 이상이므로 출입이 가능합니다. 😄'

      if (user.role === '관리자') {
        warningMessage += '\n관리자이므로 모든 접근이 가능합니다. ✅'
      } else {
        warningMessage +=
          '\n관리자가 아니므로 모든 접근을 사용할 수 없습니다. ❌'
      }
    } else {
      warningMessage = '19세 미만이므로 출입이 불허합니다. ⚠️'
    }

    // console.log(warningMessage)

    let 조건1 = !true,
      조건2 = false,
      조건3 = false,
      조건4 = true

    if (조건1) {
      console.log('조건1이 참입니다.')
    } else if (조건2) {
      console.log('조건2가 참입니다.')
    } else if (조건3) {
      console.log('조건3이 참입니다.')
    } else if (조건4) {
      console.log('조건4가 참입니다.')
    } else {
      console.log('조건1, 2, 3, 4 모두 거짓입니다.')
    }
  }

  // 조건식
  {
    let 조건1 = !true,
      조건2 = false,
      조건3 = false,
      조건4 = true

    조건1
      ? console.log('조건1이 참입니다.')
      : 조건2
        ? console.log('조건2가 참입니다.')
        : 조건3
          ? console.log('조건3이 참입니다.')
          : 조건4
            ? console.log('조건4가 참입니다.')
            : console.log('조건1, 2, 3, 4 모두 거짓입니다.')

    // let warningMessage = user.age >= 19
    //   ? '19세 이상이므로 출입이 가능합니다. 😄'
    //   : '19세 미만이므로 출입이 불허합니다. ⚠️'
    // console.log(warningMessage)
  }
}

(() => {
  // 조건문
  {
    const 아이 = {
      성별: '여자',
      생년월: 12,
      장난감: null,
    }

    if (아이.성별 === '남자') {
      if (아이.생년월 === 12) {
        아이.장난감 = '포켓몬 GO'
      } else {
        아이.장난감 = '메카 로봇'
      }
    } else {
      if (아이.생년월 === 12) {
        아이.장난감 = '레고 디즈니 프린세스'
      } else {
        아이.장난감 = '공주 핸드백'
      }
    }

    console.log(아이.장난감)
  }
  // 조건식
  {
    const 아이 = {
      성별: '남자',
      생년월: 11,
      장난감: null,
    }

    아이.성별 === '남자'
      ? 아이.생년월 === 12
        ? (아이.장난감 = '포켓몬 GO')
        : (아이.장난감 = '메카 로봇')
      : 아이.생년월 === 12
      ? (아이.장난감 = '레고 디즈니 프린세스')
      : (아이.장난감 = '공주 핸드백')

    console.log(아이.장난감)
  }
})();