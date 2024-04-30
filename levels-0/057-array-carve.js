// 배열 조각내기

function arrayCarve(arr, query) {
  const result = query.reduce((acc, cur, idx) => {
    if (idx % 2) {
      acc = acc.slice(cur, arr.length);
    } else {
      acc = acc.slice(0, cur + 1);
    }

    return acc;
  }, arr);

  return result;
}

// arrayCarve([0, 1, 2, 3, 4, 5], [4, 1, 2]);
// [ 1, 2, 3 ]
