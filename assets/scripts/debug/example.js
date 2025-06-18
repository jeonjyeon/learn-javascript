if (true) {
  console.log('참입니다!');
} else {
  console.log('거짓입니다!');
}

let link;

link = document.querySelector('.link');
console.log(link);

link.addEventListener('click', () => {
  console.log('버튼 클릭!');
});
