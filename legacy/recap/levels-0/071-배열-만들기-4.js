// https://school.programmers.co.kr/learn/courses/30/lessons/181918

function solution(arr) {
  const stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0 || stk.at(-1) < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else {
      stk.pop();
    }
  }

  return stk;
}

// solution([1, 4, 2, 5, 3]);
// [ 1, 2, 3 ]
