// 배열 만들기 5

function createArrays5(intStrs, k, s, l) {
  const result = intStrs.reduce((arr, cur) => {
    const clipNum = parseInt(cur.slice(s, s + l));

    return k < clipNum ? [...arr, clipNum] : arr;
  }, []);

  return result;
}

// createArrays5(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5);
// [ 56789, 99999 ]
