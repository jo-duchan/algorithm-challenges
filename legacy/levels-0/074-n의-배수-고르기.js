// https://school.programmers.co.kr/learn/courses/30/lessons/120905

function solution(n, numlist) {
  const answer = numlist.filter((x) => x % n === 0);

  return answer;
}

// solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);
// [ 6, 9, 12 ]
