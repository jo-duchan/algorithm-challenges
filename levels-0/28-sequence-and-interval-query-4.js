// 수열과 구간 쿼리 4

function sequenceAndIntervalQuery4(arr, queries) {
  queries.map(([s, e, k]) => {
    arr = arr.map((n, i) => {
      if (s <= i && i <= e && i % k === 0) {
        return ++n;
      }
      return n;
    });
  });

  return arr;
}

// sequenceAndIntervalQuery4([0, 1, 2, 4, 3],[[0, 4, 1],[0, 3, 2],[0, 3, 3],]);
// [ 3, 2, 4, 6, 4 ]
