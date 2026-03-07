// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
  let count = 0;

  while (n > 0) {
    count++;

    if (count % 3 === 0 || String(count).includes("3")) {
      continue;
    }

    n--;
  }

  return count;
}

// solution(40);
// 76
