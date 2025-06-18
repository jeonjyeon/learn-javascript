const openButton = document.querySelector('.button');
const closeButton = document.querySelector('.modal-close-button');
const body = document.body;

openButton.addEventListener('click', () => {
  body.classList.add('modal-is-open');
});

closeButton.addEventListener('click', () => {
  body.classList.remove('modal-is-open');
});
