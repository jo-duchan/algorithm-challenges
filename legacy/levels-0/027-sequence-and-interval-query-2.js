// 수열과 구간 쿼리 2

function sequenceAndIntervalQuery2(arr, queries) {
  const result = [];

  queries.map(([s, e, k]) => {
    const convert = arr
      .filter((n, i) => s <= i && i <= e && k < n)
      .sort((a, b) => a - b);

    result.push(convert[0] ? convert[0] : -1);
  });

  return result;
}

// sequenceAndIntervalQuery2([0, 3, 1, 2, 4, 5, 6], [[2, 5, 2]]);
// [ 4 ]
// sequenceAndIntervalQuery2([0, 1, 2, 4, 3], [[0, 4, 2], [0, 3, 2], [0, 2, 2]]);
// [3, 4, -1]
