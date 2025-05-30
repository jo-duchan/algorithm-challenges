// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  const arr = s.split(' ');
  const stack = [];

  for (const token of arr) {
    if (token === 'Z') {
      stack.pop();
    } else {
      stack.push(Number(token));
    }
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
}

// solution('1 2 Z 3');
// 4
