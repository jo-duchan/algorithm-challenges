// 배열 만들기 4

function createArrays4(arr) {
  let i = 0;
  const stk = [];

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    }

    if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    }

    if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }

  return stk;
}

// createArrays4([1, 4, 2, 5, 3]);
// [ 1, 2, 3 ]
