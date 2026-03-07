// https://school.programmers.co.kr/learn/courses/30/lessons/12950
// 행렬의 덧셈

function matrixAddition(arr1, arr2) {
  const result = arr1.reduce((acc, cur, idx) => {
    const newArr = cur.map((x, i) => x + arr2[idx][i]);

    return [...acc, newArr];
  }, []);

  return result;
}

// matrixAddition(
//   [
//     [1, 2],
//     [2, 3],
//   ],
//   [
//     [3, 4],
//     [5, 6],
//   ]
// );
// [ [ 4, 6 ], [ 7, 9 ] ]

// matrixAddition([[1], [2]], [[3], [4]]);
// [ [ 4 ], [ 6 ] ]
