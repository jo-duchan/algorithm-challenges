// https://school.programmers.co.kr/learn/courses/30/lessons/12903
// 가운데 글자 가져오기

function returnMiddleLetter(s) {
  const half = Math.ceil(s.length / 2);
  const isEven = s.length % 2 === 0 ? 1 : 0;

  return s.slice(half - 1, half + isEven);
}

// returnMiddleLetter("abcde");
// c
// returnMiddleLetter("qwer");
// we
