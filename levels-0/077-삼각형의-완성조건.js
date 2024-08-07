// https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  let answer = 0;
  const minNum = Math.min(...sides);
  const maxNum = Math.max(...sides);

  for (let i = maxNum - minNum + 1; i <= maxNum; i++) {
    answer++;
  }

  for (let i = maxNum + 1; i < minNum + maxNum; i++) {
    answer++;
  }

  return answer;
}

// solution([11, 7]);
// 13
