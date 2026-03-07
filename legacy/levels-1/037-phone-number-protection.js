// https://school.programmers.co.kr/learn/courses/30/lessons/12948
// 핸드폰 번호 가리기

function phoneNumberProtection(number) {
  return "*".repeat(number.length - 4) + number.slice(-4);
}

// phoneNumberProtection("01033334444");
// *******4444
