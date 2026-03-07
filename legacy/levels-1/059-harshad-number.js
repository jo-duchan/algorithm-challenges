// https://school.programmers.co.kr/learn/courses/30/lessons/12947
// 하샤드 수

function harshadNumber(x) {
  let sum = 0;

  x.toString()
    .split("")
    .forEach((num) => (sum += parseInt(num)));

  return x % sum === 0;
}

// harshadNumber(111);
// true
