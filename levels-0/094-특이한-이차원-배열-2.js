// https://school.programmers.co.kr/learn/courses/30/lessons/181831
// Array.prototype.every()도 가능.

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }

  return 1;
}

// solution([
//   [19, 498, 258, 587],
//   [63, 93, 7, 754],
//   [258, 7, 1000, 723],
//   [587, 754, 723, 81],
// ]);
// 0
