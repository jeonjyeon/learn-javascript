const exorcists = document.getElementById('exorcist-characters');

const choi = exorcists.querySelector('.master-choi');
// console.dir(choi.classList)

// 오늘날 주로 사용하는 방법(NEW)
{
  choi.classList.add('active');
  // console.dir(choi.classList.value)
  choi.classList.remove('master-choi');
}

// 이전 시대의 방법 (OLD)
{
  // 문서 객체 속성 읽기
  // console.log(choi.className)
  // x = x + 15
  // x += 15
  // 문서 객체 속성 수정
  // choi.className = choi.className + ' active'
  // choi.className += ' active'
  // let x = 10
  // console.log(x) // 10
  // x = 20
  // console.log(x) // 20
  // x 값에다가 15만큼 더하고 싶다.
  // x = x + 15
  // console.log(x) // 25
}
