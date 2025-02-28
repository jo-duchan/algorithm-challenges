// https://school.programmers.co.kr/learn/courses/30/lessons/181903

function solution(q, r, code) {
  const answer = [...code].filter((_, i) => i % q === r).join('');
  return answer;
}

// solution(3, 1, "qjnwezgrpirldywt");
// "jerry"
