// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
  if (common[0] - common[1] === common[1] - common[2]) {
    return common.at(-1) + (common[1] - common[0]);
  } else {
    return common.at(-1) * (common[1] / common[0]);
  }
}

// solution([1, 2, 3, 4]);
// 5
// solution([2, 4, 8]);
// 16
