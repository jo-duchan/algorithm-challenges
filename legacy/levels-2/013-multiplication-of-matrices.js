// https://school.programmers.co.kr/learn/courses/30/lessons/12949
// 행렬의 곱셈

function multiplicationOfMatrices(arr1, arr2) {
  const resultArr = arr1.map((row) => {
    return row.map((_, i) => {
      return row.reduce((acc, cur, j) => {
        return (acc += cur * arr2[j][i]);
      }, 0);
    });
  });

  return resultArr;
}

// multiplicationOfMatrices(
//   [
//     [1, 4],
//     [3, 2],
//     [4, 1],
//   ],
//   [
//     [3, 3],
//     [3, 3],
//   ]
// );
// [ [ 15, 15 ], [ 15, 15 ], [ 15, 15 ] ]
