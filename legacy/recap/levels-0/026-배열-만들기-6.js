// https://school.programmers.co.kr/learn/courses/30/lessons/181859

function solution(arr) {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0 || stk.at(-1) !== arr[i]) {
      stk.push(arr[i]);
      continue;
    }

    stk.pop();
  }

  return stk.length !== 0 ? stk : [-1];
}

// solution([0, 1, 1, 1, 0]);
// [0, 1, 0]
