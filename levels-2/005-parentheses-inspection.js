// https://school.programmers.co.kr/learn/courses/30/lessons/12909
// 올바른 괄호

function parenthesesInspection(s) {
  const stack = [];

  for (let x of s) {
    if (stack.length === 0 && x === ")") {
      return false;
    }
    if (x === "(") {
      stack.push("(");
    }
    if (stack.length !== 0 && x === ")") {
      stack.pop();
    }
  }

  return stack.length === 0;
}

// parenthesesInspection("(())()");
// true
