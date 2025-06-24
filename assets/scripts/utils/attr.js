/* eslint-disable no-unused-vars */

// --------------------------------------------------------------------------
// 📌 attr 유틸리티 함수 작성 및 활용
// --------------------------------------------------------------------------
// 속성 쓰기 사용법
// const changedElement = attr(element, attributeName, attributeValue)

// 속성 읽기 사용법
// const attributeValue = attr(element, attributeName)

// 유틸리티 함수 설계
// attr(element, attributeName, ?attributeValue): element | string

function attr(element, attributeName, attributeValue) {
  // attributeValue 값이 있는 경우, 속성 쓰기
  if (attributeValue) {
    element.setAttribute(attributeName, attributeValue);
    return element; // 속성 쓰기 후 변경된 요소 반환
  }
  // attributeValue 값이 있는 경우, 속성 읽기
  else {
    return element.getAttribute(attributeName);
  }
}

// 위의 attr 함수를 기능별로 분리
// setAttr(element, attributeName, attributeValue): element
function setAttr(element, attributeName, attributeValue) {
  element.setAttribute(attributeName, attributeValue);
  return element;
}

// getAttr(element, attributeName): string
function getAttr(element, attributeName) {
  return element.getAttribute(attributeName);
}

// 화살표 함수 형식으로 변경
// const getAttr = (element, attributeName) => element.getAttribute(attributeName);
