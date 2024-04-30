// 순서 바꾸기

function orderChange(list, n) {
  return [...list.slice(n), ...list.slice(0, n)];
}

// orderChange([2, 1, 6], 1);
// [ 1, 6, 2 ]
