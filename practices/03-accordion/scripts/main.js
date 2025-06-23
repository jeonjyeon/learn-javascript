const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  const btn = accordion.querySelector('button');

  btn.addEventListener('click', () => {
    accordion.classList.toggle('is-open');
  });
});
