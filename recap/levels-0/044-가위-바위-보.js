// https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  const obj = { 2: '0', 0: '5', 5: '2' };
  var answer = rsp
    .split('')
    .map((s) => obj[s])
    .join('');
  return answer;
}

// solution('205');
// "052"
