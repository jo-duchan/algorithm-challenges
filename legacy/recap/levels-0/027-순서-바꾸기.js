// https://school.programmers.co.kr/learn/courses/30/lessons/181891

function solution(num_list, n) {
  return [...num_list.slice(n, num_list.length), ...num_list.slice(0, n)];
}

// solution([2, 1, 6], 1);
//  [ 1, 6, 2 ]
