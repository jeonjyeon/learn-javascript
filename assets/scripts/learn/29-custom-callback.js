const button = document.querySelector('.clickable');

const body = document.body;
const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const button3 = document.querySelector('.button-3');
const button4 = document.querySelector('.button-4');
const button5 = document.querySelector('.button-5');
// - mouseenter(element, listener)
// button1.addEventListener('mouseenter', () => {
//   console.log('enter');
// });

//    커스텀 콜백

// const handleEnter = () => console.log('Entered button');
// mouseEnter(button1, handleEnter);

// mouseEnter(document.querySelector('.button-1'), () => {
//   console.log('Entered button');
// });

// function mouseEnter(element, listener) {
//   element.addEventListener('mouseenter', listener);
// }

// - mouseleave(element, listener)
// button1.addEventListener('mouseleave', () => {
//   console.log('leave');
// });

//   커스텀 콜백
// mouseLeave(button1, () => {
//   console.log('button1 mouseleave');
// });

// function mouseLeave(element, listener) {
//   element.addEventListener('mouseleave', listener);
// }
// ----------------------------
const handleActive = () => {
  body.classList.add('is-active');
  button1.classList.add('is-active');
  button2.classList.add('is-active');
  button3.classList.add('is-active');
  button4.classList.add('is-active');
  button5.classList.add('is-active');
};

const handleInactive = () => {
  body.classList.remove('is-active');
  button1.classList.remove('is-active');
  button2.classList.remove('is-active');
  button3.classList.remove('is-active');
  button4.classList.remove('is-active');
  button5.classList.remove('is-active');
};

// button1.addEventListener('mouseenter', handleActive);
// button1.addEventListener('mouseleave', handleInactive);
// button2.addEventListener('mouseenter', handleActive);
// button2.addEventListener('mouseleave', handleInactive);
// button3.addEventListener('mouseenter', handleActive);
// button3.addEventListener('mouseleave', handleInactive);
// button4.addEventListener('mouseenter', handleActive);
// button4.addEventListener('mouseleave', handleInactive);
// button5.addEventListener('mouseenter', handleActive);
// button5.addEventListener('mouseleave', handleInactive);

const buttons = [button1, button2, button3, button4, button5];

buttons.forEach((button) => {
  mouseenter(button, handleActive);
  mouseleave(button, handleInactive);
});

// ---------------------------------------------------------

// button.addEventListener('click', () => {
//   console.log('call click function');
// });

// ---
// click(document.querySelector('.button-1'), () => console.log('button 1'));
// click(document.querySelector('.button-2'), () => console.log('button 2'));
// ---
// const handleClick = () => console.log('clicked button');
// click(button, handleClick);
// ---
// function click(element, listener) {
//   element.addEventListener('click', listener);
// }

// -----------------------------------------------------------

// function callToAction(callback) {
//   callback();
// }

// callToAction(() => {
//   console.log('콜백은 다른 함수에 인수로 전달되는 함수를 말합니다.');
// });
