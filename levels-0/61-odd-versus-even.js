// 홀수 vs 짝수

function oddVersusEven(list) {
  const result = list.reduce(
    ([even, odd], cur, idx) => {
      if (idx % 2 === 0) {
        even += cur;
      } else {
        odd += cur;
      }
      return [even, odd];
    },
    [0, 0]
  );

  return Math.max(...result);
}

// oddVersusEven([4, 2, 6, 1, 7, 6]);
// 17
