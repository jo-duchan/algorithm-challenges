// https://school.programmers.co.kr/learn/courses/30/lessons/120829

function solution(angle) {
  if (angle === 90) return 2;
  if (angle === 180) return 4;
  if (0 < angle && angle < 90) return 1;
  if (90 < angle && angle < 180) return 3;
}

// solution(70);
// 1
