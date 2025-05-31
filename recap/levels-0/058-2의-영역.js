// https://school.programmers.co.kr/learn/courses/30/lessons/181894

function solution(arr) {
  const first = arr.indexOf(2);
  const last = arr.lastIndexOf(2);

  return first === -1 ? [-1] : arr.slice(first, last + 1);
}

// solution([1, 2, 1, 4, 5, 2, 9]);
// [2, 1, 4, 5, 2]
