{
  const accordionContainer = document.querySelector('.accordion__container')
  
  accordionContainer.addEventListener('click', (e) => {
    const button = e.target.closest('button')
    
    if (button) {
      const accordion = button.closest('.accordion')
      accordion.classList.toggle('is-open')
    }
  })
}