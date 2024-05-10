// https://school.programmers.co.kr/learn/courses/30/lessons/12943
// 콜라츠 추측

function collatzConjecture(num) {
  let count = 0;

  while (num !== 1 && count !== 500) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }

  return num === 1 ? count : -1;
}

// collatzConjecture(6);
// 8
