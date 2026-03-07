// https://school.programmers.co.kr/learn/courses/30/lessons/181859

function solution(arr) {
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
    } else if (stack.at(-1) === arr[i]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }

  if (stack.length === 0) {
    stack.push(-1);
  }

  return stack;
}

// solution([0, 1, 1, 1, 0]);
// [ 0, 1, 0 ]
