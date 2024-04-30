// 가까운 1 찾기

function findCloseOne(arr, idx) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 && idx <= i) {
      return i;
    }
  }

  return -1;
}

// findCloseOne([1, 0, 0, 1, 0, 0], 4);
// -1
// findCloseOne([1, 1, 1, 1, 0], 3);
// 3
