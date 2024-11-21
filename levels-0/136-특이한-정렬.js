// https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
  const answer = numlist.sort(
    (a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a // 거리가 같다면 더 큰 수를 앞에 오도록
  );

  return answer;
}

// solution([1, 2, 3, 4, 5, 6], 4);
// [ 4, 5, 3, 6, 2, 1 ]
