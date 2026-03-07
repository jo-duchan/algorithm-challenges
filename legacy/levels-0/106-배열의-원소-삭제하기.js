// https://school.programmers.co.kr/learn/courses/30/lessons/181844

function solution(arr, delete_list) {
  const answer = arr.filter((x) => !delete_list.includes(x));
  return answer;
}

// solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]);
// [293, 395, 678]
