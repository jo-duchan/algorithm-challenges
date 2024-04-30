// 더 크게 합치기

function returnLargerValue(a, b) {
  return Math.max(parseInt(`${a}${b}`), parseInt(`${b}${a}`));
}

// returnLargerValue(89, 8);
// 898
