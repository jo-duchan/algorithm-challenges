// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  const spelling = {};

  for (x of s.toLowerCase()) {
    spelling[x] = (spelling[x] || 0) + 1;
  }

  if (spelling['p'] === spelling['y']) {
    return true;
  }

  return false;
}

// solution('pPoooyY');
// true
