// 배열 만들기 3

function createArray3(arr, intervals) {
  const result = intervals.reduce((acc, [start, end]) => {
    return [...acc, ...arr.slice(start, end + 1)];
  }, []);

  return result;
}

// createArray3(
//   [1, 2, 3, 4, 5],
//   [
//     [1, 3],
//     [0, 4],
//   ]
// );
// [2, 3, 4, 1, 2, 3, 4, 5];
