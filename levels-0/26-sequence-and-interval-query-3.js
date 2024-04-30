// 수열과 구간 쿼리 3

function sequenceAndIntervalQuery3(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}

// sequenceAndIntervalQuery3(
//   [0, 1, 2, 3, 4],
//   [
//     [0, 3],
//     [1, 2],
//     [1, 4],
//   ]
// );

// [3, 4, 1, 0, 2]
