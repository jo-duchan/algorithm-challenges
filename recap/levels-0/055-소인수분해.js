// https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  let count = 2;
  const arr = [];

  while (n > 1) {
    if (n % count === 0) {
      n = n / count;
      arr.push(count);
    } else {
      count++;
    }
  }

  return [...new Set(arr)];
}

// solution(420);
// [ 2, 3, 5, 7 ]
