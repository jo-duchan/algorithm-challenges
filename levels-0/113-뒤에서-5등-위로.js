// https://school.programmers.co.kr/learn/courses/30/lessons/181852

function solution(num_list) {
  const answer = num_list.sort((a, b) => a - b).slice(5);
  return answer;
}

// solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]);
// [ 15, 32, 38, 46, 56 ]
