// https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let temp = [];

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        temp.push(j);

        if (j !== i / j) {
          temp.push(i / j);
        }
      }

      if (temp.length >= 3) {
        answer++;
        break;
      }
    }
    temp = [];
  }

  return answer;
}

// solution(10);
// 5
