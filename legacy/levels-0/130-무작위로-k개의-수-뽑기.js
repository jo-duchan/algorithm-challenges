// https://school.programmers.co.kr/learn/courses/30/lessons/181858

function solution(arr, k) {
  const temp = Array.from(new Set(arr)).slice(0, k);
  const answer = [...temp, ...Array(k - temp.length).fill(-1)];

  return answer;
}

solution([0, 1, 1, 2, 2], 4);
// [ 0, 1, 2, -1 ]
