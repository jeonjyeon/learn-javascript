/* eslint-disable no-unused-vars */

const heading1 = document.querySelector('h1');

// ----------------------------------------------------------------------
// getStyle(요소, CSS속성이름)
const getPropertyValue = getStyle(heading1, 'color');
console.log('읽어온 요소의 속성 값: ', getPropertyValue);

// ----------------------------------------------------------------------
// setStyle(요소, CSS속성이름, CSS스타일값)
const setPropertyValue = setStyle(heading1, 'color', 'black');
console.log('요소 스타일 설정: ', setPropertyValue);

// ----------------------------------------------------------------------
// css(요소, CSS속성이름, ?CSS스타일값)
// 요소 스타일 읽기
// const CSS스타일값 = css(요소, CSS속성이름)
const readPropertyValue = css(heading1, 'font-size');
console.log('css 요소 스타일 읽기: ', readPropertyValue);

// 요소 스타일 설정
// const 요소 = css(요소, CSS속성이름, CSS스타일값)
const writePropertyValue = css(heading1, 'font-weight', 'bold');
console.log('css 요소 스타일 설정: ', writePropertyValue);
