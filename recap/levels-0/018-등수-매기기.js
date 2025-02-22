// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
  const calculateAverageScores = score.map(([x, y]) => (x + y) / 2);
  const sortedScores = [...calculateAverageScores].sort((a, b) => b - a);

  const rankByAverageScore = calculateAverageScores.map(
    (score) => sortedScores.findIndex((x) => x === score) + 1
  );

  return rankByAverageScore;
}

// solution([
//   [80, 70],
//   [70, 80],
//   [30, 50],
//   [90, 100],
//   [100, 90],
//   [100, 100],
//   [10, 30],
// ]);
// [4, 4, 6, 2, 2, 1, 7]
