// https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
  const arr = my_string.split(" ");
  const opStack = [];
  let sum = 0;

  for (let i of arr) {
    if (i === "+" || i === "-") {
      opStack.push(i);
      continue;
    }

    if (opStack.length && opStack[opStack.length - 1] === "+") {
      sum += +i;
      continue;
    }

    if (opStack.length && opStack[opStack.length - 1] === "-") {
      sum -= +i;
      continue;
    }

    sum = +i;
  }

  return sum;
}

// solution("3 + 4 + 3 - 2");
// 8
