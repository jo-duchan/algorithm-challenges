// https://school.programmers.co.kr/learn/courses/30/lessons/12931
// 자리수 더하기

function sumStringNumber(n) {
  const result = [...`${n}`].reduce((acc, cur) => (acc += parseInt(cur)), 0);

  return result;
}

// sumStringNumber(123);
// 6
