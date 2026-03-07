// https://school.programmers.co.kr/learn/courses/30/lessons/181858

function solution(arr, k) {
  const emptyArr = new Array(k).fill(-1);
  const sortSet = [...new Set(arr)];

  const answer = emptyArr.map((x, i) =>
    sortSet[i] !== undefined ? sortSet[i] : x
  );

  return answer;
}

// solution([2, 0, 1, 2, 2, 3], 5);
// [ 2, 0, 1, 3, -1 ]
