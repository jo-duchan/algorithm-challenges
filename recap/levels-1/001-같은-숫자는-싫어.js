// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  const answer = arr.filter((i, idx) => i !== arr[idx - 1]);
  return answer;
}

solution([1, 1, 3, 3, 0, 1, 1]);
// [1,3,0,1]
