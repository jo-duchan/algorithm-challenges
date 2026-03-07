// 수열과 구간 쿼리 1

function sectionQueries1(arr, queries) {
  queries.forEach((querie) => {
    const [s, e] = querie;

    arr.forEach((_, i) => {
      if (s <= i && i <= e) {
        arr[i]++;
      }
    });
  });

  return arr;
}

// sectionQueries1(
//   [0, 1, 2, 3, 4],
//   [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//   ]
// );
// [ 1, 3, 4, 4, 4 ]
