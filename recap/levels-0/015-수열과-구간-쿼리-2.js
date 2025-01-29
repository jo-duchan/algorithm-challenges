// https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr, queries) {
  const answer = queries.map(([s, e, k]) => {
    const sortedArr = arr.slice(s, e + 1).sort((a, b) => a - b);
    const foundIdx = sortedArr.findIndex((x) => k < x);

    return sortedArr[foundIdx] || -1;
  });

  return answer;
}

// solution(
//   [0, 1, 2, 4, 3],
//   [
//     [0, 4, 2],
//     [0, 3, 2],
//     [0, 2, 2],
//   ]
// );
// [ 3, 4, -1 ]
