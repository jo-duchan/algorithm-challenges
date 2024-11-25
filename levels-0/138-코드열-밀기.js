// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
  let count = 0;

  while (A !== B) {
    count++;

    A = A.at(-1) + A.slice(0, A.length - 1);

    if (A.length === count) {
      return -1;
    }
  }

  return count;
}

// solution("hello", "ohell");
// 1
