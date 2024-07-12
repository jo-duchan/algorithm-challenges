// https://school.programmers.co.kr/learn/courses/30/lessons/12980
// 점프와 순간 이동

function solution(n) {
  let k = 1;
  while (n !== 1) {
    if (Number.isInteger(n / 2)) {
      n /= 2;
    } else {
      n -= 1;
      k++;
    }
  }

  return k;
}

// solution(5);
// 2
