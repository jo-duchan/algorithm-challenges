// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  const stack = [];

  for (let i of s) {
    if (stack.length === 0 && i === ")") {
      return false;
    } else if (i === "(") {
      stack.push("(");
    } else if (i === ")" && stack.at(-1) === "(") {
      stack.pop();
    }
  }

  return stack.length === 0;
}

// solution("(())()");
// true
