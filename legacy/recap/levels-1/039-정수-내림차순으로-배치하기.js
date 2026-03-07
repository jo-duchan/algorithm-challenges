// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  return parseInt([...`${n}`].sort((a, b) => b - a).join(''));
}

solution(118372);
// 873211
