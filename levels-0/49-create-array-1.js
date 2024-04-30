// 배열 만들기 1

function createArray1(n, k) {
  let array = [];

  for (let i = k; i <= n; i += k) {
    array.push(i);
  }

  return array;
}

// createArray1(15, 5);
// [ 5, 10, 15 ]
