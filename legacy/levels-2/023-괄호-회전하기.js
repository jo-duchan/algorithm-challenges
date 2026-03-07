// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  let answer = 0;
  let temp = s;
  let stack = [];
  const coupling = { "}": "{", "]": "[", ")": "(" };

  for (let i = 0; i < s.length; i++) {
    for (let b of temp) {
      if (b === "{" || b === "[" || b === "(") {
        // 열림
        stack.push(b);
        continue;
      }

      if (stack.length && stack[stack.length - 1] === coupling[b]) {
        // 닫힘
        stack.pop();
        continue;
      }
    }

    if (
      !stack.length &&
      !(temp[0] === "}" || temp[0] === "]" || temp[0] === ")")
    ) {
      answer++;
    }

    temp = temp.slice(1) + temp[0];
    stack = [];
  }

  return answer;
}

// solution("}]()[{");
// 2
// solution("[](){}");
// 3
// solution("}}}");
// 0
