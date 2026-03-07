// https://school.programmers.co.kr/learn/courses/30/lessons/181920

function solution(start_num, end_num) {
  const length = end_num - start_num + 1;
  return Array.from({ length }, (_, i) => i + start_num);
}

// solution(3, 10);
// [3, 4, 5, 6, 7, 8, 9, 10]
